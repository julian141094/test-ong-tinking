import React from "react"
import styled from "styled-components"
import Image from "../basics/Image"
import Input from "../basics/TextInput"
import Container from "../basics/containers/Container"
import { useDispatch } from 'react-redux'
import { recipeList } from "../../services/fakeData"

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
const TextSearch = (  ) => {
  // Consts
  const dispatch = useDispatch()
  
  //Normal functions
  /**
   * @name handleChange
   * @description Handle field change (filter), and set new list of recipes at store
   * @param event string
   * @return Nothing
   */
  const handleChange = (event: string) => {
    let val = event.target.value
    if (val === '') {
      dispatch({ type: 'SET_LIST_RECIPES', payload: recipeList})
    } else {
      let obj = recipeList.filter(item => item.name.toLowerCase().includes(val.toLowerCase()))
      dispatch({ type: 'SET_LIST_RECIPES', payload: obj})
    }
  }

  return (
    <Area>
      <Image src={'/Icons/search/search.png'} width={'24.24px'} height={'24.24px'}/>
      <Container padding={'0px 17.06px'}>
        <Input type={'filter'} onChange={handleChange}/>
      </Container>
    </Area>
  )
}

export default TextSearch 