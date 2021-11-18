import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import {Normal} from '../basics/Text'

type SelectProps = {
  updateSelect : any,
  selected: string,
  preText: string,
  children: any
}

const Area = styled.div`
  background-color: ${props => props.theme.colors.selectBackgroud};
  margin: 0px 16px;
  padding: 12px 12px;
  display: flex;
  border-radius: 16px;
`

const Element = styled.select`
  background-color: transparent;
  border-color: transparent;
  outline: none;
`

const Text = styled(Normal)`
  color: ${props => props.theme.colors.thirdText};
`

/**
 * @name Select
 * @description Show any options, and return father the user selection
 * @param updateSelect 
 * @param selected string
 * @returns 
 */
const Select = ( { updateSelect, selected, preText, children} : SelectProps) => {
  return (
    <Area>
      <Text>
        {preText}
      </Text>
      <Element
        onChange={e => updateSelect(e.target.value)}
      >
        {
          children == undefined ? <>
            <option value="All"
              selected={selected === 'All' ? true : false} 
            >All</option>
            <option value="Active"   
              selected={selected === 'Active' ? true : false} 
            >Active</option>
            <option value="Inactive" 
              selected={selected === 'Inactive' ? true : false} 
            >Inactive</option>
          </> : children
        }
      </Element>
    </Area>
  )
}

export default Select