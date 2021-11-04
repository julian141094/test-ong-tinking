import React from "react"
import styled from "styled-components"

type InputProps = {
  onChange : any,
  type : string,
  value ?: string, 
  placeholder ?: string,
  name : string,
  readonly ?: boolean,
  checked ?: boolean,
}

const RadioElement = styled.input`
  width: 100%;
  height: 24px;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder  {
    font-size: 14px;
    font-weight: 400;
  }
`

const TextAreaElement = styled.textarea`
  display: block;
  width: 100%;
  max-width: 100%;
  font-size: 14px;
  color: ${props => props.theme.colors.primaryText};
  border-color: transparent;
  outline: none;
`

const Element = styled.input`
  background-color: transparent;
  width: 100%;
  border-color: transparent;
  outline: none;
  color: ${props => props.theme.colors.primaryText};
  font-size: 14px;
  font-weight: 400;
  ::placeholder,
  ::-webkit-input-placeholder  {
    color: ${props => props.theme.colors.secondaryText};
    font-size: 14px;
    font-weight: 400;
  }
`

const ElementStyled = styled.input`
  background-color: transparent;
  width: 100%;
  border-color: transparent;
  outline: none;
  color: ${props => props.theme.colors.primaryText};
  font-size: 14px;
  font-weight: 400;
  ::placeholder,
  ::-webkit-input-placeholder  {
    color: ${props => props.theme.colors.secondaryText};
    font-size: 14px;
    font-weight: 400;
  }
`

const Area = styled.div`
  min-height: 40px;
  padding: 8px;
  margin: 8px 0px 0px 0px;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color:  ${props => props.theme.colors.teenth};
  border-radius: 4px;
`

const Label = styled.label`
  width: 100%;
  color: ${props => props.theme.colors.secondaryText};
  font-size: 14px;
  font-weight: 400;
`

const LabelRadio = styled.label`
  width: 75px;
  height: 55px;
  color: ${props => props.theme.colors.primaryText};
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
`

/**
 * @name Input
 * @description Text input component by type
 * @returns Component
 */
const Input = ({onChange, type = 'form', value, placeholder, name, readonly, checked} : InputProps) => {
  return type == 'form' ? (
    <Area>
      <Label for={name} >
        {placeholder}
        <ElementStyled 
          name={name}
          value={value}
          onChange={e => onChange(name, e.target.value)}
        />
      </Label>
    </Area>
  ) : type == 'text' ? (
    <Area>
      <Label for={name} >
        <ElementStyled 
          disabled={readonly}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </Label>
    </Area>
  ) : type == 'radio' ? (
      <LabelRadio>
        {placeholder}
        <RadioElement 
          checked={checked}
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={e => onChange(name, parseInt(e.target.value))}
        />
      </LabelRadio>
  ) : type == 'textarea' ? (
    <Area>
      <Label for={name} >
        {name.charAt(0).toUpperCase() + name.slice(1) } *
        <TextAreaElement 
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={e => onChange(name, e.target.value)}
        />
      </Label>
    </Area>
  ) : (
    <Element 
      onChange={e => onChange(e)}
      placeholder={'Search'}
    />
  )
}

export default Input