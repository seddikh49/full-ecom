import { createContext, useState, useEffect } from "react";
import products from '../‏‏assets/frontend_assets/assets.js'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext()



const ShopContextProvider = ({ children }) => {
    const currency = "$"
    const delivery_fee = 10
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [searchBar, setSearchBar] = useState(false);
    const [takeItem, setTakeItem] = useState({});
    const navigate = useNavigate()




    const addCart = (itemId, size) => {
        if (size === undefined) {
            return toast.error('Choose Product size ')
        }

        const newItem = structuredClone(takeItem)
        if (newItem[itemId]) {
            if (newItem[itemId][size]) {
                newItem[itemId][size] += 1
            } else {
                newItem[itemId][size] = 1
            }
        } else {
            newItem[itemId] = {}
            newItem[itemId][size] = 1
        }
        setTakeItem(newItem)
        countOfCarts()
    }

    const countOfCarts = () => {
        let itemCount = 0
        for(const items in takeItem){
            for(const item in takeItem[items]){
                    if(takeItem[items][item] > 0){
                        itemCount += takeItem[items][item]
                } 
            }
        }
        return itemCount
    }
    

    const getCartAmount = () => {
        let cartAmount = 0
        for(let items in takeItem){
            let productCart = products.filter((product) => product._id === items)
            for(const item in takeItem[items]){
                if(takeItem[items][item] > 0){
                    cartAmount += productCart[0].price * takeItem[items][item]
                }
            }
        }
        return cartAmount  
    }


    const updateCart = (id, size,quantity) => {
        const updatedCart = { ...takeItem }; // Copy the original object to avoid direct mutation
        updatedCart[id][size] = quantity
        setTakeItem(updatedCart)
    }


    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        searchBar,
        setSearchBar,
        addCart,
        takeItem,
        updateCart,
        countOfCarts,
        getCartAmount,
        navigate
    }


    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider