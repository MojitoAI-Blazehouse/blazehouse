import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addDays, startOfWeek, format, isToday, isSameDay } from "date-fns";
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

// Generate schedules for each day of the week
const generateScheduleForDay = (dayOfWeek: number): ClassSession[] => {
  const schedules: Record<number, ClassSession[]> = {
    0: [ // Sunday
      { id: "sun1", time: "8:00 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "sun2", time: "9:30 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "sun3", time: "11:00 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "sun4", time: "12:30 PM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "sun5", time: "4:00 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
    ],
    1: [ // Monday
      { id: "mon1", time: "5:10 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "mon2", time: "6:15 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "mon3", time: "7:25 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "mon4", time: "8:35 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "mon5", time: "9:45 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "mon6", time: "11:00 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "mon7", time: "12:15 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "mon8", time: "5:30 PM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "mon9", time: "6:45 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
    ],
    2: [ // Tuesday
      { id: "tue1", time: "5:15 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "tue2", time: "6:20 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "tue3", time: "7:30 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "tue4", time: "9:00 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "tue5", time: "10:30 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "tue6", time: "12:00 PM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "tue7", time: "5:45 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "tue8", time: "7:00 PM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
    ],
    3: [ // Wednesday
      { id: "wed1", time: "5:10 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "wed2", time: "6:25 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "wed3", time: "7:35 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "wed4", time: "8:45 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "wed5", time: "10:00 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "wed6", time: "11:30 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "wed7", time: "5:15 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "wed8", time: "6:30 PM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "wed9", time: "7:45 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
    ],
    4: [ // Thursday
      { id: "thu1", time: "5:20 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "thu2", time: "6:30 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "thu3", time: "7:40 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "thu4", time: "9:00 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "thu5", time: "10:15 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "thu6", time: "12:00 PM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "thu7", time: "5:30 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "thu8", time: "6:45 PM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
    ],
    5: [ // Friday
      { id: "fri1", time: "5:10 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "fri2", time: "6:15 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "fri3", time: "7:25 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "fri4", time: "8:35 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "fri5", time: "9:50 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "fri6", time: "11:15 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "fri7", time: "5:00 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "fri8", time: "6:15 PM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "fri9", time: "7:30 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
    ],
    6: [ // Saturday
      { id: "sat1", time: "7:00 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "sat2", time: "8:30 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "sat3", time: "10:00 AM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
      { id: "sat4", time: "11:30 AM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Jordan K.", instructorImage: instructor1, room: "Downtown Red Room" },
      { id: "sat5", time: "1:00 PM", duration: "50 min.", location: "Downtown Studio", className: "POWER x BURN: Full Body Blast (50 min)", instructor: "Marcus T.", instructorImage: instructor2, room: "Downtown Red Room" },
      { id: "sat6", time: "4:30 PM", duration: "50 min.", location: "Downtown Studio", className: "HUSTLE x TONE: Core & Conditioning (50 min)", instructor: "Riley H.", instructorImage: instructor3, room: "Downtown Red Room" },
    ],
  };
  
  return schedules[dayOfWeek] || schedules[1];
};

const BookNow = () => {
  const today = new Date();
  const [weekStartDate, setWeekStartDate] = useState(() => startOfWeek(today, { weekStartsOn: 1 }));
  const [selectedDate, setSelectedDate] = useState(today);

  // Generate week days based on current week
  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const date = addDays(weekStartDate, i);
      return {
        date,
        dateStr: format(date, "MMM d"),
        day: format(date, "EEE").toUpperCase(),
        isToday: isToday(date),
        label: isToday(date) ? "Today" : undefined,
      };
    });
  }, [weekStartDate]);

  // Get current selected day index
  const selectedDayIndex = useMemo(() => {
    return weekDays.findIndex(day => isSameDay(day.date, selectedDate));
  }, [weekDays, selectedDate]);

  // Get classes for selected day
  const currentClasses = useMemo(() => {
    return generateScheduleForDay(selectedDate.getDay());
  }, [selectedDate]);

  const handlePreviousWeek = () => {
    setWeekStartDate(prev => addDays(prev, -7));
  };

  const handleNextWeek = () => {
    setWeekStartDate(prev => addDays(prev, 7));
  };

  const handleTodayClick = () => {
    const newWeekStart = startOfWeek(today, { weekStartsOn: 1 });
    setWeekStartDate(newWeekStart);
    setSelectedDate(today);
  };

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
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">Downtown Studio</h2>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <button className="px-4 sm:px-6 py-2 border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors whitespace-nowrap">
                Instructor
              </button>
              <button className="px-4 sm:px-6 py-2 border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors whitespace-nowrap">
                Class Type
              </button>
              <button className="px-4 sm:px-6 py-2 border-2 border-black text-sm font-medium hover:bg-black hover:text-white transition-colors whitespace-nowrap">
                Rooms
              </button>
              <button className="text-sm underline hover:no-underline ml-2 whitespace-nowrap">
                Clear All
              </button>
            </div>
          </div>

          {/* Week Calendar */}
          <div className="flex items-center justify-between mb-8 border-b border-gray-200">
            <button 
              onClick={handlePreviousWeek}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="flex gap-1 sm:gap-3 lg:gap-8 flex-1 justify-center overflow-x-auto">
              {weekDays.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDate(day.date)}
                  className={`flex flex-col items-center py-4 px-2 sm:px-4 lg:px-8 transition-all whitespace-nowrap ${
                    selectedDayIndex === index
                      ? "border-b-4 border-black"
                      : "border-b-4 border-transparent hover:border-gray-300"
                  }`}
                >
                  <span className="text-xs lg:text-sm text-gray-500 mb-1">
                    {day.label || day.dateStr}
                  </span>
                  <span className={`text-lg sm:text-xl lg:text-2xl font-bold ${
                    selectedDayIndex === index ? "text-black" : "text-gray-400"
                  }`}>
                    {day.day}
                  </span>
                </button>
              ))}
            </div>

            <button 
              onClick={handleNextWeek}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Current Date Display */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h3 className="text-lg font-bold">{format(selectedDate, "EEEE, MMMM d, yyyy")}</h3>
            <button 
              onClick={handleTodayClick}
              className="text-sm underline hover:no-underline"
            >
              Today
            </button>
          </div>

          {/* Class Schedule List */}
          <div className="space-y-0">
            {currentClasses.map((classSession, index) => (
              <div 
                key={classSession.id}
                className={`flex items-center justify-between py-6 ${
                  index !== currentClasses.length - 1 ? "border-b border-gray-200" : ""
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
