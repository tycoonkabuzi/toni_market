import styled from "styled-components";

const TitleContainer = styled.div`
  height: inherit;
  margin: auto;
  position: relative;
`;
const Title = styled.h1`
  color: white;
  font-size: 100px;
  text-align: center;
`;
function TitleField({ title }) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  );
}
export default TitleField;
