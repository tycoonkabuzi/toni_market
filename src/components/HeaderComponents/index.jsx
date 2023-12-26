import styled from "styled-components";
const Main = styled.div`
  background-image: url(${(props) => props.pictureBackground});
  background-size: cover;
  height: 375px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 10px;
`;
const Overlay = styled.div`
  background-color: ${(prop) => prop.backgroundColor};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function HeaderComponent({ picture, color }) {
  const pictureBackground = picture;
  const backgroundColor = color;
  return (
    <Main pictureBackground={pictureBackground}>
      <Overlay backgroundColor={backgroundColor} />
    </Main>
  );
}
export default HeaderComponent;
