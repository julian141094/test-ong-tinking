import React from "react";
import styled from "styled-components";

type TooltipProps = {
  children : any, 
  text : string
}

const TooltipText = styled.div`
  background: transparent;
  color: #fff;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`

const TooltipBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  left: -115px;
  visibility: hidden;
  color: transparent;
  background-color:ransparent;
  width: 82px;
  border-radius: 8px;
  z-index: 20;
  font-size: 12px;

  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;

  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 72px;
    top: 15px;
    position: absolute;
    z-index: 20;
    border: 10px solid transparent;
    transform: rotate(225deg);
    transition: border 0.3s ease-in-out;
  }
`

const TooltipCard = styled.div`
  position: relative;
  z-index: 20;
  & ${TooltipText}:hover + ${TooltipBox} {
    z-index: 20;
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 82px;
    padding: 8px 8px;

    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`
/**
 * @name ToolTip
 * @description set text childs, and create a tooltip for this element 
 * @param children any
 * @param text string 
 * @returns Compoenent
 */
 const ToolTip = ( {children, text} : TooltipProps) => {
  return (
    <>
      <TooltipCard>
        <TooltipText>
          {children}
        </TooltipText>
        <TooltipBox>
          <p>{text}</p>
        </TooltipBox>
      </TooltipCard>
    </>
  );
}

export default ToolTip