import camelize from 'camelize';
import {mocks,mockImages} from './mock/index';

export const restrauntRequest=(location="37.7749295,-122.4194155")=>{
    return new Promise((resolve,reject)=>{
        const mock=mocks[location];
        if(!mock){
            reject("not found");}
        resolve(mock);      
    });
}

export const restrauntsTransform=({results})=>{
    const mappedResults=results.map((restaraunt)=>{
        restaraunt.photos=restaraunt.photos.map((p)=>{
            return mockImages[Math.ceil(Math.random()*(mockImages.length - 1))];
        });
        return {
            ...restaraunt,
            isOpenNow:restaraunt.opening_hours && restaraunt.opening_hours.open_now,
            isClosedTemporarily:restaraunt.bussiness_status=="CLOSED_TEMPORARILY",
        }
    });
    return camelize(mappedResults);
}
