"use client";

import { useRouter } from "next/navigation";
import LogoutBtn from "../components/LogoutBtn";

export default function Page() {
  const router = useRouter();

  return (
    <div className="row">
      <div className="col-12">
        <LogoutBtn />
      </div>
    </div>
  );
}
