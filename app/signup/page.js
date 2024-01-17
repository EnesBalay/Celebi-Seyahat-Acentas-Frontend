"use client";
import React, { useState } from "react";
import { signupUser } from "../services/auth";
import Input from "../components/Input";
import showAlert from "../utils/sweetalert";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSignup = async () => {
    try {
      const response = await signupUser(email, password, "user", userName);
      console.log(response);
      if (response.status == 201) {
        showAlert("Kayıt Gerçekleşti!", response.data.message, "success");
        router.push("/login");
      } else {
        showAlert(
          "Hata Oluştu!",
          "Bir hata oluştu lütfen daha sonra tekrar deneyiniz.",
          "error"
        );
      }
    } catch (error) {
      showAlert("Hata Oluştu!", error.message, "error");
    }
  };

  return (
    <div className="container mt-5 text-light">
      <h1 className="mb-4">Kayıt Ol</h1>
      <form>
        <div className="mb-3">
          <Input
            label={"E-Posta"}
            name={"email"}
            setProp={setEmail}
            placeholder={"E-Posta"}
            type={"email"}
            value={email}
            key={"email"}
          />
        </div>
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
            key={"password"}
          />
        </div>
        <div className="mb-3"></div>
        <p>
          Zaten Üye Misiniz?{" "}
          <Link className="link-light" href={"/login"}>
            Giriş Yap
          </Link>
        </p>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSignup}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
