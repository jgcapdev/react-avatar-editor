import { useControls } from 'leva';

const Lights = () => {
  const { position, intensity, angle, penumbra } = useControls('Lights', {
    position: { value: [5, 25, 20], min: -100, max: 100, step: 0.01 },
    intensity: { value: 1 },
    angle: { value: 0.1 },
    penumbra: { value: 0.1, step: 0.1 },
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight intensity={intensity} angle={angle} penumbra={penumbra} position={position} />
    </>
  );
};

export default Lights;
