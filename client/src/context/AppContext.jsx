import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";


export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.VITE_CURRENCY;

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const fetchProducts = async() =>{
    setProducts(dummyProducts)
  }

  // Add to cart fun
  const addToCart = () =>{
    let cartData = structuredClone(cartItems);
    if(cartData [cartItems]) {
      cartData [cartItems] += 1;

    }
    else{
      cartData [cartItems] = 1;
    }
    setCartItems(cartData);
    tosted.success("add to cart")

  }
  const updateCartItems = (item, quantity)=>{

  }


  useEffect(() =>{
    fetchProducts()
  }, []);
    const value = {
        navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin,
        products , currency
    };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
