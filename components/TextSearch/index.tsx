import React from "react"
import styled from "styled-components"
import Image from "../basics/Image"
import Input from "../basics/TextInput"
import Container from "../basics/containers/Container"


const Area = styled.div`
  background-color: ${props => props.theme.colors.fieldBackground};
  color: ${props => props.theme.colors.secondaryText};
  width: 490px;
  height: 48px;
  border-radius: 16px;
  display: flex;
  flex-direction: 'row';
  padding: 11.84px;
`

/**
 * @name TextSearch
 * @description Text input search 
 * @returns Component
 */
const TextSearch = () => {

  return (
    <Area>
      <Image src={'/Icons/search/search.png'} width={'24.24px'} height={'24.24px'}/>
      <Container padding={'0px 17.06px'}>
        <Input />
      </Container>
    </Area>
  )
}

export default TextSearch 