import React from "react"
import Container from "../basics/containers/Container"
import Head from './Head'
import Row from './Row'

type handleClick = {
  id : number
}

const data = [
  {
    id: 0,
    name: 'Mixed Berry Melody',
    rating: 2,
    checked: true,
  },
  {
    id: 1,
    name: 'Thai red curry cauliflower soup',
    rating: 3,
    checked: false,
  },
  {
    id: 2,
    name: 'Crispy spiced eggplant',
    rating: 5,
    checked: true,
  },
]

function  handleClick ( { id } : handleClick) {
  console.log('Hizo click => ', id);
  
}

const Table = () => {

  return (
    <Container type={'column'}>
      <Head/>
      {
        data.length > 0 ?
          data.map((item, i) => <Row 
              key={item.id} 
              id={item.id} 
              rating={item.rating} 
              checked={item.checked} 
              name={item.name} 
              clicked={handleClick}
            />)
        : null
      }
    </Container>
  )

}

export default Table