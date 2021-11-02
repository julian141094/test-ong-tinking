import styled from "styled-components";

const Element = styled.button`
  background: ${props => props.theme.colors.nineth};
  border-color: transparent;
  border-radius: 30px;
  color: white;
  position: absolute;
  width: 56px;
  height: 56px;
  z-index: 5;
  bottom: 0;
  right: 0;
  margin: 0px 24px 24px 0px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FloadButton = () => {
  return (
    <Element>
      +
    </Element>
  ) 
}

export default FloadButton