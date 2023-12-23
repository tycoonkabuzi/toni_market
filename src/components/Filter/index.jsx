import styled from "styled-components";
const Main = styled.div`
  width: 200px;
  height: auto;
  background-color: #e4e4e4;
  padding: 40px;
  position: absolute;
  z-index: 1;
`;
const Title = styled.h5`
  color: #282828;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Button = styled.button`
  width: auto;
  height: 30px;
  background-color: #e4e4e4;
  border: 1px solid #b4b4b4;
  margin-bottom: 10px;
  color: #585757;
`;
function Filter() {
  return (
    <Main>
      <Title>Gender</Title>
      <Container>
        <Button> Men</Button>
        <Button> Women</Button>
        <Button> Kids</Button>
      </Container>
      <Title>Size</Title>
      <Container>
        <Button>39</Button>
        <Button>40</Button>
        <Button>42</Button>
        <Button>44</Button>
      </Container>
      <Title>Price</Title>
      <Container>
        <Button>$259.99</Button>
        <Button>$479.99</Button>
        <Button>$200.00</Button>
        <Button>$759.99</Button>
      </Container>
    </Main>
  );
}
export default Filter;
