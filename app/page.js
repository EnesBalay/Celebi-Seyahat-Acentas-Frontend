"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCurrentUser } from "./services/auth";
import { useRouter } from "next/navigation";
import LoginLayout from "./loginLayout";

export default function Home() {
  return (
    <LoginLayout>
      <div className="col-12 text-light">
        <h1 className="mb-4">Hoş Geldiniz!</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="alert alert-info mb-4">
              Bilet Almak İçin Sisteme Giriş Yapmanız Gerekmektedir.
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-4 col-lg-3">
            <Link href="/login" className="btn btn-lg btn-primary">
              Giriş Yap
            </Link>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <Link href="/signup" className="btn btn-lg btn-success">
              Kayıt Ol
            </Link>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}
