/* global ymaps3 */

import { useEffect, useRef } from "react";
import "./Map.scss";

const MAP_CENTER = [30.323037, 59.938631];
const MAP_ZOOM = 17;

export const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;
    let map;

    const initMap = async () => {
      await ymaps3.ready;

      if (isCancelled) {
        return;
      }

      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapMarker,
      } = ymaps3;

      map = new YMap(mapRef.current, {
        location: {
          center: MAP_CENTER,
          zoom: MAP_ZOOM,
        },
      });

      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultFeaturesLayer());

      const pin = document.createElement("div");
      pin.className = "map__pin";

      const marker = new YMapMarker(
        {
          coordinates: MAP_CENTER,
        },
        pin,
      );

      map.addChild(marker);
    };

    initMap();

    return () => {
      isCancelled = true;
      map?.destroy();
    };
  }, []);

  return (
    <div className="map">
      <div ref={mapRef} className="map__wrapper" />
    </div>
  );
};
