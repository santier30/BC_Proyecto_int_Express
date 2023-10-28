
import { useReducer } from "react";
const useForm=()=>{
    const altaReducer = (state, action) => {
let stateCopy;
let message = [];
let content=""

        switch (action.type) {
            case "NAME":
                content = action.payload
                message = [];
              
                if (content === "") {
                  message.push("El nombre es obligatiorio.");
                } else {
                  if (content.length < 3 || content.length > 30) {
                    message.push("El nombre debe tener entre 3 y 30 caracteres.");
                  }
                  if (!/^[0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑ \-'.]+$/.test(content)) {
                    message.push("Caracteres especiales no permitidos, solo letras, números, espacios, guiones y comillas.");
                  }
                }
                stateCopy = structuredClone(state);

                stateCopy.name.er = message.length ? message : "";
                stateCopy.name.value = content;
                return stateCopy

            case "PRICE":
                content = action.payload
                message = [];
              
                if (content === "") {
                  message.push("Se requiere un precio valido.");
                } else {
                  const stockValue = parseInt(content);
                  if (isNaN(stockValue) || stockValue < 0) {
                    message.push("El precio no puede ser negativo y debe ser un número válido.");
                  }
                }
                stateCopy = structuredClone(state);
                stateCopy.price.er = message.length ? message : "";
                stateCopy.price.value = content;
                return stateCopy

            case "BRAND":
                content = action.payload
                message = [];
                if (content === "") {
                    message.push("La marca de vino es obligatoria.");
                  } else {
                    if (!/^[0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑ \-'.]+$/.test(content)) {
                      message.push("Caracteres especiales no permitidos, solo letras, números, espacios, guiones y comillas.");
                    }
                    if (content.toLowerCase().includes("marca")) {
                      message.push("Evita incluir la palabra 'marca' en la marca de vino.");
                    }
                  }
                stateCopy = structuredClone(state);
                stateCopy.brand.er = message.length ? message : "";
                stateCopy.brand.value = content;
                return stateCopy
            case "STOCK":
                content = action.payload
                message = [];
                if (content === "") {
                    message.push("Se requiere una cantidad válida en stock.");
                  } else {
                    const stockValue = parseInt(content);
                    if (isNaN(stockValue) || stockValue < 0) {
                      message.push("La cantidad en stock no puede ser negativa y debe ser un número válido.");
                    }
                    if(stockValue !== parseFloat(content)){
                      message.push("La cantidad en stock no puede ser una fraccion.");
                    }
                  }
                stateCopy = structuredClone(state);
                stateCopy.stock.er = message.length ? message : "";
                stateCopy.stock.value = content;
                return stateCopy
            case "IMAGE":
                content = action.payload
                message = [];
                if (content === "") {
                    message.push("Se requiere una URL válida de la imagen.");
                  } else {
                    if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(content)) {
                      message.push("La URL no es válida.");
                    } else {
                      const imageExtensions = ["jpg", "jpeg", "png", "gif"]; 
                      const extension = content.split(".").pop().toLowerCase();
                      if (!imageExtensions.includes(extension)) {
                        message.push("La URL no apunta a una imagen válida.");
                      }
                    }
                  }
                stateCopy = structuredClone(state);
                stateCopy.img.er = message.length ? message : "";
                stateCopy.img.value = content;
                return stateCopy
            case "SHORT":
                content = action.payload
                message = [];
                if (content === "") {
                    message.push("Se requiere una descripción corta.");
                  } else {
                    if (content.length < 10) {
                      message.push("La descripción corta debe tener entre 10 y 50 caracteres.");
                    }
                    if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9\s.,;:!?"'-]*$/.test(content)) {
                      message.push("La descripción corta contiene caracteres no válidos.");
                    }
                  }
                
                stateCopy = structuredClone(state);
                stateCopy.shortDes.er = message.length ? message : "";
                stateCopy.shortDes.value = content;
                return stateCopy
            case "LONG":
                content = action.payload
                 message = [];
                 if (content === "") {
                    message.push("Se requiere una descripción larga.");
                  } else {
                    if (content.length < 30) {
                      message.push("La descripción larga debe tener entre 30 y 200 caracteres.");
                    }
              
                    if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9\s.,;:!?"'-]*$/.test(content)) {
                      message.push("La descripción larga contiene caracteres no válidos.");
                    }
                  }
                stateCopy = structuredClone(state);
                stateCopy.longDes.er = message.length ? message : "";
                stateCopy.longDes.value = content;
                return stateCopy
            case "CATEGORY":
                content = action.payload
    
                stateCopy = structuredClone(state);
                stateCopy.category.value = content;
                stateCopy.category.er = "";
                return stateCopy
            case "RESET":
                return initialState
          default:
            return state;
        }
      };



      const initialState = {
        name: { value: '', er: false },
        price: { value: '', er: false },
        category: { value: '', er: false },
        brand: { value: '', er: false },
        stock: { value: '', er: false },
        img: { value: '', er: false },
        shortDes: { value: '', er: false },
        longDes: { value: '', er: false }
      };
      
const [alta, dispatchAlta] = useReducer(altaReducer, initialState);

const setName = name => {
    dispatchAlta({ type: "NAME", payload: name });
  }
  
  const setPrice = price => {
    dispatchAlta({ type: "PRICE", payload: price });
  }
  
  const setCategory = category => {
    dispatchAlta({ type: "CATEGORY", payload: category });
  }
  
  const setBrand = brand => {
    dispatchAlta({ type: "BRAND", payload: brand });
  }
  
  const setStock = stock => {
    dispatchAlta({ type: "STOCK", payload: stock });
  }
  
  const setImg = img => {
    dispatchAlta({ type: "IMAGE", payload: img });
  }
  
  const setShortDes = shortDes => {
    dispatchAlta({ type: "SHORT", payload: shortDes });
  }
  
  const setLongDes = longDes => {
    dispatchAlta({ type: "LONG", payload: longDes });
  }
  const reset = () => {
    dispatchAlta({ type: "RESET" });
  }
  
  return [alta,setName, setPrice, setCategory, setBrand, setStock, setImg, setShortDes, setLongDes,reset];


    }
    export default useForm