"use client";
import React, { useState } from "react";
import Input from "../components/Input";
import { loginUser } from "../services/auth";
import { getAllFlights } from "../services/flight";
import Link from "next/link";
import showAlert from "../utils/sweetalert";
import { useRouter } from "next/navigation";
import LoginLayout from "../loginLayout";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const response = await loginUser(userName, password);
      showAlert("Giriş Başarılı!", response.detail, "success");
      router.push("/");
    } catch (error) {
      showAlert("Bir Hata Oluştu!", error.message, "error");
    }
  };

  return (
    <LoginLayout>
      <div className="col-12 text-light p-5">
        <h1 className="mb-4">Giriş Yap</h1>
        <form>
          <div className="mb-3">
            <Input
              label={"Kullanıcı Adı"}
              name={"userName"}
              setProp={setUserName}
              placeholder={"Kullanıcı Adı"}
              type={"text"}
              value={userName}
              key={"userName"}
            />
          </div>
          <div className="mb-3">
            <Input
              label={"Şifre"}
              name={"password"}
              setProp={setPassword}
              placeholder={"Şifre"}
              type={"password"}
              value={password}
              key={"userName"}
            />
          </div>
          <p>
            Üyeliğiniz yok mu?{" "}
            <Link className="link-light" href={"/signup"}>
              Üye Ol
            </Link>
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </LoginLayout>
  );
};

export default Login;
