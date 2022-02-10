import React from "react";

function CodeContainer(props: any) {
  return (
    <div
      style={{
        padding: "1.25rem",
        borderRadius: "8px",
        marginTop: "2rem",
        marginBottom: "2rem",
        background: "#011627"
      }}
      {...props}
    />
  );
}

export default CodeContainer;
