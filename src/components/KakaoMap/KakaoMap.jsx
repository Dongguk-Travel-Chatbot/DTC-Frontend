import React, { useEffect } from "react";

export const KakaoMap = ({ latitude, longitude }) => {
  useEffect(() => {
    console.log(1);

    const initializeMap = () => {
      console.log(2);
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      console.log(3);
      const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    };

    if (typeof window.kakao === "undefined") {
      console.log("window.kakao is undefined. Loading script...");
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=aa87e1d70190876457edf039e2583088`;
      script.async = true;
      console.log(4);
      document.head.appendChild(script);

      script.onload = () => {
        console.log("5");
        console.log("Kakao Maps script loaded");
        window.kakao.maps.load(() => {
          console.log("Initializing map after script load");
          initializeMap();
        });
      };
    } else {
      console.log("window.kakao is already defined. Initializing map directly...");
      window.kakao.maps.load(() => {
        initializeMap();
      });
    }
  }, [latitude, longitude]);

  return (
    <div id="map" className="mapCss">123</div>
  );
};