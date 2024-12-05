import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithubSquare, FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/m.png"; // Replace with your actual image path
import image1 from "../assets/new_moin.png";
import image2 from "../assets/include.jpg";
import { Link } from "react-scroll";
import * as THREE from "three";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [profileImage, image1, profileImage, image2]; // Add your image paths

  // Update the carousel image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, );

  const bgRef = useRef();

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
    const particleCount = 3500;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
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
    <div className="relative w-full h-[90vh] md:h-[90vh] overflow-hidden" id="hero">
      {/* Three.js Background */}
      <div ref={bgRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-8 space-y-8 md:space-y-0">
        {/* Left Section */}
        <motion.div
          className="flex flex-col h-1/2 md:h-full items-center md:w-[60%] mx-auto text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gray-500 text-2xl">Welcome to</span>
            <br />
            <span className="text-[#87ceeb]">The Catalyst</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Where{" "}
            <span className="text-[#87ceeb]">first-year students</span> meet{" "}
            <span className="text-[#87ceeb]">senior mentors</span> to spark{" "}
            <span className="text-[#87ceeb]">growth, learning,</span> and{" "}
            <span className="text-[#87ceeb]">success</span>!
          </motion.p>

          <motion.blockquote
            className="mt-8 text-lg italic text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            "The best way to predict your future is to create it." – Abraham Lincoln
          </motion.blockquote>

          <Link to="techstack" spy={true} smooth={true} offset={-70} duration={500}>
            <motion.button
              className="mt-8 px-6 py-3 text-lg font-medium bg-[#50abe7] text-black rounded-lg shadow-lg hover:shadow-yellow-500/50 transform hover:scale-110 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Join the Catalyst Journey
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Section with Circular Image Carousel */}
        <motion.div
          className="flex flex-col justify-between items-center gap-4 md:justify-end md:w-[50%] space-x-4 overflow-hidden relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main Image */}
          <motion.div
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-[#87ceeb] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={images[currentIndex]}
              alt="profile"
              className="w-full h-full object-cover"
              animate={{
                scale: [1, 1.1, 1], // Create a "heartbeat" effect with scale
              }}
              transition={{
                duration: 8, // Slow down the heartbeat effect
                repeat: Infinity, // Repeat the heartbeat animation infinitely
                repeatType: "loop", // Loop the animation
                ease: "easeInOut", // Smooth out the scaling
              }}
            />
          </motion.div>

          {/* Space between current image and thumbnails */}
          <div className="my-4 md:my-10" /> {/* This adds vertical spacing */}

          {/* Thumbnails */}
          <div className="absolute bottom-0 w-full md:w-1/2 flex justify-center items-center space-x-4 bg-gray-100 bg-opacity-50 p-1 rounded-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-full border-4 ${
                  index === currentIndex ? "border-[#87ceeb]" : "border-transparent"
                } overflow-hidden`}
              >
                <img
                  src={image}
                  alt={`thumbnail-${index}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-0 md:-bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4 space-x-6 z-10">
        <FaGithubSquare className="text-gray-700 text-3xl md:text-4xl hover:text-[#50abe7]" />
        <FaTwitter className="text-gray-700 text-3xl md:text-4xl hover:text-[#50abe7]" />
        <FaInstagramSquare className="text-gray-700 text-3xl md:text-4xl hover:text-[#50abe7]" />
        <FaLinkedin className="text-gray-700 text-3xl md:text-4xl hover:text-[#50abe7]" />
      </div>
    </div>
  );
};

export default Hero;
