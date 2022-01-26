import React, {useContext,useEffect,createContext,useState,useMemo} from "react";

import {restrauntRequest,restrauntsTransform} from "./restaurant.service";

export const RestarauntContext=createContext();

export const RestarauntContextProvider=({children})=>{
    const [restaraunts,setRestaraunts]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    console.log(error);

    const retrieveRestaraunts=()=>{
        setIsLoading(true);
        setTimeout(()=>{
            restrauntRequest()
            .then(restrauntsTransform)
            .then((results)=>{
                setIsLoading(false);
                setRestaraunts(results);
            })
            .catch((err)=>{
                setIsLoading(false);
                setError(err);
            })
        },2000);
    }

    useEffect(()=>{
        retrieveRestaraunts();
    },[]);
    
    return (<RestarauntContext.Provider
        value={{
            restaraunts,
            isLoading,
            error
        }}
    >{children}</RestarauntContext.Provider>);
}
