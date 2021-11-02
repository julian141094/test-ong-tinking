import styled from "styled-components"
import Container from "../../../basics/containers/Container"
import { Normal } from "../../../basics/Text"

type ItemProps = {
  text : string
}

const Text = styled(Normal)`
  display: list-item;
  list-style-type: disc; 
  list-style-position: inside;
`

const Item = ( {text} : ItemProps ) => {
  return (
    <Container type={'row'}>
      <Text>{text}</Text>
    </Container>
  )
}

export default Item