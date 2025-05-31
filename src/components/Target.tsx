import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Mesh } from 'three';

const Target = (props: MeshProps) => {
  const target = useRef<Mesh>(null);
  const { scene } =  useGLTF("/models/target.gltf");

  useGSAP(() => {
    if(target.current) {
      gsap.to(target.current.position, {
        y: target.current.position.y + 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true
      })    
    }
  })

  return (
    <mesh ref={target} {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

useGLTF.preload("/models/target.gltf");

export default Target