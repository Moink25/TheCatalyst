import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/m.png';
import image2 from '../assets/include.jpg';
import image3 from '../assets/new_moin.png';
import * as THREE from 'three';

const WhatWeDo = () => {
  const services = [
    {
      title: 'Mentorship Programs',
      description:
        'We connect first-year students with senior mentors to guide their academic and personal growth.',
      image: image1,
    },
    {
      title: 'Skill Development Workshops',
      description:
        'We offer workshops to enhance technical and soft skills, preparing students for the future.',
      image: image2,
    },
    {
      title: 'Networking Opportunities',
      description:
        'We provide a platform for students to network with industry professionals and alumni.',
      image: image3,
    },
  ];

  const bgRef = useRef();

  // Particle background effect with Three.js
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    bgRef.current.appendChild(renderer.domElement);

    // Particle system
    const particles = new THREE.BufferGeometry();
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x87ceeb,
      size: 0.03,
    });

    const particleMesh = new THREE.Points(particles, particleMaterial);
    scene.add(particleMesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particleMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      bgRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full py-16 md:py-24 bg-[#f5f7fa] h-[200vh] md:h-[90vh]" id="what-we-do">
      {/* Particle Background */}
      <div ref={bgRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Title Section */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-[#87ceeb]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="mt-4 text-xl text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We provide opportunities for first-year students to grow, learn, and succeed.
        </motion.p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 * (index + 1) }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#50abe7]">{service.title}</h3>
              <p className="mt-4 text-lg text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
