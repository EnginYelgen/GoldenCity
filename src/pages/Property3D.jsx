import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "../components/property/Experience";
import { Overlay } from "../components/property/Overlay";

function App() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  }, []);
  return (
    <div className="absolute inset-0 z-50 bg-white dark:bg-secondary-900 transition-colors duration-300">
      {loading ? (
        <div className="absolute inset-0 z-50 flex h-full w-full items-center justify-center text-primary-700 dark:text-primary-300 text-xl md:text-3xl text-center font-bold">
          Please wait...
        </div>
      ) : null}
      <Leva hidden />
      <Overlay />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#232323"]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
