import React from "react";
import { CompactRestarauntInfo } from "../../../components/restaraunt/compact-restaraunt-info.component";

export const MapCallout=({restaraunt})=>{
    return (
        <CompactRestarauntInfo restarauant={restaraunt} isMap/>
    )
}