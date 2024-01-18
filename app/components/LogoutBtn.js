"use client";
import React, { useContext, useEffect } from "react";
import { logout } from "../services/auth";
import showAlert from "../utils/sweetalert";
import { useRouter } from "next/navigation";
import { DefaultContext } from "../loginLayout";

const LogoutBtn = () => {
  const router = useRouter();
  async function logoutFunc() {
    try {
      const response = await logout();
      showAlert("Çıkış Yapıldı!", response.message, "success");
      router.push("/");
    } catch (error) {
      showAlert("Çıkış Yapıldı!", error.message, "success");
      router.push("/");
    }
  }
  return (
    <button className="btn btn-danger" onClick={() => logoutFunc()}>
      Çıkış Yap
    </button>
  );
};

export default LogoutBtn;
