import styled from "styled-components"
import {Normal} from '../../basics/Text'
import StarRatings from 'react-star-ratings'
import Switch from "react-switch";
import theme from '../../../styles/theme'
import { useDispatch, useSelector } from 'react-redux'

type RowProps = {
  name  : string,
  rating  : number,
  checked  : boolean,
  clicked : any,
  id : number
}

const Area = styled.div`
  height: 48px;
  width: 100%;
  background-color: transparent;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.five};
  display: flex;
  align-items: center;
`

const AreaOption = styled.div`
  width: ${props => props.width};
`
/**
 * @name Row 
 * @description Component to render the Row of recipes table
 * @returns Component
 */
const Row = ( {name, rating, checked, id, clicked} : RowProps ) => {
  //Consts
  const recipes = useSelector(state => state.home.listRecipes )
  const dispatch = useDispatch()

  const handleShwitChange = (e : any) => {
    let arr = [...recipes]
    let obj = recipes.filter(item => item.id === id)[0]
    obj.checked = e
    arr[id] = obj
    dispatch({ type: 'SET_LIST_RECIPES', payload: arr})
  }

  return (
    <Area>
      <AreaOption width={'50%'} onClick={() => clicked(id)}>
        <Normal>{name}</Normal>
      </AreaOption>
      <AreaOption width={'25%'} onClick={() => clicked(id)}>
        <StarRatings
          rating={rating}
          starDimension="15px"
          starSpacing="2.5px"
          starRatedColor={theme.colors.seventh}
          starEmptyColor={theme.colors.sixth}
        />
      </AreaOption>
      <AreaOption width={'25%'}>
        <Switch 
          onChange={(e) => handleShwitChange(e)} 
          onColor={theme.colors.eighth}
          checked={checked} 
          uncheckedIcon={false}
          checkedIcon={false}
          height={24}
          width={48}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        />
      </AreaOption>
    </Area>
  )
}

export default Row