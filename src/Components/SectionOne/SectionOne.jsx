import React from "react";
import styles from "../SectionOne/SectionOne.module.css";

const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      <div className={styles.text}>
        <h2>SELECT YOUR NEW PERFECT STYLE</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
      </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default SectionOne;
