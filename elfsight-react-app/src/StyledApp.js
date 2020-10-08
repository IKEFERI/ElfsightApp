import styled from "styled-components";

export const StyledApp = styled.div`
  max-width: 100%;
  overflow: hidden;
  position:relative;
  text-align: center;
  background-color: #887c58;
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  button{
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  }
`;
export const Main = styled.main`
    background-color: #c5b88f; 
    padding: 80px 40px;
    max-width: 1200px;
    margin: auto;
    @media screen and (max-width: 768px){
    padding: 80px 0;
    }
`;
export const Section = styled.section`
    width: 100%;
    margin-bottom: 40px;
`;