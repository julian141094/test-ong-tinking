import React, {useState, useEffect} from 'react'
import Container from "../basics/containers/Container"
import Head from './Head'
import Row from './Row'
import { useDispatch, useSelector } from 'react-redux'
import NothingText from '../basics/NothingText'

const Table = ( ) => {
  
  const dispatch = useDispatch()
  const recipes = useSelector(state => state.home.listRecipes )
    
  const  handleClick = ( id  : number) => {
    let obj = recipes.filter(item => item.id === id )[0]
    if (obj != undefined) {
      dispatch({ type: 'SET_INDIVIDUAL_RECIPE',payload: obj})
      dispatch({ type: 'SET_IS_READING',payload: true})
      dispatch({ type: 'SET_SHOW_INFORMATION_AREA',payload: true})      
    }
  }

  return (
    <Container type={'column'}>
      <Head/>
      {
        recipes.length > 0 ?
          recipes.map((item, i) => <Row 
              key={item.id} 
              id={item.id} 
              rating={item.rating} 
              checked={item.checked} 
              name={item.name} 
              clicked={handleClick}
              weight={item.weight}
            />)
        : <NothingText text={'No results found'} />
      }
    </Container>
  )

}

export default Table