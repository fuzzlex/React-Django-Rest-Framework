import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, fetchAllData } from '../redux/actions/shopActions';

const Cards = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchAllData())
  }, []);
  

  const handleAddCard = (id) => {
    dispatch(addCard(id))
   
}
const filteredList = useSelector(state =>state.shopReducer.productList)

  return (
  <div style={{minHeight:"100vh" , display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
  {filteredList?.map(item => (

    <Card key={item.id} className="card">    
  <Card.Img variant="top" className='cardimage' src={item.img} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text className='cardprice'>
    {item.price}$  
    </Card.Text>
    <Button className='addtocard' onClick={() => handleAddCard(item.id)}  variant="warning">ADD TO CARD</Button>
  </Card.Body>
</Card>
  ))}




  </div>
  
  )
};

export default Cards;
