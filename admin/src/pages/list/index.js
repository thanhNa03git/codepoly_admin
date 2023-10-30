import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGridPremium,GridToolbar  } from "@mui/x-data-grid-premium";
import { tokens } from "../../theme";
import { mockData } from "../../data/mockData";
import Header from "../../components/Header";
// ICONS
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export const List = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        // ID
        { field:"id", headerName: "ID", width:50},
        // HO VA TEN
        {
        field: "fullName",
        headerName: "Họ và Tên",
        width:200,
        valueGetter: (params) =>
            `${params.row.lastName || ""} ${params.row.firstName || ""}`
        },
        //USERNAME
        {
        field: "userName",
        headerName: "Tài khoản",
        width:150,
        valueGetter:  (params) =>
            `${params.row.userName||""}${params.row.code}`,
        align: "left",
        },
        // CHUYEN NGANH
        {
        field: "major",
        headerName: "Chuyên ngành",
        width:100,
        },
        //EMAIL
        {
        field: "email",
        headerName: "Email",
        width:200,
        },    
        // ROLE level
        {
        field: "role",
        headerName: "Phân quyền",
        width:150,
        renderCell: ({ row: { role } }) => {
            return (
            <Box width="80%" m="0 auto" p="5px" display="flex" justifyContent="center"
                backgroundColor={ role === "admin"
                    ? colors.redAccent[600]
                    : role === "mentor"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
            >
                {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {role === "mentor" && <AccountCircleOutlinedIcon />}
                {role === "student" && <Groups2OutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {role}
                </Typography>
            </Box>
            );
        },
    },
]
    return (
        <Box m="20px">
        <Box display="flex" justifyContent="space-between" >
            <Header title="THÔNG TIN TẤT CẢ NGƯỜI DÙNG" subtitle="Quản lý tài khoản User" />
            <Box>
                        <Button 
                            sx={{backgroundColor:colors.blueAccent[700],
                                color: colors.grey[100],
                                fontSize: "14px",
                                fontWeight: "bold",
                                padding: "10px 20px"}}
                            
                        >
                            <PersonAddAltIcon/> Thêm mới
                        </Button>
                    </Box>
        </Box>
        <Box
            // m="40px 0 0 0"
            height="75vh"
            sx={{
            "& .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none",
            },
            "& .name-column--cell": {
                color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
            },
            }}
        >
            <DataGridPremium
            getRowId={(mockData)=>mockData.id}
            checkboxSelection
            rows={mockData}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            />
        </Box>
        </Box>
    );
};
