import React, {useState, useEffect} from "react"
import Container from "../basics/containers/Container"
import Image from "../basics/Image"
import {Title, Normal} from "../basics/Text"
import TextSearch from '../TextSearch'
import Select from "../SelectFilter"
import Table from '../Table'
import { useDispatch, useSelector } from 'react-redux'

/**
 * @name Recipes
 * @description Display the filter or select to re order the recipe list data
 * @returns Component
 */
const Recipes = () => {
  // Consts
  const dispatch = useDispatch()
  const [selected, setSelected] = useState('All')
  const recipes = useSelector(state => state.home.listRecipes)

  // UseEffects
  useEffect(() => {
    reorganiceRecipeList()
  }, [selected])

  // Normal Functions
  const reorganiceRecipeList = () => {
    let arr = []
    switch (selected) {
      case 'Active':
        arr = recipes.sort(( // true first
          (a, b) => Number(b.checked) - Number(a.checked) ))
        break;
      case 'Inactive':
        arr = recipes.sort((  // false first
          (a, b) => Number(a.checked) - Number(b.checked) ))
        break;
      case 'Major':        
        arr = recipes.sort(( // true first
          (a, b) => Number(b.weight) - Number(a.weight) ))
        break;
      case 'Minus':
        arr = recipes.sort((  // false first
          (a, b) => Number(a.weight) - Number(b.weight) ))
        break;
      default:
        arr = recipes.sort((  // false first
          (a, b) => Number(a.id) - Number(b.id) ))        
        break;
    }
    dispatch({ type: 'SET_LIST_RECIPES', payload: []})
    dispatch({ type: 'SET_LIST_RECIPES', payload: arr})
  }

  return(
    <Container type='row'> 
      <Image 
        src='/leftImg.png'
        width={'342px'}
        height={'100vh'}
      />
      <Container type='column' padding={'80px 48px'}>
        <Container padding={'32px 0px'}>
          <Title>Kitchen Recipes</Title>
        </Container>
        <Container 
          type={'row'}
          padding={'0px 0px'}
        >
          <TextSearch/>
          <Select 
            preText={'Cooked before: '} 
            updateSelect={setSelected} 
            selected={selected}
          />
          <Select 
            preText={'Order by: '} 
            updateSelect={setSelected} 
            selected={selected}
          >
            <option value="Major"
              selected={selected === 'Major' ? true : false} 
            >mayor</option>
            <option value="Minus"   
              selected={selected === 'Minus' ? true : false} 
            >minus</option>
          </Select>
        </Container>
        <Container padding={'24px 0px'}>
          <Table/>
        </Container>
      </Container>
    </Container>
  )
}

export default Recipes 