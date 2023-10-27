import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Sidebar } from "./pages/global/Sidebar";
import { Topbar } from "./pages/global/Topbar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { FAQ } from "./pages/faq";
import { Form } from "./pages/form";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <Sidebar isSidebar={isSidebar}/>
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar}/>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/list" element={<List />} /> */}
                {/* <Route path="/mentors" element={<Mentors />} /> */}
                {/* <Route path="/students" element={<Students />} /> */}
                <Route path="/form" element={<Form />} />
                {/* <Route path="/chart" element={<Chart />} /> */}
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
