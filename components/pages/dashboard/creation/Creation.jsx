import React from "react";
import Input from "@/components/shared/auth/input/Input";
import Header from "@/components/shared/Header/Header";
import styles from "./Creation.module.scss";
import TextArea from "@/components/shared/TextArea/TextArea";
import Button from "@/components/shared/auth/Button/Button";

const Creation = () => {
  return (
    <div className={styles.container}>
      <Header title={"Campaign Creation"} />
      <form className={styles.form}>
        <Input
          className={styles.input}
          title={"Compaign Name"}
          type={"text"}
          required
        />
        <Input
          className={styles.input}
          title={"Product Name "}
          type={"text"}
          required
        />
        <Input
          className={styles.input}
          title={"Email ID "}
          type={"email"}
          required
        />
        <Input
          className={styles.input}
          title={"Compaign Name"}
          type={"text"}
          required
        />
        <Input
          className={styles.input}
          title={"Product Name "}
          type={"text"}
          required
        />
        <Input
          className={styles.input}
          title={"Email ID "}
          type={"email"}
          required
        />
        <TextArea />

        <div className={styles.details}>
          <Header title={"Application Details"} />
        </div>

        <Input className={styles.input} title={"Name"} type={"text"} required />
        <Input
          className={styles.input}
          title={"Email ID "}
          type={"email"}
          required
        />
        <Input
          className={styles.input}
          title={"Upload Resume "}
          type={"file"}
          required
        />
        <Input
          className={styles.input}
          title={"Instagram ID "}
          type={"text"}
          required
        />
        <Input
          className={styles.input}
          title={" Expected Budget"}
          type={"text"}
          required
        />

        <div className={styles.create__button}>
          <button>
            <span>Create Campaign</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Creation;
