import { useGLTF } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';

import { useControls } from 'leva';

const Nina = ({ skin, hair, footwear, top, bottom, pos = [0, -1.3, 0], ...props }) => {
  const { nodes, materials } = useGLTF('/assets/models/Nina.gltf');

  const { position, scale, rotation } = useControls('Nina', {
    position: { value: pos, min: -100, max: 100, step: 0.1 },
    scale: 1.5,
    rotation: { value: [0, 0, 0], min: -100, max: 100, step: 0.01 },
  });

  return (
    <>
      <group {...props} dispose={null} position={position} scale={scale} rotation={rotation}>
        <mesh castShadow receiveShadow geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} />
        <mesh castShadow receiveShadow geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          material-color={skin}
        />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          material-color={hair}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          material-color={footwear}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          material-color={top}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          material-color={bottom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          material-color={skin}
        />
      </group>
      <ContactShadows position={pos} frames={1} />
    </>
  );
};

export default Nina;
