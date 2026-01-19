"use client";
import LoginForm from "@/components/auth/LoginForm";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
   <Suspense fallback={<div>Loading...</div>}>
      <LoginForm /> {/* LoginForm is a client component */}
    </Suspense>
  );
};

export default LoginPage;
