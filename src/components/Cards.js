import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { addCard, fetchAllData } from "../redux/actions/shopActions";
import "./Card.css"

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllData());
  }, []);

  const handleAddCard = (id) => {
    dispatch(addCard(id));
  };
  const filteredList = useSelector((state) => state.shopReducer.productList);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {filteredList?.map((item) => (
        <Card key={item.id} className="card">
          <Card.Img variant="top" className="cardimage" src={item.img} />
          <Card.Body className="card-body">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="cardprice">{item.price}.00 TL</Card.Text>
            <Button
              className="addtocard"
              onClick={() => handleAddCard(item.id)}
              variant="dark"
            >
              <CgShoppingCart className="shop" />

              SEPETE EKLE
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
