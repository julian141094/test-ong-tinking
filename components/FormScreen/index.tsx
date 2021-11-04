import React, { useEffect, useState } from 'react'
import BoxShadow from "../BoxShadow";
import Form from "./Form";
import { useDispatch, useSelector } from 'react-redux'

const Screen = () => {
  const tools = useSelector(state => state.tools)

  return tools.showInformationArea ? (
      <BoxShadow>
        <Form/>
      </BoxShadow>
    ) 
  : null
}

export default Screen