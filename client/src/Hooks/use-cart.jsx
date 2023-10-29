import { useReducer,useEffect } from "react";
import { toast } from "react-toastify";

const useCart=()=>{
  const tSuc = ()=>{
    toast.dismiss();
    toast.success("Agragado al carrito", {
      position: "top-center", 
      autoClose: 1500, 
    });
  };
  const tFail = ()=>{
    toast.dismiss();
    toast.error("No hay suficiente stock", {
      position: "top-center", 
      autoClose: 1500, 
    });
  }
    const cartReducer = (state, action) => {
        switch (action.type) {
          case "ADD_TO_CART":
            const foundIndex = state.findIndex(item => item.Name === action.payload.Name);
            if (foundIndex !== -1) {
              if(state[foundIndex].Amount + action.payload.Amount <= action.payload.Stock) {
                console.log(action.payload.Amount)
              const updatedItem = { ...state[foundIndex], Amount: state[foundIndex].Amount + action.payload.Amount };
                tSuc();
              return [...state.slice(0, foundIndex), updatedItem, ...state.slice(foundIndex + 1)];
            } else{
              tFail();
              return [...state]
            }
          }
              tSuc();
              return [...state, action.payload];
            
          case "DECREASE_AMOUNT":
            const decreaseIndex = state.findIndex(item => item.Name === action.payload);
            if(state[decreaseIndex].Amount - 1 !== 0){
              const decreasedItem = { ...state[decreaseIndex], Amount: state[decreaseIndex].Amount - 1 };
              return [...state.slice(0, decreaseIndex), decreasedItem, ...state.slice(decreaseIndex + 1)];
            }return[...state.slice(0, decreaseIndex), ...state.slice(decreaseIndex + 1)]

          case "INCREASE_AMOUNT":
            const increaseIndex = state.findIndex(item => item.Name === action.payload);
            if(state[increaseIndex].Amount + 1 <= state[increaseIndex].Stock){
              const increasedItem = { ...state[increaseIndex], Amount: state[increaseIndex].Amount + 1 };
              return [...state.slice(0, increaseIndex), increasedItem, ...state.slice(increaseIndex + 1)];
            }
            tFail();
            return state
          
          default:
            return state;
        }
      };
      
      const savedCartData = localStorage.getItem("cartItems")

      const initialState = savedCartData ? JSON.parse(savedCartData) : [];
    
      const [cartItems, dispatchCartItems] = useReducer(cartReducer, initialState);
      
        const addToCartHandler = (Name, Img, Price ,Stock, Amount=1) => {
          const Item = { Name: Name, Price: Price, Img: Img,Stock:Stock, Amount: Amount };
          dispatchCartItems({ type: "ADD_TO_CART", payload: Item });
        };
        
      
        const reduce = Name => {
          dispatchCartItems({ type: "DECREASE_AMOUNT", payload: Name });
        };
      
        const increase = Name => {
          dispatchCartItems({ type: "INCREASE_AMOUNT", payload: Name });
        };

        useEffect(() => {
          // console.log(cartItems)
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }, [cartItems]);
      


        return [cartItems,addToCartHandler,reduce,increase];
};
export default useCart;