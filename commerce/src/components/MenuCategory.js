import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterCategory } from "../redux/actions/shopActions";

const MenuCategory = () => {
  const dispatch = useDispatch();
  const [first, setfirst] = useState();

  const fetchData = async () => {
    await fetch("http://127.0.0.1:8000/api/article/")
      .then((res) => res.json())
      .then((data) => setfirst(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(first);

  const newData = new Set(first?.map((item) => item.category));
  const handleClick = (category) => {
    dispatch(filterCategory(category));
  };

  return (
    <div>
      <Nav fill variant="tabs">
        {Array.from(newData).map((category, index) => (
          <Nav.Item key={index}>
            <Nav.Link onClick={() => handleClick(category)}>
              {category}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      )
    </div>
  );
};

export default MenuCategory;
