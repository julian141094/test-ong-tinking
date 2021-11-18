import styled from "styled-components";
import {Normal} from '../../basics/Text'

const Area = styled.div`
  height: 48px;
  width: 100%;
  background-color: transparent;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.fourth};
  display: flex;
  align-items: center;
`

const Text = styled(Normal)`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.secondaryText};
`

const AreaOption = styled.div`
  width: ${props => props.width};
`
/**
 * @name Head 
 * @description Component to render the head of recipes table
 * @returns Component
 */
const Head = () => {
  return (
    <Area>
      <AreaOption width={'40%'}>
        <Text>Recipe Name</Text>
      </AreaOption>
      <AreaOption width={'20%'}>
        <Text>Weight</Text>
      </AreaOption>
      <AreaOption width={'20%'}>
        <Text>Reviews</Text>
      </AreaOption>
      <AreaOption width={'20%'}>
        <Text>Cooked before</Text>
      </AreaOption>
    </Area>
  )
}

export default Head