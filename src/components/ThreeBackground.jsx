import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const ThreeBackground = ({ className }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1c1c1c);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Renderer setup
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Mount renderer
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Camera position
    camera.position.z = 5;

    // Create stars
    const createStars = () => {
      const geometry = new THREE.BufferGeometry();
      const starCount = 1000; // Number of stars
      const positions = new Float32Array(starCount * 3);
      const sizes = new Float32Array(starCount); // For varying star sizes

      // Generate random star positions and sizes
      for (let i = 0; i < starCount; i++) {
        positions[i * 3] = Math.random() * 10 - 5; // Random x position between -5 and 5
        positions[i * 3 + 1] = Math.random() * 10 - 5; // Random y position between -5 and 5
        positions[i * 3 + 2] = Math.random() * 10 - 5; // Random z position between -5 and 5
        sizes[i] = Math.random() * 1.5 + 0.5; // Random size between 0.5 and 2
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        color: 0xffffff, // White color for stars
        size: 0.01,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
      });

      const stars = new THREE.Points(geometry, material);
      return stars;
    };

    // Add stars to the scene
    const stars = createStars();
    scene.add(stars);

    // Post-processing for glow effect
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,  // Strength
      0.4,  // Radius
      0.85  // Threshold
    );
    composer.addPass(bloomPass);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars to create a subtle movement effect
      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;

      // Render the scene with post-processing
      composer.render();
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Dispose of geometries and materials
      stars.geometry.dispose();
      stars.material.dispose();
    };
  }, []);

  return <div 
    ref={mountRef} 
    className={className} 
    style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1 
    }} 
  />;
};

export default ThreeBackground;
