import styled from "@emotion/styled";

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  position: relative;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2.2em;
  user-select: none;
  opacity: 0.7;
`;

export const CopyCode = styled.button`
  position: absolute;
  right: 0.25em;
  border: none;
  border-radius: 3px;
  margin: 0.25rem;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;
