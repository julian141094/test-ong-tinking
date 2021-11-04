import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Container from '../../basics/containers/Container'
import { SubTitle, Normal } from '../../basics/Text'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/dist/client/image'
import Input from '../../basics/TextInput'
import Switch from "react-switch"
import theme from '../../../styles/theme'
import { useFormik } from 'formik'
import { registerRecipeValidationSchema } from '../../../services/validationSchemas'
import IngredientRow from './IngredientRow'
import Btn from '../../basics/Button'
import ErrorMessageInput from '../../basics/ErrorMessageInput'

const Area = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`

const ButtonsArea = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
`

const RadioArea = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Normal)`
  font-weight: 600;
  padding-bottom: 5px;
`

const Fields = () => {
  //Consts
  const dispatch = useDispatch()
  const individual = useSelector(state => state.home.individualRecipe )
  const tools = useSelector(state => state.tools )
  const recipes = useSelector(state => state.home.listRecipes )
  const { values, isSubmitting, setSubmitting, setFieldValue, handleSubmit, errors, setFieldTouched, touched, } = useFormik({
    initialValues: individual.id != undefined ? 
      individual
    : {
      name: '',
      ingredients: [],
      rating: 2,
      checked: true,
      preparation: '',
    } ,
    onSubmit: async values => {
      setSubmitting(true);
      try {
        saveRecipe()
      } catch (error) {
        console.log('Error  ====>', error);
      }
    },
    validationSchema: registerRecipeValidationSchema,
  });

  //Normal functions
  const handleClickClose = () => {
    dispatch({ type: 'SET_SHOW_INFORMATION_AREA',payload: false})
    dispatch({ type: 'SET_INDIVIDUAL_RECIPE',payload: {}})
    dispatch({ type: 'SET_IS_READING',payload: false})
    dispatch({ type: 'SET_IS_CREATING',payload: false})
    dispatch({ type: 'SET_IS_EDITING',payload: false})
  }

  const handleIngredient = (val : string, type : boolean) => {
    if (type) {
      setFieldValue('ingredients', [...values.ingredients, val])
    } else {
      setFieldValue('ingredients', values.ingredients.filter((element, i) => i != parseInt(val))) 
    }
  }

  const handleChangeFields = (name : string, val : string) => {
    setFieldValue(name, val)
    setFieldTouched(name)
  }

  const handleCancel = () => {
    dispatch({ type: 'SET_IS_READING',payload: true})
    dispatch({ type: 'SET_IS_CREATING',payload: false})
    dispatch({ type: 'SET_IS_EDITING',payload: false})
  }

  const saveRecipe = () => {    
    if (values.id == undefined) {
      let obj = {...values, id : recipes.length}
      let arr = [obj, ...recipes]
      dispatch({ type: 'SET_LIST_RECIPES', payload: arr})
      handleClickClose()
    } else {
      let arr = [...recipes]
      arr[values.id] = values
      dispatch({ type: 'SET_LIST_RECIPES', payload: arr})
      dispatch({ type: 'SET_INDIVIDUAL_RECIPE',payload: values})
      handleCancel()
    }
  }

  return (
    <Area>
      <Container type={'column'}>
        <TitleArea>
          <SubTitle>{tools.isEditing ? 'Edit recipe ' : 'New recipe' }</SubTitle>
          <Image onClick={() => handleClickClose()} src='/Icons/times/times.png' height={'16.5px'} width={'16.5px'}/>
        </TitleArea>
        <Container type={'column'} padding={'30px 0px 0px 0px'}>
          <Title>
            Recipe Name
          </Title>
          <Input 
            placeholder={'Title *'}
            name={'name'}
            value={values.name}
            onChange={handleChangeFields}
          />
          {errors.name && touched.name && (
            <ErrorMessageInput errorMessage={errors.name} />
          )}
        </Container>
        <Container type={'column'} padding={'30px 0px 0px 0px'}>
          <Title>
            Ingredients
          </Title>
          <Container type={'column'}>
            {
              values.ingredients.length > 0 ? 
                values.ingredients.map((item, i) => <IngredientRow
                  key={i}
                  number={i+1} 
                  create={false}
                  value={item} 
                  updateArr={handleIngredient} 
                  editable={false}
                />)
              : null
            }
            <IngredientRow 
              editable={true}
              key={values.ingredients.length + 1}
              value={''} 
              updateArr={handleIngredient} 
              number={values.ingredients.length + 1} 
              create={true}
            />
          </Container>
        </Container>
        <Container type={'column'} padding={'30px 0px'}>
          <Title>
            Preparation
          </Title>
          <Input 
            type={'textarea'}
            placeholder={'Write the steps...'}
            name={'preparation'}
            value={values.preparation}
            onChange={handleChangeFields}
          />
          {errors.preparation && touched.preparation && (
            <ErrorMessageInput errorMessage={errors.preparation} />
          )}
        </Container>
        <Container type={'column'} padding={'0px 0px 0px 0px'}>
          <Title>
            Reviews
          </Title>
          <RadioArea>
            <Input 
              type={'radio'}
              placeholder={'1'}
              name={'rating'}
              value={'1'}
              checked={values.rating == 1 ? true : false}
              onChange={handleChangeFields}
            />
            <Input 
              type={'radio'}
              placeholder={'2'}
              name={'rating'}
              value={'2'}
              checked={values.rating == 2 ? true : false}
              onChange={handleChangeFields}
            />
            <Input 
              type={'radio'}
              placeholder={'3'}
              name={'rating'}
              value={'3'}
              checked={values.rating == 3 ? true : false}
              onChange={handleChangeFields}
            />
            <Input 
              type={'radio'}
              placeholder={'4'}
              name={'rating'}
              value={'4'}
              checked={values.rating == 4 ? true : false}
              onChange={handleChangeFields}
            />
            <Input 
              type={'radio'}
              placeholder={'5'}
              name={'rating'}
              value={'5'}
              checked={values.rating == 5 ? true : false}
              // checked={true}
              onChange={handleChangeFields}
            />
          </RadioArea>
        </Container>
        <Container type={'column'} padding={'30px 0px'}>
          <Title>
            Cooked before
          </Title>
          <Switch 
            onChange={() => setFieldValue('checked', !values.checked)} 
            onColor={theme.colors.eighth}
            checked={values.checked} 
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={48}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          />
        </Container>
        {          
          tools.isCreating ? 
            <Btn text={'Create'} click={handleSubmit}/>
          : 
            <ButtonsArea type={'row'} >
              <Btn type={'outline'} text={'Cancel'} click={ () => handleCancel()}/>
              <Btn text={'Update'} click={handleSubmit}/>
            </ButtonsArea>
        }
      </Container>
    </Area>
  )
}

export default Fields