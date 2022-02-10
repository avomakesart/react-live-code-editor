import React, { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import CodeContainer from "../code-container";
import CopyButton from "../copy-button";
import scope from "../react-live-scope";
import { liveEditorStyle, liveErrorStyle } from "../styles";

const liveCodePreview = {
  marginTop: "1.25rem",
  padding: "0.75rem",
  borderWidth: "1px",
  borderRadius: "12px",
  zIndex: 1,
  borderColor: "#E2E8F0"
  // wordWrap: 'break-word'
};

const EditableNotice = (props: any) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        top: "-1.25em",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        background: "#011627",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        zIndex: 0,
        letterSpacing: "0.025em",
        color: "#A0AEC0",
        fontSize: "0.75rem",
        fontWeight: "600",
        textAlign: "center",
        textTransform: "uppercase",
        pointerEvents: "none"
      }}
      {...props}
    >
      Editable example
    </div>
  );
};

function ReactLiveBlock({ editable, rawCode, ...rest }: any) {
  const [editorCode, setEditorCode] = useState(rawCode.trim());
  const onChange = (newCode: any) => setEditorCode(newCode.trim());
  const liveProviderProps = {
    code: editorCode,
    scope,
    ...rest
  };

  return (
    <LiveProvider {...liveProviderProps}>
      <LivePreview style={liveCodePreview} />
      <div style={{ position: "relative", zIndex: 0 }}>
        {editable && (
          <CodeContainer>
            <LiveEditor onChange={onChange} style={liveEditorStyle} />
          </CodeContainer>
        )}
        <CopyButton code={editorCode} />
        {editable && <EditableNotice />}
      </div>
      {editable && <LiveError style={liveErrorStyle} />}
    </LiveProvider>
  );
}

export default ReactLiveBlock;
