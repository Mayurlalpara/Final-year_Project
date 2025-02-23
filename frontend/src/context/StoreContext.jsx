/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
//import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)
export const url = "http://localhost:3000";

const StoreContextProvider = (props)=>{

    const [food_list,setFoodList] = useState([])
    const [cartItems,setCartItems] = useState({})
    const [token,setToken] = useState("");

    const addToCart = async (itemId) =>{
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if (token) {
            await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}})
        }
    }
    const removeFromCart =async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (token) {
            await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}})
        }
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product._id === item);
            if (itemInfo && itemInfo.price) {
              totalAmount += itemInfo.price * cartItems[item];
            }
          }
        }
        return totalAmount;
      };
      

    const fetchFoodList = async ()=>{
        const response = await axios.get(`${url}/api/food/list`);
        setFoodList(response.data.data)

    }

    const loadCart = async (token)=>{
        const response = await axios.post(`${url}/api/cart/get`,{},{headers:{token}});
        setCartItems(response.data.cartData)

    }

    useEffect(()=>{
        async function loaddata() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCart(localStorage.getItem("token"));
            }
        }
        loaddata();
    },[])
    
    const contextvalue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        token,
        setToken,
        url
    }
    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider