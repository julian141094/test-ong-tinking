import styled from "styled-components"
import Container from "../../basics/containers/Container"
import { SubTitle, Normal } from "../../basics/Text"
import Image from "next/dist/client/image"
import StarRatings from 'react-star-ratings'
import Switch from "react-switch";
import theme from "../../../styles/theme"
import Item from './Item'

const data = [
  '1/4 cup black chia seeds',
  '2 1/2 cups almond milk',
  '2 oranges',
  '1 1/2 cups wholemeal plain flour',
]

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Normal)`
  font-weight: 600;
  padding-bottom: 5px;
`

const Area = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`

const AreaButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 24px;
`

const Button = styled.button`
  background: ${props => props.theme.colors.nineth};
  border-color: transparent;
  border-radius: 25px;
  color: white;
  width: 95px;
  height: 48px;
  padding: 12px 32px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ReadArea = () => {
  return (
    <Area>
      <Container type={'column'}>
        <TitleArea>
          <SubTitle>
            Mixed Berry Melody
          </SubTitle>
          <Image src='/Icons/times/times.png' height={'16.5px'} width={'16.5px'}/>
        </TitleArea>
        <Container type={'column'} padding={'30px 0px 0px 0px'}>
          <Title>
            Ingredients
          </Title>
          {
            data.length > 0 ? 
              data.map((element, i) => <Item key={i} text={element}/>)
            : null
          }
        </Container>
        <Container type={'column'} padding={'30px 0px'}>
          <Title>
            Preparation
          </Title>
          <Normal>
            Combine the chia seeds, almond milk and 1 tablespoon of the maple syrup in a large jug. Stand for 3-4 mins or until seeds swell. Meanwhile, finely grate 1 teaspoon rind from 1 orange. Cut the segments from both oranges (see Notes).
            Combine the flour, baking powder, orange rind and half the walnuts in a medium bowl. Whisk in the milk mixture until smooth. Stir in the blueberries.
            Spray a non-stick frying pan with oil and heat over medium heat. Cook level 1/2 cup measures of mixture, in batches, for 2 mins each side or until golden to make 8 pancakes. Divide among plates. Top with the orange segments, ricotta, remaining syrup and walnuts.
          </Normal>
        </Container>
        <Container type={'column'} padding={'0px 0px 0px 0px'}>
          <Title>
            Reviews
          </Title>
          <StarRatings
            rating={3}
            starDimension="15px"
            starSpacing="2.5px"
            starRatedColor={theme.colors.seventh}
            starEmptyColor={theme.colors.sixth}
          />
        </Container>
        <Container type={'column'} padding={'30px 0px'}>
          <Title>
            Cooked before
          </Title>
          <Switch 
            onChange={() => console.log('click')} 
            onColor={theme.colors.eighth}
            checked={true} 
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={48}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          />
        </Container>
      </Container>
      <AreaButton>
        <Button>
          Editar
        </Button>
      </AreaButton>
    </Area>
  )
}

export default ReadArea