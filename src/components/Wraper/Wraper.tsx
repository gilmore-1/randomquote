import styled from "styled-components";

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.color};
`;
export default Wraper;
