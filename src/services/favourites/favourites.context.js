import { createContext,useEffect,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext=createContext();

export const FavouritesContextProvider=({children})=>{
    const [favourites, setFavourites]= useState([]);

    const saveFavourites =async (val)=>{
        try{
            const jsonValue=JSON.stringify(val);
            await AsyncStorage.setItem("@favourite",jsonValue);

        }catch(e){
            console.log(e);
        }
    }

    const loadFavourites= async()=>{
        try{
            const value=await AsyncStorage.getItem("@favourite");
            if(val!==null){
                setFavourites(JSON.parse(value));
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        saveFavourites(favourites);
    },[favourites]);

    useEffect(()=>{
        loadFavourites();
    },[]);

    const add=(item)=>{
        setFavourites([...favourites,item]);
    }

    const remove=(item)=>{
        const newFavourites=favourites.filter(
            (x)=>x.placeId!==item.placeId
        );
        setFavourites(newFavourites);
    }

    return(
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites:add,
                removeFromFavourites:remove
            }}
        >
            {children}
        </FavouritesContext.Provider>
    )
}