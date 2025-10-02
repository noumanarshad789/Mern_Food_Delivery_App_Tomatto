import { createContext, useEffect, useState } from "react";
import axios from "axios"


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const backend_URL = "http://localhost:4000"
    const [token, setToken] = useState("")
    const [foodList, setFoodList] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(backend_URL + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

        if (token) {
            await axios.post(backend_URL + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }


    const loadCartData = async (token) => {
        const response = await axios.post(backend_URL + "/api/cart/get", {}, { headers: { token } })
        setCartItems(response.data.cartData)
    }

    // useEffect(() => {
    //     console.log(cartItems);
    // }, [cartItems])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = foodList.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }


    // Fetch food list from the backend.
    const fetchFoodList = async () => {
        const response = await axios.get(backend_URL + "/api/food/list")
        setFoodList(response.data.data)
    }

    useEffect(() => {

        async function loadData() {
            await fetchFoodList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }

        loadData()
    }, [])


    const contextValue = {
        foodList, cartItems, addToCart, removeFromCart, getTotalCartAmount, backend_URL, token, setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;