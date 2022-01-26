import camelize from "camelize";
import {locations} from "./location.mock";

export const locationRequest=(searchTerm)=>{
    return new Promise((resolve,reject)=>{
        const location=locations[searchTerm];
        if(!location){
            reject("Not Found");
        }
        resolve(location);
    })

}

export const locationTransform=(result)=>{
    const transformedData=camelize(result);
    const {geometry={}}=transformedData.results[0];
    const {lat,lng}=geometry.location;
    return {lat,lng};
}