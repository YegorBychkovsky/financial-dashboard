import React from "react";
import styles from "./styles.module.scss";

function Button({ onClick, text }) {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        {text}
      </button>
    </div>
  );
}

export default Button;
