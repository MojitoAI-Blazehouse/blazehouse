import { Link } from "react-router-dom";
import inStudio from "@/assets/in-studio.jpg";
import appWorkout from "@/assets/app-workout.jpg";
import { Dumbbell, Smartphone } from "lucide-react";

const TwoWaysSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest mb-4">
            THE BEST WORKOUT IN THE WORLD
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
            TWO WAYS TO RED ROOM
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* In-Studio Card */}
          <div className="relative group overflow-hidden">
            <div className="relative h-[500px]">
              <img
                src={inStudio}
                alt="In-Studio Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center mb-4">
                  <Dumbbell className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-black mb-2">IN-STUDIO</h3>
                <p className="text-lg mb-6">The Original HIIT Experience</p>
                <Link to="/book-now">
                  <button className="bg-foreground text-background px-8 py-3 font-bold text-sm tracking-wider hover:bg-primary transition-all">
                    BOOK NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* App Card */}
          <div className="relative group overflow-hidden">
            <div className="relative h-[500px]">
              <img
                src={appWorkout}
                alt="BlazeHouse App"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-black mb-2">BLAZEHOUSE X</h3>
                <p className="text-lg mb-6">Your Favorite Workouts, Anywhere</p>
                <button className="bg-foreground text-background px-8 py-3 font-bold text-sm tracking-wider hover:bg-primary transition-all">
                  DOWNLOAD THE APP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
