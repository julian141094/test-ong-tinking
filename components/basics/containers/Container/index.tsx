import styled from "styled-components"

const Container = styled.div`
  flex-direction: ${props => props.type || "row"};
`