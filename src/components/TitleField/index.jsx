import styled from "styled-components";

const TitleContainer = styled.div`
  width: 500px;
  margin: auto;
  position: relative;
`;
const Title = styled.h1`
  color: white;
  font-size: 100px;
  text-align: center;
`;
function TitleField() {
  return (
    <TitleContainer>
      <Title>Collection</Title>
    </TitleContainer>
  );
}
export default TitleField;
