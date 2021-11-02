import React from "react"
import Container from "../basics/containers/Container"
import Image from "../basics/Image"
import {Title, Normal} from "../basics/Text"
import TextSearch from '../TextSearch'
import Select from "../SelectFilter"
import Table from '../Table'

/**
 * @name Recipes
 * @returns Component
 */
const Recipes = () => {
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
          <Select/>
        </Container>
        <Container padding={'24px 0px'}>
          <Table/>
        </Container>
      </Container>
    </Container>
  )
}

export default Recipes 