import { createContext,useState } from "react";

export const FavouritesContext=createContext();

export const FavouritesContextProvider=({children})=>{
    const [favourites, setFavourites]= useState([]);
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