import React, {useEffect} from 'react'
import styled from "styled-components"
import Container from "../../basics/containers/Container"
import { SubTitle, Normal } from "../../basics/Text"
import Image from "next/dist/client/image"
import StarRatings from 'react-star-ratings'
import Switch from "react-switch";
import theme from "../../../styles/theme"
import Item from './Item'
import Btn from '../../basics/Button'

import { useDispatch, useSelector } from 'react-redux';

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Normal)`
  font-weight: 600;
  padding-bottom: 5px;
`

const Area = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`

const AreaButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 24px;
`

const Button = styled.button`
  background: ${props => props.theme.colors.nineth};
  border-color: transparent;
  border-radius: 25px;
  color: white;
  width: 95px;
  height: 48px;
  padding: 12px 32px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

/**
 * @name ReadArea
 * @description Show the information of recipes, and change to edit mode when user click on edit buttom
 * @returns Component
 */
const ReadArea = () => {
  //Consts
  const dispatch = useDispatch()
  const individual = useSelector(state => state.home.individualRecipe )

  //Normal functions

  const handleClickEdit = () => {
    dispatch({ type: 'SET_IS_READING',payload: false})
    dispatch({ type: 'SET_IS_EDITING',payload: true})
    dispatch({ type: 'SET_IS_CREATING',payload: false})
  }
  
  const handleClickClose = () => {
    dispatch({ type: 'SET_SHOW_INFORMATION_AREA',payload: false})
    dispatch({ type: 'SET_INDIVIDUAL_RECIPE',payload: {}})
    dispatch({ type: 'SET_IS_READING',payload: false})
    dispatch({ type: 'SET_IS_EDITING',payload: false})
    dispatch({ type: 'SET_IS_CREATING',payload: false})
  }

  return (
    <Area>
      <Container type={'column'}>
        <TitleArea>
          <SubTitle>
            {individual.name}
          </SubTitle>
          <Image onClick={() => handleClickClose()} src='/Icons/times/times.png' height={'16.5px'} width={'16.5px'}/>
        </TitleArea>
        {
          individual.ingredients.length > 0 ? 
            <Container type={'column'} padding={'30px 0px 0px 0px'}>
              <Title>
                Ingredients
              </Title>
              {
                individual.ingredients.length > 0 ? 
                  individual.ingredients.map((element, i) => <Item key={i} text={element}/>)
                : null
              }
            </Container>
          : null 
        }
        <Container type={'column'} padding={'30px 0px'}>
          <Title>
            Preparation
          </Title>
          <Normal>
            {individual.preparation}
          </Normal>
        </Container>
        <Container type={'column'} padding={'0px 0px 0px 0px'}>
          <Title>
            Reviews
          </Title>
          <StarRatings
            rating={individual.rating}
            starDimension="15px"
            starSpacing="2.5px"
            starRatedColor={theme.colors.seventh}
            starEmptyColor={theme.colors.sixth}
          />
        </Container>
        <Container type={'column'} padding={'30px 0px'}>
          <Title>
            Cooked before
          </Title>
          <Switch 
            onColor={theme.colors.eighth}
            checked={individual.checked} 
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={48}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          />
        </Container>
      </Container>
      <Btn text={'Edit'} click={() => handleClickEdit()}/>
    </Area>
  )
}

export default ReadArea