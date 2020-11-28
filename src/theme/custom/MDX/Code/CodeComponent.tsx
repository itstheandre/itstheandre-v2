import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Pre, CopyCode, LineNo } from "./styles";
import { copyToClipboard } from "../../../../utils";

export function Code({ codeString, language, ...props }) {
  //   if (props["react-live"]) {
  //     // <LiveProvider code={codeString} noInline theme={theme}>
  //     return (
  //       <LiveProvider
  //         code={`
  //   const Header = styled.div\`
  //     color: palevioletred;
  //     font-size: 18px;
  //   \`

  //   render(<Header>{headerProps.text}</Header>)
  // `}
  //         scope={styled}
  //         noInline
  //         theme={theme}
  //       >
  //         <LiveEditor />
  //         <LiveError />
  //         <LivePreview />
  //       </LiveProvider>
  //     );
  //   }
  function handleClick() {
    copyToClipboard(codeString);
  }
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
}
