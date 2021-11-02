import styled from "styled-components"
import {Normal} from '../basics/Text'
import Container from "../basics/containers/Container"

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

const TextStrong = styled(Normal)`
  color: ${props => props.theme.colors.thirdText};
  font-weight: 600;
`


const Select = () => {
  return (
    <Area>
      <Text>
        Cooked before: 
      </Text>
      <Element>
        <option style={{
          backgroundColor: 'red',
          minWidth: 80,
        }} value="all" selected>All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </Element>
    </Area>
  )
}

export default Select