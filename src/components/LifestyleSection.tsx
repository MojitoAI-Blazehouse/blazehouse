import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import { ChevronRight } from "lucide-react";

const LifestyleSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-sm font-bold tracking-widest mb-4">
              IT'S MORE THAN A WORKOUT
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-none">
              IT'S A LIFESTYLE
            </h2>
            <p className="text-lg text-foreground/80 max-w-md">
              Whether you're At-Home, Outdoors, or in a Red Room-- we've got you covered.
            </p>
          </div>

          {/* Right Content - Image Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="relative group overflow-hidden">
              <div className="relative h-64">
                <img
                  src={lifestyle1}
                  alt="Shop BlazeHouse Gear"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <button className="flex items-center gap-2 text-lg font-bold hover:text-primary transition-colors group">
                    SHOP NOW
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group overflow-hidden">
              <div className="relative h-64">
                <img
                  src={lifestyle2}
                  alt="Build Your Red Room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <button className="flex items-center gap-2 text-lg font-bold hover:text-primary transition-colors group">
                    BUILD AN AT-HOME RED ROOM
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
