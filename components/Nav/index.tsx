import React from 'react' 
import styled from 'styled-components'
import Image from '../basics/Image'

const Area = styled.div`
  min-width: 100vw;
  padding: 16px 24px;
  top: 0;
  z-index: 2;
  background-color: white;
  position: absolute;
`

/**
 * @name Nav
 * @description Logo container
 * @returns Component
 */
const Nav = () => {
  return (
    <Area>
      <Image src='/logo.png' width={'93px'} height={'48px'}/>
    </Area>
  )
}


export default Nav