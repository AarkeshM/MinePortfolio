import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'
import Homeinfo from '../components/Homeinfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'


const Home = () => {

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 1;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(()=>{
    if (isPlayingMusic){
      audioRef.current.play();
    }
    return() => {
      audioRef.current.pause();
    };
  },[isPlayingMusic]);

  const adjustPlaneScreenSize = () => {
    let screenScale, screenPosition;
    if(window < 768){
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }else{
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -0.6, -43.4];
    } else {
      screenScale = [1.0, 1.0, 1.0];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];

  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneScreenSize();

  return (
    <div className='w-full h-screen relative'>

      <div className='absolute top-16 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
      <Canvas
        style={{ background: '#d1e0ff' }}
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" :"cursor-grab" }`}
        camera={{ near: 0.1, far: 1000 }}
       
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[5, 5, 5]} intensity={1.1} />
          <ambientLight intensity={0.09} />
          <pointLight position={[10, 5, 10]} intensity={0} />
          <spotLight position={[0, 50, 10]} angle={0.2} penumbra={0.1} intensity={0.2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.15} />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island isRotating={isRotating} setIsRotating={setIsRotating} position={islandPosition} setCurrentStage={setCurrentStage} scale={islandScale} rotation={[0.1, 4.7077, 0]} />
          <Plane isRotating={isRotating} position={planePosition} rotation={[0, 20.1, 0]} scale={planeScale} />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={!isPlayingMusic ? soundoff : soundon} alt="jukebox" 
        onClick={()=>setIsPlayingMusic((curr) => !curr)}
        className='h-10 w-10 cursor-pointer object-contain'
        />
      </div>
    </div>
  )
}

export default Home