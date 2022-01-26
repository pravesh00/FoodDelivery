import React,{useEffect,useMemo,useContext, createContext, useState}  from "react";
import {locationRequest, locationTransform} from "../location/location.service";

export const LocationContext=createContext();

export const LocationContextProvider=({children})=>{
    const [keyword,setKeyword]=useState("san francisco");
    const [locations,setLocations]= useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const onSearch=(searchKeyword="san francisco")=>{
        setIsLoading(true);
        setKeyword(searchKeyword);
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then(result=>{
            setIsLoading(false);
            setLocations(result);
            console.log(locations);
        })
        .catch((err)=>{
            setError(err);
            setIsLoading(false);
        });
    }

    useEffect(()=>{
        onSearch(keyword);
    },[]);

    return(
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                locations,
                search:()=>null,
                keyword

             } }
        >
            {children}
        </LocationContext.Provider>
    )
}