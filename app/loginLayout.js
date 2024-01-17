import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getCurrentUser } from "./services/auth";

const LoginLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  async function isUserAuth() {
    try {
      const user = await getCurrentUser();
      setUser(user.data.currentUser);
    } catch (error) {
      setUser(null);
    }
  }
  useEffect(() => {
    user?.email && router.push("/flight");
  }, [user]);

  if (user === null) {
    isUserAuth();
  }
  return <> {children}</>;
};

export default LoginLayout;
