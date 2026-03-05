import React, { useState } from 'react';

function TripPlan() {
  const [expandedDays, setExpandedDays] = useState([0]); // First day expanded by default

  const tripData = {
    location: "New Delhi",
    duration: "3",
    person: "1",
    days: [
      {
        number: "1",
        title: "A Day of Discovery in Old and New Delhi",
        description: "Experience the vibrant contrasts of Delhi, from the historical grandeur of Old Delhi to the planned elegance of New Delhi.",
        locations: [
          {
            name: "India Gate",
            type: "Monument",
            description: "A prominent war memorial built in memory of soldiers who died in World War I. It's a great starting point for understanding Delhi's history and enjoying a leisurely stroll.",
            time: "9:00 AM - 10:00 AM"
          },
          {
            name: "Rashtrapati Bhavan",
            type: "Government Building",
            description: "The official residence of the President of India. While entry into the building is restricted, the surrounding Mughal Gardens and impressive architecture are worth admiring.",
            time: "10:15 AM - 11:00 AM"
          },
          {
            name: "Humayun's Tomb",
            type: "Historical Site",
            description: "A magnificent precursor to the Taj Mahal, this UNESCO World Heritage Site is an exquisite example of Mughal architecture and a tranquil place for reflection.",
            time: "11:30 AM - 1:00 PM"
          },
          {
            name: "Lunch at a local eatery near Nizamuddin",
            type: "Dining Experience",
            description: "Savor authentic North Indian cuisine. Try local specialties like Kebabs or Biryani.",
            time: "1:00 PM - 2:00 PM"
          },
          {
            name: "Qutub Minar Complex",
            type: "Historical Site",
            description: "Another UNESCO World Heritage Site, featuring the towering Qutub Minar, an ancient Islamic victory tower, and intricate ruins.",
            time: "2:30 PM - 4:00 PM"
          },
          {
            name: "Chandni Chowk",
            type: "Market/Neighborhood",
            description: "Dive into the bustling heart of Old Delhi. Explore its narrow lanes filled with spice shops, textile vendors, and street food stalls.",
            time: "4:30 PM - 6:30 PM"
          },
          {
            name: "Jama Masjid",
            type: "Religious Site",
            description: "One of the largest mosques in India, offering panoramic views of Old Delhi from its minarets.",
            time: "6:30 PM - 7:30 PM"
          },
          {
            name: "Dinner at Karim's",
            type: "Dining Experience",
            description: "Indulge in a classic Mughlai dinner at a legendary establishment renowned for its rich flavors and traditional recipes.",
            time: "7:30 PM - 8:30 PM"
          }
        ],
        notes: "Travel between locations will primarily be via auto-rickshaw or ride-sharing apps. Consider using the Delhi Metro for longer distances. Wear comfortable shoes and dress modestly when visiting religious sites."
      },
      {
        number: "2",
        title: "Spiritual Delhi and Local Markets",
        description: "Explore the spiritual side of Delhi with visits to temples and experience the vibrant local markets.",
        locations: [
          {
            name: "Lotus Temple",
            type: "Religious Site",
            description: "A Bahá'í House of Worship notable for its flowerlike shape. Open to all regardless of religion or any other qualification.",
            time: "9:00 AM - 10:30 AM"
          },
          {
            name: "Akshardham Temple",
            type: "Religious Site",
            description: "A stunning modern Hindu temple showcasing traditional Indian and Hindu culture, spirituality, and architecture.",
            time: "11:00 AM - 1:30 PM"
          },
          {
            name: "Lunch at Local Restaurant",
            type: "Dining Experience",
            description: "Enjoy traditional vegetarian thali at a local restaurant near the temple.",
            time: "1:30 PM - 2:30 PM"
          },
          {
            name: "Dilli Haat",
            type: "Market",
            description: "An open-air market that showcases handicrafts, handlooms, and ethnic cuisine from different states of India.",
            time: "3:00 PM - 6:00 PM"
          },
          {
            name: "Hauz Khas Village",
            type: "Neighborhood",
            description: "A trendy neighborhood known for its art galleries, boutiques, cafes, and nightlife, surrounding a medieval water tank.",
            time: "6:30 PM - 9:00 PM"
          }
        ],
        notes: "Akshardham is closed on Mondays. Photography is not allowed inside. Hauz Khas Village comes alive in the evening with its vibrant cafe culture."
      },
      {
        number: "3",
        title: "Museums and Modern Delhi",
        description: "Discover Delhi's museums and experience the modern side of the city with contemporary art and shopping.",
        locations: [
          {
            name: "National Museum",
            type: "Museum",
            description: "One of the largest museums in India with a collection spanning 5,000 years of Indian cultural heritage.",
            time: "10:00 AM - 12:30 PM"
          },
          {
            name: "National Gallery of Modern Art",
            type: "Museum",
            description: "The premier art gallery showcasing modern and contemporary Indian art from the mid-19th century to the present.",
            time: "1:00 PM - 3:00 PM"
          },
          {
            name: "Café Coffee at Khan Market",
            type: "Dining Experience",
            description: "Relax at one of Delhi's most upscale markets with trendy cafes and bookstores.",
            time: "3:30 PM - 4:30 PM"
          },
          {
            name: "Select Citywalk Mall",
            type: "Shopping",
            description: "Experience modern Delhi with shopping, dining, and entertainment at this premier mall.",
            time: "5:00 PM - 7:00 PM"
          },
          {
            name: "Dinner at Connaught Place",
            type: "Dining Experience",
            description: "End your Delhi journey with dinner at the iconic Connaught Place, Delhi's commercial and business hub.",
            time: "7:30 PM - 9:00 PM"
          }
        ],
        notes: "Most museums are closed on Mondays. Khan Market can be expensive but offers great quality. Connaught Place is centrally located and well-connected by metro."
      }
    ],
    images: [
      "https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg",
      "https://cdn.tourradar.com/s3/serp/1500x800/7054_EuzfUZy8.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Skyline_of_Cannaught_Place%2C_New_Delhi.jpg/250px-Skyline_of_Cannaught_Place%2C_New_Delhi.jpg"
    ]
  };

  const toggleDay = (dayIndex) => {
    setExpandedDays(prev => 
      prev.includes(dayIndex) 
        ? prev.filter(i => i !== dayIndex)
        : [...prev, dayIndex]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-stone-200 text-stone-700 text-xs font-medium tracking-wider uppercase rounded mb-6">
            Solo Journey
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-stone-900 mb-4">
            Discover Delhi
          </h1>
          
          <p className="text-lg text-stone-600 italic font-light mb-10">
            A thoughtful exploration of India's capital
          </p>
          
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-300">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-stone-500 font-medium tracking-wider uppercase">Duration</span>
              <span className="text-base text-stone-700">{tripData.duration} Days</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-stone-500 font-medium tracking-wider uppercase">Location</span>
              <span className="text-base text-stone-700">{tripData.location}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-stone-500 font-medium tracking-wider uppercase">Travelers</span>
              <span className="text-base text-stone-700">{tripData.person} Person</span>
            </div>
          </div>
        </header>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
          {tripData.images.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-[4/3] overflow-hidden rounded-sm opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
            >
              <img 
                src={img} 
                alt={`Delhi ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Days Section */}
        <div className="space-y-6">
          {tripData.days.map((day, dayIndex) => (
            <section 
              key={dayIndex} 
              className="bg-white border border-stone-200 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Day Header - Collapseable */}
              <button
                onClick={() => toggleDay(dayIndex)}
                className="w-full px-8 py-6 flex items-start justify-between gap-6 hover:bg-stone-50 transition-colors duration-200 text-left"
              >
                <div className="flex-1">
                  <span className="block text-xs text-stone-500 font-medium tracking-wider uppercase mb-2">
                    Day {day.number}
                  </span>
                  <h2 className="text-2xl font-normal text-stone-900 mb-3 leading-tight">
                    {day.title}
                  </h2>
                  <p className="text-base text-stone-600 leading-relaxed font-light">
                    {day.description}
                  </p>
                </div>
                
                <svg
                  className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300 mt-1 ${
                    expandedDays.includes(dayIndex) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Locations - Collapseable Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedDays.includes(dayIndex) ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  {/* Timeline */}
                  <div className="relative pl-8 space-y-8">
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-stone-200" />
                    
                    {day.locations.map((location, locIndex) => (
                      <div 
                        key={locIndex} 
                        className="relative opacity-0 animate-fade-in-up"
                        style={{ 
                          animationDelay: `${locIndex * 50}ms`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute -left-8 top-1.5 w-2 h-2 bg-stone-300 rounded-full" />
                        
                        {/* Location Card */}
                        <div className="pb-8 border-b border-stone-100 last:border-0">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <h3 className="text-lg font-normal text-stone-900 mb-1">
                                {location.name}
                              </h3>
                              <span className="inline-block text-xs text-stone-600 font-medium tracking-wide uppercase">
                                {location.type}
                              </span>
                            </div>
                            <time className="text-sm text-stone-500 whitespace-nowrap">
                              {location.time}
                            </time>
                          </div>
                          <p className="text-base text-stone-600 leading-relaxed font-light">
                            {location.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Notes Section */}
                  <div className="mt-8 p-6 bg-stone-50 border border-stone-200 rounded-sm">
                    <h3 className="text-sm font-medium text-stone-700 tracking-wide uppercase mb-3">
                      Travel Notes
                    </h3>
                    <p className="text-base text-stone-600 leading-relaxed font-light">
                      {day.notes}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-stone-300 text-center">
          <p className="text-sm text-stone-500 font-light">
            Created with Trip Blueprint • {new Date().getFullYear()}
          </p>
        </footer>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default TripPlan;