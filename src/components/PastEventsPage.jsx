import React from "react";
import ThreeBackground from "./ThreeBackground";
import event1 from "../assets/include.jpg"; // Replace with actual event images
import event2 from "../assets/m.png";
import event3 from "../assets/new_moin.png";

const PastEventsPage = () => {
  const events = [
    {
      title: "Hackathon 2023",
      date: "March 15, 2023",
      description: "An exhilarating 24-hour coding event where innovation thrived.",
      image: event1,
    },
    {
      title: "Workshop: AI & ML",
      date: "June 5, 2023",
      description: "A deep dive into Artificial Intelligence and Machine Learning.",
      image: event2,
    },
    {
      title: "Annual Tech Fest",
      date: "October 10, 2023",
      description: "Celebrating technology, creativity, and innovation.",
      image: event3,
    },
  ];

  return (
    <div id='events' className="relative w-full min-h-screen">
      {/* Full-Screen Three.js Starry Background */}
      <ThreeBackground className="absolute inset-0 z-0" />

      {/* Past Events Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <header className="text-center mb-10 pt-16">
          <h1 className="text-4xl font-bold text-white">
            Past <span className="text-blue-400">Events</span>
          </h1>
          <p className="mt-2 text-lg text-blue-300">
            A glimpse into the memorable moments we've created together.
          </p>
        </header>

        {/* Event Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/70 p-6 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:bg-gray-900/80"
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg group-hover:opacity-75"
              />
              {/* Event Content */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative mt-4">
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <p className="text-sm text-blue-300 mt-1">{event.date}</p>
                <p className="text-gray-300 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white">Be Part of the Legacy!</h2>
          <p className="mt-2 text-lg text-blue-300">
            Don't miss the chance to make unforgettable memories at our upcoming events.
          </p>
        </div>

        {/* Explore Button */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Explore Upcoming Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastEventsPage;
