/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
//import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
export const url = "http://localhost:3000";

const StoreContextProvider = (props) => {
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [newFood,setNewFood] = useState([]);
    const [list, setList] = useState([]); 
    // const [loading, setLoading] = useState(true);      
    // const [error, setError] = useState(null);  

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]: 1}));
        } else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        }
        if (token) {
            await axios.post(`${url}/api/cart/add`, {itemId}, {headers: {token}});
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
        if (token) {
            await axios.post(`${url}/api/cart/remove`, {itemId}, {headers: {token}});
        }
    };

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

    const fetchFoodList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        setFoodList(response.data.data);
    };

    const loadCart = async (token) => {
        const response = await axios.post(`${url}/api/cart/get`, {}, {headers: {token}});
        setCartItems(response.data.cartData);
    };

    const newcollection = async ()=>{
        const response = await axios.get(`${url}/api/food/newcollection`);
        setNewFood(response.data.data)

    }

    const fetchFeedbacks = async () => {
        // setLoading(true);
        // setError(null);
  
          try {
              const response = await axios.get(`${url}/api/feedbacklist`);
              if (response.data.success) {
                  setList(response.data.data);
              } else {
                  console.log(response.data.message || "Failed to fetch feedbacks.");
                //   toast.error(response.data.message || "Failed to fetch feedbacks.");
              }
          } catch (error) {
              console.error("Error fetching feedbacks:", error);
            //   setError("A network error occurred. Please try again later.");
            //   toast.error("A network error occurred. Please try again later.");
          } finally {
            // setLoading(false);
          }
      };
    

    useEffect(() => {
        async function loaddata() {
            await newcollection();
            await fetchFoodList();
            await fetchFeedbacks();
           
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCart(localStorage.getItem("token"));
            }
        }
        loaddata();
    }, []);

    const contextvalue = {
        food_list,
        newFood,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        token,
        setToken,
        url,
        newcollection,
        list,
    };
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
