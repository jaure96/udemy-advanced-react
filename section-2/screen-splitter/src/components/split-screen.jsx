import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: ${(props) => props.flex || 1};
`;

export const SplitScreen = ({ children, lefWidth, rightWidth }) => {
  const [left, right] = children;

  return (
    <Container>
      <Panel flex={lefWidth}>{left}</Panel>

      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};
67;
