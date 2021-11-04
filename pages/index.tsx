import React, {useState, useEffect} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav/index'
import RootContainer from '../components/basics/containers/RootContainer'
import Recipes from '../components/Recipes'
import FloadButton from '../components/basics/FloatButton'
import FormScreen from '../components/FormScreen'
import { useDispatch, useSelector } from 'react-redux'

/**
 * @name Home
 * @description Page index of home (nextjs)
 * @returns Component / Screen
 */
const Home: NextPage = () => {
  //Consts 
  const dispatch = useDispatch()

  //Normal functions
  /**
   * @name handleClickToolButoon
   * @description function to open rigth information sidebar and set create mode 
   * @returns Nothing
   */
  const handleClickToolButoon = () => {
    dispatch({ type: 'SET_IS_CREATING',payload: true})
    dispatch({ type: 'SET_SHOW_INFORMATION_AREA',payload: true})
  }

  return (
    <RootContainer>
      <Nav/>
      <Recipes/>
      <FloadButton click={handleClickToolButoon} text={'+'}/>
      <FormScreen/>
    </RootContainer>
  )
}

export default Home
