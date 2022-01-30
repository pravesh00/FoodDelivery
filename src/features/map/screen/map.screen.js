import { useEffect } from "react";
import MapView from "react-native-maps";
import { useContext, useState } from "react/cjs/react.development";
import { LocationContext } from "../../../services/location/location.context";
import { RestarauntContext } from "../../../services/restaurants/restaurant.context";
import { MapCallout } from "../component/map-callout.component";
import {Search} from "../component/search.component";

export const Map=({navigation})=>{
  const {locations}=useContext(LocationContext);
  const {restaraunts}=useContext(RestarauntContext);
  const [latDelta,setLatDelta]=useState(0);
  const {lat,lng,viewPort}=locations;

  useEffect(()=>{
    const northEastLat=viewPort.northeast.lat;
    const southWestLat=viewPort.southwest.lat;

    setLatDelta(northEastLat-southWestLat);
  },[viewPort,locations])


  return(
  <>
    <Search/>
    <MapView style={{height:'100%'}} region={{

      latitude:lat,
      longitude:lng,
      latitudeDelta:latDelta,
      longitudeDelta:0.02,

    }}>
      {restaraunts.map((res)=>{
        return (<MapView.Marker
                  key={res.name}
                  title={res.name}
                  coordinate={{
                    latitude:res.geometry.location.lat,
                    longitude:res.geometry.location.lng
                  }}
        
        >
          <MapView.Callout onPress={()=>navigation.navigate("RestarauntDetails",{data:res})}>
          <MapCallout restaraunt={res}></MapCallout>
          </MapView.Callout>
        </MapView.Marker>)
      })}
    </MapView>
  </>);
  };