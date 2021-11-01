import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/index'
import RootContainer from '../components/basics/containers/RootContainer'

const Home: NextPage = () => {
  return (
    <RootContainer>
      <Nav/>
    </RootContainer>
  )
}

export default Home
