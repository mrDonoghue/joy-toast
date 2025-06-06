import React from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [isToastOpen, setIsToastOpen] = React.useState(false);

  const handlePopButton = (e) => {
    setIsToastOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    console.log({ message, variant });
  };

  const handleDismiss = React.useCallback((e) => {
    setIsToastOpen(false);
  }, []);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastOpen && (
        <Toast variant={variant} handleDismiss={handleDismiss}>
          {message}
        </Toast>
      )}
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <fieldset className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </fieldset>

        <fieldset className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={option}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === variant}
                  onChange={(e) => setVariant(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handlePopButton}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
