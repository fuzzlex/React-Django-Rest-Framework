import { Button, Container, Form, FormControl, Nav, Navbar as NavBar, NavDropdown,Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchAllData, searchProduct } from '../redux/actions/shopActions';

const Navbar = () => {
  const [value, setValue] = useState()
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const filte = useSelector(state => (state.shopReducer))
  const shoppedIds = new Set(filte.toAddedIds.map(e => e)).size
  const handleSearch = (e) =>{
    dispatch(searchProduct(value))
    setValue("")
  }
  const handleRefresh = () =>{
    dispatch(fetchAllData())
    navigate("/")
  }

  return (
    <div >
      <NavBar className="App" variant="dark" sticky="top" expand="xl" collapseOnSelect>
        <Container>
        <NavBar.Brand className="nav-item" onClick={() => handleRefresh()} >
         e-Commerce Project
        </NavBar.Brand>
        <NavBar.Toggle className="toggle" />
      
        </Container>
        
        <Container className="menuitem">
    
        <NavBar.Collapse >
          <Nav  >
            <NavDropdown className="nav-items" title="Products" >
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-items" onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link className="nav-items"  onClick={() => navigate("/blog")}>Blog</Nav.Link>
            <Nav.Link className="nav-items" onClick={() => navigate("/contact")}>Contact Us</Nav.Link>
            
            <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 form-control"
            aria-label="Search"
            value = {value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button  onClick={() => handleSearch()} variant="outline-light">Search</Button>
          
        </Form>
        <Nav.Link className='badgeCont'  onClick={() => navigate("/shopping")}><CgShoppingCart className="shop" /><Badge className='badge' pill bg="warning" >
          {shoppedIds}
        </Badge>
        </Nav.Link>
          </Nav>
        </NavBar.Collapse>
        </Container>

        
      </NavBar>

    </div>
  );
}

export default Navbar;