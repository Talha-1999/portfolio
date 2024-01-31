"use client";

import React, { useEffect } from "react";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";

function MeshComponent(props) {
  const model = useGLTF("models/wanimation.glb");

  const { actions, names } = useAnimations(model.animations, model.scene);

  useEffect(() => {
    actions[names[0]].fadeIn(0.5).play();
  }, []);

  return (
    <group
      {...props}
      scale={2.3}
      rotation-x={0.3}
      position-x={-0.6}
      position-y={-2}
    >
      <primitive object={model.scene} />
    </group>
  );
}

export default function Character() {
  return (
    <>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <MeshComponent position={[0, -1, 0]} />
      <OrbitControls enabled={false} />
    </>
  );
}
