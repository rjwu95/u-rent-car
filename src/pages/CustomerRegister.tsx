import React from "react";
import { CustomerForm } from "../components";

export const CustomerRegister = () => {
  const onFinish = (a: any) => {
    console.log(a);
  };

  return <CustomerForm onFinish={onFinish} />;
};
