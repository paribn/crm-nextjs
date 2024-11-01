"use client";

import React, { useContext, useRef } from "react";
import Input from "@/components/shared/auth/input/Input";
import Button from "@/components/shared/auth/Button/Button";
import styles from "./login.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoaderContext } from "@/components/provider/LoaderProvider/LoaderProvider";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { setLoading } = useContext(LoaderContext);
  const inputRefs = {
    email: useRef(),
    password: useRef(),
  };

  const login = async (event) => {
    event.preventDefault();

    setLoading(true);

    //Fake API sorğusu
    setTimeout(() => {
      if (
        inputRefs.email.current.value === "admin@pari.az" &&
        inputRefs.password.current.value === "admin"
      ) {
        toast.success("Giriş uğurludur.");
        router.push("/dashboard");
      } else {
        toast.error(
          "Daxil etdiyiniz məlumatlar yalnışdır. Yenidən məlumat gözdən keçirin."
        );
      }

      setLoading(false);
    }, 1200);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>

      <form className={styles.form} onSubmit={login}>
        <Input
          className={styles.input}
          title={"Email"}
          placeholder={"Enter your email"}
          type={"email"}
          ref={inputRefs.email}
          required
        />

        <Input
          className={styles.input}
          title={"Password"}
          placeholder={"••••••••"}
          type={"password"}
          ref={inputRefs.password}
          required
        />
        <div className={styles.button}>
          <Button text={"Sign in"} />
        </div>
      </form>
    </div>
  );
};

export default Login;
