import React from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router"

export default function DirectToLogin() {
  console.log("directToLogin called");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("directToLogin useEffect called");
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 3000);
  }, []);

  return (
    <div>
      Giriş sayfasına yönlendiriliyorsunuz...
    </div>
  );
}