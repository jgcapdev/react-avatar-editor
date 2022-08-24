import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sky, Float, Loader } from '@react-three/drei';

import Nina from '../components/Nina.js';
import CharacterForm from '../components/CharacterForm.js';
import Lights from '../components/Lights.js';

const EditorScene = () => {
  const [skin, setSkin] = useState('#ffffff');
  const [hair, setHair] = useState('#ffffff');
  const [top, setTop] = useState('#ffffff');
  const [bottom, setBottom] = useState('#ffffff');
  const [footwear, setFootwear] = useState('#ffffff');

  const handleReset = (e) => {
    e.preventDefault();

    setSkin('#ffffff');
    setHair('#ffffff');
    setTop('#ffffff');
    setBottom('#ffffff');
    setFootwear('#ffffff');
  };

  const handleColors = (e) => {
    e.preventDefault();
    console.log('OK');
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-10">
            <Canvas shadows camera={{ position: [0, 1.5, 3], fov: 60 }}>
              <Lights />

              <Suspense fallback={null}>
                <Float speed={1} floatIntensity={1} rotationIntensity={0}>
                  <Nina skin={skin} hair={hair} top={top} bottom={bottom} footwear={footwear} />
                </Float>
              </Suspense>

              <Sky sunPosition={[100, 20, 100]} />
              <Environment files="/assets/royal_esplanade_1k.hdr" />
              <OrbitControls minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} enablePan={false} enableZoom={false} />
            </Canvas>
            <Loader />
          </div>
          <div className="col-2">
            <CharacterForm
              skin={skin}
              hair={hair}
              top={top}
              bottom={bottom}
              footwear={footwear}
              handleSkin={setSkin}
              handleTop={setTop}
              handleBottom={setBottom}
              handleFootwear={setFootwear}
              handleHair={setHair}
              handleReset={handleReset}
              handleColors={handleColors}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorScene;
