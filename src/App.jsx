import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.main`
  background-color: green;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>River&apos;s Edge Retreat</H1>
        <Button onClick={() => alert('Check in')}>Check in</Button>
        <Button onClick={() => alert('Check out')}>Check out</Button>

        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
