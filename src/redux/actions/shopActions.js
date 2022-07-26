import { FILTER_CATEGORY, ADD_TO_CARD ,SEARCH,FETCH_ALL} from './blogTypes';
import { infoNote, successNote } from '../../components/Toasty';

export const setShopActionFilter = payload => ({ type: FILTER_CATEGORY, state: payload });
export const setShopActionAddCard = (payload, id) => ({ type: ADD_TO_CARD, state:payload, id : id});
export const setShopActionSearch = (payload) => ({ type: SEARCH, state:payload });
export const setShopActionFetch = (payload) => ({ type: FETCH_ALL, state:payload });


export const fetchAllData = () =>{
  return async dispatch =>{
     await fetch("http://efalcollection.herokuapp.com/api/article/")
    .then(res => res.json())
    .then(data => dispatch(setShopActionFetch(data)))
    
  }
}




export const filterCategory = category => {
  return async  dispatch => {
    const response = await fetch("http://efalcollection.herokuapp.com/api/article/")
    .then(res => res.json())
    .then(data => data)
    const newData = response?.filter(product => {
      return product.category === category
    })
    dispatch(setShopActionFilter(newData));
  }
};

export const addCard = (id) => {
  return async dispatch => {
    const response = await fetch("http://efalcollection.herokuapp.com/api/article/")
    .then(res => res.json())
    .then(data => data)
    const newData = response?.filter(item=>{
      return item.id === id
    })
    dispatch(setShopActionAddCard(newData,id))  
    successNote("Added successfully go to your cart")     
  }
  
}

export const searchProduct = (value) => {
  return async dispatch => {
    const response = await fetch("http://efalcollection.herokuapp.com/api/article/")
    .then(res => res.json())
    .then(data => data)
    const newData = response?.filter(item=>{
      return item.title.toLowerCase().includes(value.toLowerCase())
    })
    dispatch(setShopActionSearch(newData))
    // console.log(newData.length)
    newData.length !== 0 ?
    successNote("Filtered your producs") :
    infoNote("There isn't any product")

  }
  
}


