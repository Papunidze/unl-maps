import UnlSdk from "unl-map-js";
import { useEffect, useRef } from "react";
import "./style/map.css";
import location from "../image/map-location.png";
import find from "../image/find.png";
import grid from "../image/grid.png";
import layer from "../image/layer.png";
import { Box } from "@mui/system";

export default function Map({ left, onClick }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  function initializeMap() {
    if (map.current) return; //stops map from intializing more than once
    map.current = new UnlSdk.Map({
      apiKey: "zkXmSvu61bOVJHkybWqJfOqOMRl2lhEl",
      vpmId: "e43daa6c-820d-4772-91e5-f99bebc35930",
      gridControl: true,
      indoorMapsControl: true,
      tilesSelectorControl: true,
      draftShapesControl: true,
      container: mapContainer.current,
      center: [-0.118092, 51.509865],
      zoom: 6,
    });
  }

  // console.log(document.getElementById("tiles-selector-tooltip"));
  // console.log(document.querySelector(".mapbox-control"));

  // document
  //   .querySelectorAll(".mapboxgl-ctrl-group")
  //   .forEach((element, index) => {
  //     if (index === 1) console.log(element);
  //     // return (element.innerHTML = `
  //     //     <button type='button'>1</button>
  //     //     <button type='button'>2</button>
  //     // `);
  //   });
  const stylingMapControlBtn = () => {
    let counter = 0;
    document.querySelectorAll("button").forEach((element) => {
      if (
        element.innerHTML.substring(0, 39) ===
        `<svg xmlns="http://www.w3.org/2000/svg"` &&
        element.getAttribute("class") === null
      ) {
        counter += 1;
        if (counter === 1) {
          return (element.innerHTML = `<img src="${find}" alt="giga" style="width: 25px;"/>`);
        }
        if (counter === 2) {
          return (element.innerHTML = `<img src="${grid}" alt="giga" style="width: 25px;"/>`);
        }
        if (counter === 3) {
          return (element.innerHTML = `<img src="${location}" alt="giga" style="width: 25px;"/>`);
        }
        if (counter === 4) {
          return (element.innerHTML = `<img src="${layer}" alt="giga" style="width: 25px;"/>`);
        }
      }
    });
  };
  useEffect(() => {
    stylingMapControlBtn();
    initializeMap();
    map.current.on("click", function (e) {
      onClick(e.lngLat);
    });
    // console.log(
    //   document
    //     .getElementsByTagName("button")
    //     .map((element) => console.log(element))
    // );
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
        left: left ? { md: 505, xl: 650 } : 0,
        transition: "all 1s ease",
      }}
    >
      <div
        ref={mapContainer}
        className="map"
        style={{
          top: "0",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
    </Box>
  );
}
