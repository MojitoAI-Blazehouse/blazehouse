import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/book-now-hero.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";

interface ClassSession {
  id: string;
  time: string;
  duration: string;
  location: string;
  className: string;
  instructor: string;
  instructorImage: string;
  room: string;
}

const mockClasses: ClassSession[] = [
  {
    id: "1",
    time: "5:10 AM",
    duration: "50 min.",
    location: "Downtown Studio",
    className: "POWER x BURN: Full Body Blast (50 min)",
    instructor: "Jordan K.",
    instructorImage: instructor1,
    room: "Downtown Red Room"
  },
  {
    id: "2",
    time: "6:15 AM",
    duration: "50 min.",
    location: "Downtown Studio",
    className: "POWER x BURN: Full Body Blast (50 min)",
    instructor: "Jordan K.",
    instructorImage: instructor1,
    room: "Downtown Red Room"
  },
  {
    id: "3",
    time: "7:25 AM",
    duration: "50 min.",
    location: "Downtown Studio",
    className: "POWER x BURN: Full Body Blast (50 min)",
    instructor: "Marcus T.",
    instructorImage: instructor2,
    room: "Downtown Red Room"
  },
  {
    id: "4",
    time: "8:35 AM",
    duration: "50 min.",
    location: "Downtown Studio",
    className: "POWER x BURN: Full Body Blast (50 min)",
    instructor: "Marcus T.",
    instructorImage: instructor2,
    room: "Downtown Red Room"
  },
  {
    id: "5",
    time: "9:45 AM",
    duration: "50 min.",
    location: "Downtown Studio",
    className: "HUSTLE x TONE: Core & Conditioning (50 min)",
    instructor: "Riley H.",
    instructorImage: instructor3,
    room: "Downtown Red Room"
  },
  {
    id: "6",
    time: "11:00 AM",
    duration: "50 min.",
    location: "Downtown Studio",
    className: "HUSTLE x TONE: Core & Conditioning (50 min)",
    instructor: "Riley H.",
    instructorImage: instructor3,
    room: "Downtown Red Room"
  },
  {
    id: "7",
    time: "12:15 PM",
    duration: "50 min.",
    location: "Downtown Studio",
    className: "POWER x BURN: Full Body Blast (50 min)",
    instructor: "Jordan K.",
    instructorImage: instructor1,
    room: "Downtown Red Room"
  },
  {
    id: "8",
    time: "5:30 PM",
    duration: "50 min.",
    location: "Downtown Studio",
    className: "HUSTLE x TONE: Core & Conditioning (50 min)",
    instructor: "Marcus T.",
    instructorImage: instructor2,
    room: "Downtown Red Room"
  },
  {
    id: "9",
    time: "6:45 PM",
    duration: "50 min.",
    location: "Downtown Studio",
    className: "POWER x BURN: Full Body Blast (50 min)",
    instructor: "Riley H.",
    instructorImage: instructor3,
    room: "Downtown Red Room"
  }
];

const weekDays = [
  { date: "Sep 29", day: "MON", isToday: false },
  { date: "Sep 30", day: "TUE", isToday: false },
  { date: "Oct 1", day: "WED", isToday: false },
  { date: "Oct 2", day: "THU", isToday: true, label: "Today" },
  { date: "Oct 3", day: "FRI", isToday: false },
  { date: "Oct 4", day: "SAT", isToday: false },
  { date: "Oct 5", day: "SUN", isToday: false }
];

const BookNow = () => {
  const [selectedDay, setSelectedDay] = useState(3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-red-900/40 to-black/60" />
        </div>
        <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <p className="text-white text-sm font-bold tracking-widest mb-4">
            LOS ANGELES, CALIFORNIA
          </p>
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            SCHEDULE
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white text-black py-12 px-8 md:px-16 lg:px-24">
        {/* Studio Header with Filters */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">Downtown Studio</h2>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2 border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Instructor
              </button>
              <button className="px-6 py-2 border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Class Type
              </button>
              <button className="px-6 py-2 border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Rooms
              </button>
              <button className="text-sm underline hover:no-underline ml-2">
                Clear All
              </button>
            </div>
          </div>

          {/* Week Calendar */}
          <div className="flex items-center justify-between mb-8 border-b border-gray-200">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="flex gap-2 md:gap-8 flex-1 justify-center">
              {weekDays.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`flex flex-col items-center py-4 px-4 md:px-8 transition-all ${
                    selectedDay === index
                      ? "border-b-4 border-black"
                      : "border-b-4 border-transparent hover:border-gray-300"
                  }`}
                >
                  <span className="text-xs md:text-sm text-gray-500 mb-1">
                    {day.label || day.date}
                  </span>
                  <span className={`text-xl md:text-2xl font-bold ${
                    selectedDay === index ? "text-black" : "text-gray-400"
                  }`}>
                    {day.day}
                  </span>
                </button>
              ))}
            </div>

            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Current Date Display */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h3 className="text-lg font-bold">Thursday, October 2, 2025</h3>
            <button className="text-sm underline hover:no-underline">
              Today
            </button>
          </div>

          {/* Class Schedule List */}
          <div className="space-y-0">
            {mockClasses.map((classSession, index) => (
              <div 
                key={classSession.id}
                className={`flex items-center justify-between py-6 ${
                  index !== mockClasses.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                {/* Time and Location */}
                <div className="flex items-start gap-8 flex-1">
                  <div className="min-w-[100px]">
                    <p className="text-xl font-bold mb-1">{classSession.time}</p>
                    <p className="text-sm text-gray-500">{classSession.duration}</p>
                  </div>
                  <div className="min-w-[140px]">
                    <p className="text-sm text-gray-600">{classSession.location}</p>
                  </div>
                </div>

                {/* Instructor and Class Details */}
                <div className="flex items-center gap-6 flex-1">
                  <img
                    src={classSession.instructorImage}
                    alt={classSession.instructor}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-1 underline hover:no-underline cursor-pointer">
                      {classSession.className}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      {classSession.instructor}
                    </p>
                    <p className="text-sm text-gray-500">{classSession.room}</p>
                  </div>
                </div>

                {/* Reserve Button */}
                <button className="border-2 border-black px-12 py-3 font-bold text-sm tracking-wider hover:bg-black hover:text-white transition-all ml-8">
                  RESERVE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookNow;
