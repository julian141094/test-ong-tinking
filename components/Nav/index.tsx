import React from 'react' 
import styled from 'styled-components'

const Area = styled.div`
  background: white;
  min-width: 100vw;
  /* min-height: 80px; */
  padding: 16px 24px;
`

const Img = styled.img`
  width: 93px;
  height: 48px;
`

const Nav = () => {
  return (
    <Area>
      <Img src='/logo.png' /></Area>
  )
}


export default Nav