import React from "react"
import styled from "styled-components"

const Element = styled.input`
  background-color: transparent;
  width: 100%;
  border-color: transparent;
  outline: none;
  color: ${props => props.theme.colors.secondaryText};
  font-size: 14px;
  font-weight: 400;
  ::placeholder,
  ::-webkit-input-placeholder  {
    color: ${props => props.theme.colors.secondaryText};
    font-size: 14px;
    font-weight: 400;
  }
`

/**
 * @name Input
 * @description Text input component 
 * @returns Component
 */
const Input = () => {
  return (
    <Element 
      placeholder={'Search'}
    />
  )
}

export default Input