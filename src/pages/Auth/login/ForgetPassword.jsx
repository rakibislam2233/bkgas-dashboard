import { Button, Checkbox, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/bkgazLogo.png";
import { GoArrowLeft } from "react-icons/go";
// import baseURL from "../../config";
// import Swal from "sweetalert2";
// import { IconLock } from "@tabler/icons-react";
// import { usePostLoginMutation } from "../../redux/Features/postLoginApi";
// import PhoneInput from "react-phone-number-input";
// import { useState } from "react";
import "./login.css";

const ForgetPassword = () => {
  const navigate = useNavigate();
  // const [phoneNumber, setPhoneNumber] = useState();
  //   const [setData, { isLoading,isError,status,error,data }] = usePostLoginMutation();
  // console.log(phoneNumber);
  //    const onFinish = async (value) => {

  //    console.log(value);
  //    console.log(isLoading,isError,status,error,data );
  //   try {
  //     const response = await setData(value);
  //     console.log(response?.error?.data?.message);
  //     if(response?.data?.statusCode == 200){
  //       console.log(data);
  //       localStorage.setItem("token", response?.data?.data?.token);
  //       localStorage.setItem(
  //         "user-update",
  //         JSON.stringify(response?.data?.data?.attributes)
  //       );

  //       Swal.fire({
  //         position: "top-center",
  //         icon: "success",
  //         title: response?.data?.message,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       navigate("/");
  //     }else{
  //       Swal.fire({
  //         icon: "error",
  //         title: "Login Failed , Try Again...",
  //         text: response?.error?.data?.message,
  //       })
  //     }

  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Login Failed , Try Again...",
  //       text: error?.data?.message,
  //     })
  //   }

  //   };
  const onFinish =  () => {
    navigate('../verifyEmail');
    console.log("first")
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#1397D5]">
 
        <div className="p-24 bg-[#B6DFF2]  rounded-xl">
          <div className="mx-auto">
            <img className="mx-auto w-48" src={logo} alt="" />
            <div className="flex items-center justify-center gap-2">
              <Link to="/auth">
                <GoArrowLeft className="text-[32px]" />
              </Link>

              <h1 className="text-[24px] font-medium my-[24px]">
                Forgot password
              </h1>
            </div>
            <p className="text-center mx-auto w-[80%] font-medium mb-[24px] text-[#5C5C5C] text-[16px]">
            Please enter your email address to reset
            your password.
            </p>
            <Form
              name="normal_login"
              // className="login-form"
              labelCol={{ span: 22 }}
              wrapperCol={{ span: 40 }}
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              className="w-[300px] mt-4 mx-auto"
            >
              <Form.Item
                name="email"
                // label={
                //   <span className="text-secondary text-[12px] font-medium">
                //     Password
                //   </span>
                // }
                rules={[
                  {
                    type: 'email',
                    required: true,
                    message: "Please write your email",
                  },
                ]}
              >
                <Input
                  size="large"
                  // onChange={handleChange}
                  placeholder="Email"
                  name="current_password"
                  prefix={
                    //
                    ""
                  }
                  style={{
                    border: "2px solid #1397D5",
                    borderRadius: "16px",
                    height: "52px",
                    paddingLeft: '16px',
                    background: "#ffffff",
                    outline: "none",
                    marginBottom: "10px",
                  }}
                  bordered={false}
                />
              </Form.Item>

              

              <Form.Item>
                <Button
                  // type="primary"
                  style={{
                    backgroundColor: "#1397D5",
                    borderRadius: "16px",  
                    color: "#fff",
                    size: "18px",
                    height: "56px",
                  }}
                  htmlType="submit"
                  className=" w-[300px] 
                   h-[56px]  py-4 mt-2 text-white hover:border-none border-none rounded-lg"
                >
                  Send OTP
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
   
  );
};

export default ForgetPassword;
