import styled from "styled-components"
import ReadArea from "../ReadArea"
import Fields from "../Fields"
import { useSelector } from 'react-redux'

const Area = styled.div`
  height: 100vh;
  overflow-y: scroll;
  width: 464px;
  background-color: white;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 11;
`

const Form = () => {
  const tools = useSelector(state => state.tools )
  
  const individual = useSelector(state => state.tools )
  return (
    <Area>
      {
        tools.isReading ? <>
          <ReadArea/>
        </>  : 
        tools.isCreating || tools.isEditing ? <>
          <Fields/>
        </> : 
        null
      }
    </Area>
  ) 
}

export default Form