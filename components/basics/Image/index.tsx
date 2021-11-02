import styled from "styled-components"

const Image = styled.img`
  width: ${props => props.width || '50px'};
  height: ${props => props.height || '50px'};;
`

export default Image