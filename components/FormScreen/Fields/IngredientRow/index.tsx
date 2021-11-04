import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Container from "../../../basics/containers/Container"
import Input from '../../../basics/TextInput'
import { Normal } from '../../../basics/Text'
import Image from '../../../basics/Image'
import ErrorMessageInput from '../../../basics/ErrorMessageInput'

type IngredientRowProps = {
  editable : boolean,
  create : boolean,
  value: string,
  number: number,
  updateArr: any,
}

const NumberContainer = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IngredientRow = ( {editable, create, value, number, updateArr} : IngredientRowProps ) => {
  // States
  const [val, setVal] = useState(value)
  const [edited, setEdited] = useState(false)

  // UseEffects
  useEffect(() => {
    setVal(value)
  }, [value])

  //Normal functions
  const sendData = () => {
    if (create) {
      setEdited(true)
      if (val != '') {
        updateArr(val, true)
      }
    } else {
      updateArr((number-1), false)
    }
    setVal(value)
  }

  return (
    <Container type={'column'} padding={'10px 0px'}>
      <Container type={'row'}>
        <NumberContainer >
          <Normal>{number}</Normal>
        </NumberContainer>
        <Input 
          readonly={!editable}
          type={'text'}
          placeholder={'Type ingredient'}
          name={'ingredient'}
          value={val}
          onChange={setVal}
        />
        <IconContainer>
          <Image 
            onClick={() => sendData()}
            src={create ? '/Icons/circlePlus/circlePlus.png' : '/Icons/trash/trash.png'} 
            width={'24px'} 
            height={'24px'}
          />
        </IconContainer>
      </Container>
      {create && edited &&(
        <ErrorMessageInput errorMessage={'Ingredient are required'} />
      )}
    </Container>
  )
}

export default IngredientRow