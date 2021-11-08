import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoicGh5eWEiLCJhIjoiY2t2cWZuM2V5MHg4ZzJ2a2dnMzJrdXY5dyJ9.iVm9Q4TY26R_BExja6qgCQ";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      //  style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
    });
  }, []);
  return <Wrapper id="map"></Wrapper>;
};
const Wrapper = tw.div`
flex-1
`;

export default Map;
