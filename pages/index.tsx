import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav/index'
import RootContainer from '../components/basics/containers/RootContainer'
import Recipes from '../components/Recipes'
import FloadButton from '../components/basics/FloatButton'
import FormScreen from '../components/FormScreen'

const Home: NextPage = () => {
  return (
    <RootContainer>
      <Nav/>
      <Recipes/>
      <FloadButton/>
      <FormScreen/>
    </RootContainer>
  )
}

export default Home
