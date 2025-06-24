import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const CoffeeContext = createContext(null);
const ContextApi = ({children}) => {
    const [coffee, setCoffee] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/coffees")
        .then(res=>res.json())
        .then(data=>{
            setCoffee(data)
            console.log(data);
        })
    },[])
    const authInfo = {
        coffee,
        setCoffee
    }
    return (
        <CoffeeContext.Provider value={authInfo}>
            {children}
        </CoffeeContext.Provider>
    );
};

export default ContextApi;