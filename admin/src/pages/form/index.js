import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Button, TextField } from '@mui/material';
import Header from '../../components/Header';
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from 'react';

// 
const initialValues = {
    studentCode:"",  //default: ps******
    firstName:"",
    lastName:"",
    userName:"",     //default: lastName + studentCode
    password:"",     //default: user123
    confirm:"",
    email:"",        //default: "lastName + studentCode" + @fpt.sv.edu.vn
    // contact: "",
    major:"",        //default: select
    avatar:"",       //default: user.jpg
}
// 
const checkoutForm = yup.object().shape({
    studentCode: yup.string().required("Không được để trống"),
    firstName: yup.string().required("Không được để trống"),
    lastName: yup.string().required("Không được để trống"),
    userName: yup.string().required("Không được để trống"),
    password: yup.string()
                .required("Không được để trống")
                .min(6, "Mật khẩu phải dài từ 8 kí tự")
                .matches(/[0-9]/, "Mật khẩu yêu cầu 1 chữ số")
                .matches(/[a-z]/, "Mật khẩu yêu cầu 1 kí tự thường")
                .matches(/[A-Z]/, "Mật khẩu yêu cầu 1 kí tự hoa")
                .matches(/[^\w]/, "Mật khẩu yêu cầu 1 kí hiệu đặc biệt"),
    confirm: yup.string()
                .required("Không được để trống")
                .oneOf([yup.ref('password'),null], "Phải khớp với giá trị trường mật khẩu"),
    email: yup.string()
                .email("Email không hợp lệ")
                .required("Không được để trống"),
    // contact: yup.string()
    //             .matches(phoneRegEx, "Số điện thoại không hợp lệ"),
    major: yup.string().required("Không được để trống"),
    avatar: yup.string().required("Không được để trống"),
});
// MÃ ĐIỆN THOẠI CHÍNH QUY
// const phoneRegEx=
//     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// 


export const Form = () => {
    // RESPONSIVE FORM
    const isNonMobile = useMediaQuery("(min-width: 900px)")
    // LẤY DATA TỪ BÀN PHÍM FORM
    const [formData, setFormData] = useState({});
    const handleFormSubmit = (values) => {
        alert('Thêm mới thành công');
        console.log(typeof formData);
        values.preventDefault(); 
    };
    return (
        <Box m="20px">
            <Header title="THÊM MỚI" subtitle="Tạo hồ sơ người dùng mới"/>

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutForm}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    resetForm
                }) => (
                    <form onSubmit={handleSubmit}>
                        {/* FORM */}
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            {/* STUDENT CODE */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label="Mã sinh viên"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.studentCode}
                                name='studentCode'
                                error={!!touched.studentCode && !! errors.studentCode}
                                helperText={touched.studentCode && errors.studentCode}
                                sx={{ gridColumn: "span 2" }}
                            />
                            {/* USER NAME */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label="Tài khoản"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.userName}
                                name='userName'
                                error={!!touched.userName && !! errors.userName}
                                helperText={touched.userName && errors.userName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            {/* FIRST NAME */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label="Tên"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name='firstName'
                                error={!!touched.firstName && !! errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            {/* LÁT NAME */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label="Họ và Tên lót"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name='lastName'
                                error={!!touched.lastName && !! errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            
                            {/* EMAIL */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label="Email nội bộ"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name='email'
                                error={!!touched.email && !! errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            {/* MAJOR */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label="Chuyên ngành"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.major}
                                name='major'
                                error={!!touched.major && !! errors.major}
                                helperText={touched.major && errors.major}
                                sx={{ gridColumn: "span 2" }}
                            />
                            {/* PASSWORD */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='password'
                                label="Mật khẩu"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name='password'
                                error={!!touched.password && !! errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 2" }}
                            />
                            {/* CONFIRM */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='password'
                                label="Xác nhận mật khẩu"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.confirm}
                                name='confirm'
                                error={!!touched.confirm && !! errors.confirm}
                                helperText={touched.confirm && errors.confirm}
                                sx={{ gridColumn: "span 2" }}
                            />
                            {/* AVATAR */}
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label="Avatar"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.avatar}
                                name='avatar'
                                error={!!touched.avatar && !! errors.avatar}
                                helperText={touched.avatar && errors.avatar}
                                sx={{ gridColumn: "span 2" }}
                            />     

                        </Box>
                        {/* BUTTON CREATE */}
                        <Box display="flex" justifyContent="center" marginTop={"30px"} >

                            <Button type="reset" onClick={resetForm} variant='contained' size='large'  sx={{fontWeight:"bold", marginRight:"20px"}}>
                                Làm trống
                            </Button>
                            <Button type="submit" onClick={handleFormSubmit} variant='contained' size='large' color='secondary' sx={{fontWeight:"bold"}}>
                                Tạo mới
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}