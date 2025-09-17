import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createNoise3D } from 'simplex-noise';

const SpaceBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLButtonElement>(null);
  let fullscreen = false;

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer: THREE.WebGLRenderer,
        scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        sphereBg: THREE.Mesh,
        nucleus: THREE.Mesh,
        controls: OrbitControls,
        clock = new THREE.Clock();

    const noise = createNoise3D();
    let delta = 0;
    const blobScale = 3;

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(55, containerRef.current!.clientWidth / containerRef.current!.clientHeight, 0.01, 1000);
      camera.position.set(0, 0, 230);

      const directionalLight = new THREE.DirectionalLight("#fff", 2);
      directionalLight.position.set(0, 50, -20);
      scene.add(directionalLight);

      const ambientLight = new THREE.AmbientLight("#ffffff", 1);
      ambientLight.position.set(0, 20, 20);
      scene.add(ambientLight);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current!.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 4;
      controls.maxDistance = 350;
      controls.minDistance = 150;
      controls.enablePan = false;

      const loader = new THREE.TextureLoader();
      const textureSphereBg = loader.load('https://i.ibb.co/HC0vxMw/sky2.jpg');
      const texturenucleus = loader.load('https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg');

      // Nucleus
      texturenucleus.anisotropy = 16;
      const icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
      const lambertMaterial = new THREE.MeshPhongMaterial({ 
        map: texturenucleus,
        emissive: '#fff',
        emissiveIntensity: 0.1
      });
      nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
      scene.add(nucleus);

      // Sphere Background
      textureSphereBg.anisotropy = 16;
      const geometrySphereBg = new THREE.SphereGeometry(150, 40, 40);
      const materialSphereBg = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: textureSphereBg,
        transparent: true,
        opacity: 0.8
      });
      sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
      scene.add(sphereBg);

      // Stars removed for cleaner background

      // Fixed Stars removed for cleaner background
    };


    function animate() {
      requestAnimationFrame(animate);
      delta += clock.getDelta();

      if (delta > 1 / 60) {
        // Update nucleus vertices
        const positions = (nucleus.geometry as THREE.BufferGeometry).attributes.position;
        const vertex = new THREE.Vector3();
        
        for (let i = 0; i < positions.count; i++) {
          vertex.fromBufferAttribute(positions, i);
          vertex.normalize();
          
          const time = Date.now();
          const distance = (nucleus.geometry as THREE.IcosahedronGeometry).parameters.radius + 
            noise(
              vertex.x + time * 0.0005,
              vertex.y + time * 0.0003,
              vertex.z + time * 0.0008
            ) * blobScale;
            
          vertex.multiplyScalar(distance);
          positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }
        
        positions.needsUpdate = true;
        nucleus.rotation.y += 0.002;

        // Update sphere background
        sphereBg.rotation.x += 0.002;
        sphereBg.rotation.y += 0.002;
        sphereBg.rotation.z += 0.002;

        controls.update();
        renderer.render(scene, camera);
        delta = delta % (1 / 60);
      }
    }

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleFullscreen = () => {
    if (!fullscreen) {
      fullscreen = true;
      document.documentElement.requestFullscreen();
      if (fullscreenRef.current) {
        fullscreenRef.current.innerHTML = "Exit Fullscreen";
      }
    } else {
      fullscreen = false;
      document.exitFullscreen();
      if (fullscreenRef.current) {
        fullscreenRef.current.innerHTML = "Go Fullscreen";
      }
    }
  };

  return (
    <>
      <div 
        ref={containerRef} 
        className="fixed inset-0 w-full h-full z-0" 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0
        }}
      />
      <button
        ref={fullscreenRef}
        onClick={handleFullscreen}
        className="fixed bottom-8 right-8 border border-white rounded px-4 py-2 text-[#F9B31C] font-bold uppercase transition-all hover:bg-white hover:text-[#2a2b2f] z-50"
      >
        Go Fullscreen
      </button>
    </>
  );
};

export default SpaceBackground;