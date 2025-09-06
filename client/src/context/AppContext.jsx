import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

export const AppContext = createContext()

export const AppContextProvider = ({children})=>{
    
    const navigate = useNavigate();
    const [user,setUser] = useState(true)
    const [isSeller,setIsSeller] = useState(false)
    const [showUserLogin,setShowUserLogin] = useState(false)

    const [searchQuery,setSearchQuery] = useState({})


    const value = {
        navigate,
        user, setUser,
        isSeller, setIsSeller,
        showUserLogin, setShowUserLogin,
        searchQuery, setSearchQuery
    };
    
    

    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>)
}

export const useAppContext = () =>{
    return useContext(AppContext)
}