import { useGLTF } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';

import { useControls } from 'leva';

const Adam = ({ skin, hair, top, bottom, footwear, pos = [0, -1.3, 0], ...props }) => {
  const { nodes, materials } = useGLTF('/assets/models/Adam.glb');

  const { position, scale, rotation } = useControls('Adam', {
    position: { value: pos, min: -100, max: 100, step: 0.1 },
    scale: 1.5,
    rotation: { value: [0, 0, 0], min: -100, max: 100, step: 0.01 },
  });

  return (
    <>
      <group {...props} dispose={null} position={position} scale={scale} rotation={rotation}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          castShadow
          receiveShadow
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          castShadow
          receiveShadow
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          material-color={skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          material-color={hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          material-color={footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          material-color={bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          material-color={top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
          material-color={skin}
        />
      </group>
      <ContactShadows position={pos} frames={1} />
    </>
  );
};

export default Adam;
