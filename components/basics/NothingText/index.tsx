import React from 'react'
import styled from 'styled-components'
import { Normal } from '../Text'

type propNothingText = {
  text : string
}

const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

/**
 * @name NothingText
 * @description Show a text on a row, when user filter can't found any result
 * @param text string 
 * @returns Component
 */
const NothingText = ( { text } : propNothingText ) => {
  return (
    <Area>
      <Normal>
        {text}
      </Normal>
    </Area>
  )
}

export default NothingText