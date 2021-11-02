import styled from "styled-components";
import ReadArea from "../ReadArea";

const Area = styled.div`
  height: 100vh;
  width: 464px;
  background-color: white;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 11;
`

const Form = () => {
  return (
    <Area>
      <ReadArea/>
    </Area>
  )
}

export default Form