import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";


type Coordinate = {
  lat: number,
  lng: number,
  text: string,
  color: string,
  size: number,
}

const MY_COORDINATES: Coordinate[] = [
  {
    lat: 18.735693,
    lng: -70.162651,
    text: "I'm Here",
    color: "white",
    size: 3
  },
];


const Earth = () => {
  const [width, setWidth] = useState(0);
  const globeEl = useRef();

  const handleOnClick = (
    label: object, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _event: MouseEvent, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _coords: { lat: number; lng: number; altitude: number; }
  ) => {
    (globeEl.current! as GlobeMethods).pointOfView({
      lat: (label as Coordinate).lat,
      lng: (label as Coordinate).lng,
      altitude: 0.4       
    }, 2000)
  }

  useEffect(() => {
    const holder = document.getElementById("EarthHolder");
    if (!holder) return;

    setWidth(holder.clientWidth);
    window.onresize = () => {
      setWidth(holder.clientWidth);
    };

    if(globeEl.current) (globeEl.current as GlobeMethods).pointOfView({
      lat: MY_COORDINATES[0].lat,
      lng: MY_COORDINATES[0].lng,
    }, 0);
  }, []);

  return (
    <Globe
      ref={globeEl}
      width={width}
      backgroundColor="rgba(0,0,0,0)"
      backgroundImageUrl="/textures/space.webp"
      labelsData={MY_COORDINATES}
      labelLat={(c) => (c as Coordinate).lat}
      labelLng={(c) => (c as Coordinate).lng}
      labelText={(c) => (c as Coordinate).text}
      labelSize={(c) => (c as Coordinate).size}
      labelColor={(c) => (c as Coordinate).color}
      labelDotRadius={0.5}
      onLabelClick={handleOnClick}
      // showGraticules
      // ref={globeEl}
      // animateIn={false}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    />
  );
};

export default Earth;
