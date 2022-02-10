import theme from "prism-react-renderer/themes/nightOwl";
import React, { useEffect } from "react";
import { useBoolean } from "../../hooks/use-boolean";
import CodeContainer from "../code-container";
import CopyButton from "../copy-button";
import Highlight from "../highlight";

import ReactLiveBlock from "../react-live-block";

function CodeBlock(props: any) {
  const [isMounted, { on }] = useBoolean();
  useEffect(
    /**
     * Lazily-load <ReactLiveBlock /> to save bundle size.
     */
    on,
    [on]
  );

  const rawCode = props.rawCode.trim();

  const reactLiveBlockProps = {
    rawCode,
    // language,
    theme,
    noInline: false,
    // mountStylesheet,
    render: props.render
  };

  if (props.language === "jsx") {
    return <ReactLiveBlock editable={true} {...reactLiveBlockProps} />;
  }

  if (isMounted && props.render) {
    /**
     * @TODO Not sure if this is even used?
     */
    return (
      <div style={{ marginTop: 32 }}>
        <ReactLiveBlock editable={false} {...reactLiveBlockProps} />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <CodeContainer>
        <Highlight
          codeString={rawCode}
          language={props.language}
          theme={theme}
          metastring={rawCode.trim()}
          showLines={false}
        />
      </CodeContainer>
      <CopyButton code={rawCode} />
    </div>
  );
}

export default CodeBlock;
