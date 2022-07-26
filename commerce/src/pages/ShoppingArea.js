import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const ShoppingArea = () => {
  const filte = useSelector((state) => state.shopReducer.toAddedProduct);
  const setedItem = filte.map((item) => item);
  const newItem = new Set(setedItem.map((e) => e.title));
  console.log(newItem);

  return (
    <div>
      {filte?.map((item) =>
        item.map((item) => (
          <Card key={item.id} className="shoppedcard">
            <Card.Img
              variant="top"
              className="shoppedcardimage"
              src={item.img}
            />
            <Card.Body className="shoppedcardtext">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="cardprice">{item.price}$</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default ShoppingArea;
