import React from "react";
import { useClipboard } from "../../hooks/use-clipboard";
import { ButtonOptions } from "../types";
import styles from "./copy-button.module.css";

interface CopyButtonProps extends ButtonOptions {
  code: string;
}

function CopyButton({ code, ...props }: CopyButtonProps) {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <button
      style={{
        position: "absolute",
        textTransform: "uppercase",
        fontSize: "0.8rem",
        height: "24px",
        top: 0,
        zIndex: 1,
        right: "1.25em"
      }}
      {...props}
      className={styles["devex_copy-button"]}
      onClick={onCopy}
    >
      {hasCopied ? "Copied" : "Copy"}
    </button>
  );
}

export default CopyButton;
