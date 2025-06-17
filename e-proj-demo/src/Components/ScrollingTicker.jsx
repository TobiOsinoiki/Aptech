import { useState, useEffect } from "react";

export function ScrollingTicker() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState("Loading location...");

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
         
          setLocation(`Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`);
        },
        () => {
          setLocation("Location unavailable");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="bottom text-white bg-gradient-blue  py-2 m-0" style={{zIndex: 1030 }}>
      <div className="overflow-hidden">
        <div className="animate-scroll text-nowrap">
          <span className="d-inline-block px-4">
             {formatDate(currentTime)} | {formatTime(currentTime)} |  {location}
          </span>
          <span className="d-inline-block px-4"> Welcome to Belleville Dental - Your Partner in Oral Health</span>
          <span className="d-inline-block px-4">
             Professional Education |  Patient Resources |  Latest Research |  Quality Products
          </span>
        </div>
      </div>
    </div>
  );
}