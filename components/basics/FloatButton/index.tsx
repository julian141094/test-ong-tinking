import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import ToolTip from '../Tooltip'

type FloatButtonProps = {
  click : any,
  text: string
}

const Element = styled.button`
  background: ${props => props.theme.colors.nineth};
  border-color: transparent;
  border-radius: 30px;
  color: white;
  position: absolute;
  width: 56px;
  height: 56px;
  z-index: 5;
  bottom: 0;
  right: 0;
  margin: 0px 24px 24px 0px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

/**
 * @name FloadButton
 * @description Render a fload button on down rigth screen part 
 * @param click 
 * @param text 
 * @returns Component
 */
const FloadButton = ({click, text} : FloatButtonProps) => {
  const tools = useSelector(state => state.tools )
  return tools.showToolButton ? (
      <Element onClick={() => click()}>
        <ToolTip text={'Add recipe'}>
          {text}
        </ToolTip>
      </Element>
    ) 
  : null
}

export default FloadButton