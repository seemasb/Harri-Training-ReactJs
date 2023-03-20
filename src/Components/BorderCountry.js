import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
`;

function BorderCountry(props) {
    return ( 
        <StyledDiv>
            {props.country}
        </StyledDiv>
     );
}

export default BorderCountry;