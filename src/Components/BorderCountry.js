import styled from 'styled-components';
import { useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";

const StyledDiv = styled.div`
background-color: ${(props) => props.theme.Lightbackground};
color: ${(props) => props.theme.color};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600; 
    font-size: 14px; 
    padding-bottom: 5px;
    padding-top: 5px;

  @media screen and (max-width: 400px) {
    font-size: 12px;
    padding-top: 5px;
  }
`;

function BorderCountry(props) {
  const theme = useContext(ThemeContext);
  return (
    <StyledDiv theme={theme} >
      {props.country}
    </StyledDiv>
  );
}

export default BorderCountry;