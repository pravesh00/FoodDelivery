import React, {useContext,useEffect,createContext,useState,useMemo} from "react";
import {LocationContext} from "../location/location.context";
import {restrauntRequest,restrauntsTransform} from "./restaurant.service";

export const RestarauntContext=createContext();

export const RestarauntContextProvider=({children})=>{
    const [restaraunts,setRestaraunts]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    const {locations}=useContext(LocationContext);
    console.log(locations);

    const retrieveRestaraunts=(location)=>{
        setIsLoading(true);
        setRestaraunts([]);
        setTimeout(()=>{
            restrauntRequest(location)
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
        if(locations){
        const locationString=`${locations.lat},${locations.lng}`;
        retrieveRestaraunts(locationString);
        }
    },[locations]);
    
    return (<RestarauntContext.Provider
        value={{
            restaraunts,
            isLoading,
            error
        }}
    >{children}</RestarauntContext.Provider>);
}
