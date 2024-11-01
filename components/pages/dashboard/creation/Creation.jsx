"use client";

import { useFormik } from "formik";
import React, { useContext } from "react";
import Header from "@/components/shared/Header/Header";
import Input from "@/components/shared/auth/input/Input";
import TextArea from "@/components/shared/TextArea/TextArea";
import { LoaderContext } from "@/components/provider/LoaderProvider/LoaderProvider";
import styles from "./Creation.module.scss";
import { PlusSquareIcon } from "@/assets/images/auth/vector";

const validate = (values) => {
  const errors = {};
  if (!values.campaignName) {
    errors.campaignName = "Tələb olunur";
  } else if (values.campaignName.length < 3) {
    errors.campaignName = "3 və ya daha çox simvol olmalıdır";
  }
  if (!values.productName) {
    errors.productName = "Tələb olunur";
  } else if (values.productName.length < 3) {
    errors.productName = "3 və ya daha çox simvol olmalıdır";
  }
  if (!values.budget) {
    errors.budget = "Tələb olunur";
  } else if (values.budget.length < 3) {
    errors.budget = "3 və ya daha çox simvol olmalıdır";
  }
  if (!values.instagramId) {
    errors.instagramId = "Tələb olunur";
  } else if (values.instagramId.length < 3) {
    errors.instagramId = "3 və ya daha çox simvol olmalıdır";
  }
  if (!values.name) {
    errors.name = "Tələb olunur";
  } else if (values.name.length < 3) {
    errors.name = "3 və ya daha çox simvol olmalıdır";
  }

  if (!values.campaignEmail) {
    errors.campaignEmail = "Tələb olunur";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.campaignEmail)
  ) {
    errors.campaignEmail = `Yanlış e-poçt ünvanı (example@domain.com
)`;
  }

  if (!values.userEmail) {
    errors.userEmail = "Tələb olunur";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)
  ) {
    errors.userEmail = `Yanlış e-poçt ünvanı (example@domain.com
)`;
  }

  return errors;
};

const Creation = () => {
  const { setLoading } = useContext(LoaderContext);
  const create = async (values) => {
    setLoading(true);

    setTimeout(() => {
      console.log(values);
      setLoading(false);
    }, 1200);
  };

  const formik = useFormik({
    initialValues: {
      campaignName: "",
      productName: "",
      campaignEmail: "",
      description: "",
      name: "",
      userEmail: "",
      instagramId: "",
      budget: "",
    },
    validate,
    onSubmit: create,
  });

  return (
    <div className={styles.container}>
      <Header title={"Campaign Creation"} />
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.form}>
          <Input
            className={styles.input}
            title={"Campaign Name"}
            placeholder={"Campaign Name"}
            type={"text"}
            name={"campaignName"}
            onChange={formik.handleChange}
            value={formik.values.campaignName}
            errors={formik.errors.campaignName}
            required
          />
          <Input
            className={styles.input}
            title={"Product Name "}
            name={"productName"}
            placeholder={"Product Name "}
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.productName}
            errors={formik.errors.productName}
            required
          />
          <Input
            className={styles.input}
            title={"Email ID "}
            name={"campaignEmail"}
            placeholder={"Email"}
            type={"email"}
            onChange={formik.handleChange}
            value={formik.values.campaignEmail}
            errors={formik.errors.campaignEmail}
            required
          />

          <div className={styles.textarea}>
            <TextArea
              placeholder="Enter your description here..."
              name={"description"}
              onChange={formik.handleChange}
              value={formik.values.description}
              errors={formik.errors.description}
            />
          </div>
        </div>

        <div>
          <div className={styles.details}>
            <Header title={"Application Details"} />
          </div>

          <div className={styles.form}>
            <Input
              className={styles.input}
              title={"Name"}
              name={"name"}
              placeholder={"Name"}
              type={"text"}
              onChange={formik.handleChange}
              value={formik.values.name}
              errors={formik.errors.name}
              required
            />
            <Input
              className={styles.input}
              title={"Email ID "}
              name={"userEmail"}
              placeholder={"Email ID "}
              type={"email"}
              onChange={formik.handleChange}
              value={formik.values.userEmail}
              errors={formik.errors.userEmail}
              required
            />
            <div className={styles.fileInputContainer}>
              <Input
                className={styles.input}
                title={"Upload Resume"}
                type={"file"}
                required
                style={{ display: "none" }}
              />
              <div className={styles.icon}>
                <PlusSquareIcon />
              </div>
            </div>
            <Input
              className={styles.input}
              title={"Instagram ID "}
              name={"instagramId"}
              placeholder={"Instagram ID "}
              type={"text"}
              onChange={formik.handleChange}
              value={formik.values.instagramId}
              errors={formik.errors.instagramId}
              required
            />
            <Input
              className={styles.input}
              title={" Expected Budget"}
              name={"budget"}
              placeholder={" Expected Budget"}
              type={"text"}
              onChange={formik.handleChange}
              value={formik.values.budget}
              errors={formik.errors.budget}
              required
            />
          </div>
        </div>

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
