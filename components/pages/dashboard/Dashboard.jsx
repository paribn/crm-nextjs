import React from "react";
import Table from "@/components/shared/Table/Table";
import styles from "@/components/shared/Table/table.module.scss";
import Filters from "@/components/shared/Table/searchFilters/Filters";
import {
  CheckIcon,
  FrameIcon,
  RejectIcon,
  ResumeIcon,
} from "@/assets/images/auth/vector";
import Title from "@/components/shared/Title/Title";

const Dashboard = () => {
  const header = ["Name", "Email ID", "Social Media", "Resume", "Actions"];

  const data = [
    {
      name: "Rohit",
      email: "pari@mail.ru",
      socialMedia: "Linkedin",
      resume: "Resume.pdf",
    },
    {
      name: "Rohit",
      email: "pari@mail.ru",
      socialMedia: "Linkedin",
      resume: "Resume.pdf",
    },
    {
      name: "Rohit",
      email: "pari@mail.ru",
      socialMedia: "Linkedin",
      resume: "Resume.pdf",
    },
    {
      name: "Rohit",
      email: "pari@mail.ru",
      socialMedia: "Linkedin",
      resume: "Resume.pdf",
    },
    {
      name: "Rohit",
      email: "pari@mail.ru",
      socialMedia: "Linkedin",
      resume: "Resume.pdf",
    },
    {
      name: "Rohit",
      email: "pari@mail.ru",
      socialMedia: "Linkedin",
      resume: "Resume.pdf",
    },
    {
      name: "Rohit",
      email: "pari@mail.ru",
      socialMedia: "Linkedin",
      resume: "Resume.pdf",
    },
  ];

  return (
    <>
      <Title
        title={"Application"}
        desc={"Collaborate with influencers"}
        btnSubject={"Add New +"}
      />
      <Filters options1={"Status"} options2={"categorys"} />

      <Table headers={header}>
        {data.map((row, index) => (
          <tr className={styles.row} key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className={styles.cell}>
                <div className={styles.image}>
                  <p>DS</p>
                </div>
                <span>{row.name}</span>
              </div>
            </td>
            <td>{row.email}</td>
            <td>{row.socialMedia}</td>
            <td>
              <div className={styles.resume}>
                <span>
                  <ResumeIcon />
                </span>
                <p href="#">{row.resume}</p>
              </div>
            </td>
            <td>
              <div className={styles.actions__button}>
                <div className={`${styles.button} ${styles.accept}`}>
                  <button>
                    <CheckIcon />
                  </button>
                </div>
                <div className={`${styles.button} ${styles.reject}`}>
                  <button>
                    <RejectIcon />
                  </button>
                </div>
              </div>
            </td>

            <td>
              <FrameIcon />
              <FrameIcon />
              <FrameIcon />
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default Dashboard;
