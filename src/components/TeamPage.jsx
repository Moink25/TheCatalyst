import React from "react";
import ThreeBackground from "./ThreeBackground";
import profileImage from "../assets/m.png";
import image1 from "../assets/new_moin.png";
import image2 from "../assets/include.jpg";

const TeamPage = () => {
  const teamMembers = [
    { 
      name: "Alice Johnson", 
      role: "President", 
      image: profileImage 
    },
    { 
      name: "Bob Smith", 
      role: "Vice President", 
      image: image1 
    },
    { 
      name: "Charlie Davis", 
      role: "Treasurer", 
      image: profileImage 
    },
    { 
      name: "David Lee", 
      role: "Secretary", 
      image: image2 
    },
    { 
      name: "Emma Wilson", 
      role: "Marketing Lead", 
      image: image1 
    },
    { 
      name: "Frank Moore", 
      role: "Tech Director", 
      image: profileImage 
    }
  ];

  return (
    <div id='team' className="relative w-full min-h-screen">
      {/* Full-Screen Three.js Starry Background */}
      <ThreeBackground className="absolute inset-0 z-0" />

      {/* Team Section - Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            Meet the <span className="text-blue-400">Catalysts</span>
          </h1>
          <p className="mt-2 text-lg text-white">The team driving change and making things happen!</p>
        </header>

        {/* Core Team Reveal */}
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-white">Core Team</h2>
          <p className="mt-2 text-lg text-blue-300 text-center">
            Our leaders, visionaries, and change-makers!
          </p>

          {/* Core Team Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-gray-800/70 p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-center text-white">{member.name}</h3>
                <p className="text-sm text-blue-300 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exciting Non-Core Team Mention */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white">And There's More...</h2>
          <p className="mt-2 text-lg text-blue-300">
            We also have an incredible team of 30+ Heads and 40+ Mentors driving us forward!
          </p>
        </div>

        {/* Join Button */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Join the Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;