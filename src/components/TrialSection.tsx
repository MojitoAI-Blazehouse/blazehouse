import trialHero from "@/assets/trial-hero.jpg";
import { Smartphone } from "lucide-react";

const TrialSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/20 via-background to-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Phone Mockup */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 h-[520px] bg-gradient-to-br from-gray-800 to-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <div className="space-y-2">
                      <div className="text-4xl font-black tracking-tighter">
                        BL<span className="text-primary">△</span>ZE
                      </div>
                      <div className="text-3xl font-black tracking-tighter">
                        HOUSE
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gradient-to-br from-gray-800 to-black rounded-b-2xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold tracking-widest mb-4">BLAZEHOUSE X</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              JOIN US FOR A<br />
              FREE 30 DAY TRIAL
            </h2>
            <div className="flex items-start gap-3 mb-8">
              <Smartphone className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-lg">
                Hundreds of On-Demand classes.{" "}
                <a href="#" className="underline hover:text-primary transition-colors font-bold">
                  Learn More
                </a>
              </p>
            </div>
            <button className="bg-foreground text-background px-10 py-4 font-bold text-sm tracking-widest hover:bg-primary transition-all">
              START FREE TRIAL
            </button>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
        <img
          src={trialHero}
          alt="Athlete Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-background/60" />
      </div>
    </section>
  );
};

export default TrialSection;
