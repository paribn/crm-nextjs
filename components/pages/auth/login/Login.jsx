import React from "react";
import Input from "@/components/shared/auth/input/Input";
import styles from "./login.module.scss";
import Button from "@/components/shared/auth/Button/Button";
import { LoginBackground } from "@/assets/images/auth/vector";
const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>

      <form className={styles.form}>
        <Input
          className={styles.input}
          title={"Email"}
          placeholder={"Enter your email"}
          type={"email"}
          required
        />

        <Input
          className={styles.input}
          title={"Password"}
          placeholder={"••••••••"}
          type={"password"}
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
