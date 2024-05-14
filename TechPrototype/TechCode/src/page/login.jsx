import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginFormPage, ProFormText } from "@ant-design/pro-components";
import { Link } from "react-router-dom";
import BasicLayout from "../components/layout";
import backgroundImageUrl from "../imgs/background.jpg";
import logo from "../imgs/logo.png";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // 使用 useNavigate 替代了 useHistory

    const handleSubmit = async (values) => {
        // 这里是校验逻辑，实际应用应该向服务器发送请求进行校验
        const { username, password } = values;
        if (username === "admin" && password === "123456") {
            navigate('/home'); // 使用 navigate 跳转
        } else {
            alert("用户名或密码错误！");
        }
    };

  return (
    <BasicLayout>
      <LoginFormPage
        backgroundImageUrl={backgroundImageUrl}
        logo={logo}
        title="Book Store"
        subTitle="电子书城"
        onFinish={handleSubmit}
        style={{ height: "80vh" }}
      >
        <div style={{ height: "1em" }}></div>
        <ProFormText
          name="username"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined className={"prefixIcon"} />,
          }}
          placeholder={"请输入用户名"}
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined className={"prefixIcon"} />,
          }}
          placeholder={"密码"}
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        />
        <div style={{ marginBlockEnd: 24 }}>
          <Link to="/register">新账号？前往注册</Link>
        </div>
      </LoginFormPage>
    </BasicLayout>
  );
};

export default LoginPage;
