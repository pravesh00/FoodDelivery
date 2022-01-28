import React,{useState}  from "react";
import {locationRequest, locationTransform} from "../location/location.service";

export const LocationContext=React.createContext();

export const LocationContextProvider=({children})=>{
    const [keyword,setKeyword]=useState("san francisco");
    const [locations,setLocations]= useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const onSearch=(searchKeyword)=>{
        setIsLoading(true);
        setKeyword(searchKeyword);
        if(!searchKeyword.length){
            return;
        }
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then((result)=>{
            setIsLoading(false);
            setLocations(result);
            console.log(result);
        })
        .catch((err)=>{
            setError(err);
            setIsLoading(false);
            console.log(error);
        });
    }

    return(
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                locations,
                search:onSearch,
                keyword

             } }
        >
            {children}
        </LocationContext.Provider>
    );
 }