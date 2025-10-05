import community from "@/assets/community-real.jpg";
import { MojitoVariant } from '@mojito-ai/react';

const JoinTheHustle = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={community}
              alt="BlazeHouse Community"
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <MojitoVariant id="join-the-hustle">
              <p className="text-sm font-bold tracking-widest mb-4">THE WORKOUT</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-none">
                JOIN THE HUSTLE
              </h2>
              <p className="text-lg mb-8 text-foreground/90">
                BlazeHouse isn't a fitness trend. It's science, and it works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-foreground text-background px-10 py-4 font-bold text-sm tracking-widest hover:bg-primary transition-all">
                  EXPLORE THE WORKOUT
                </button>
                <button className="border-2 border-foreground px-10 py-4 font-bold text-sm tracking-widest hover:bg-foreground hover:text-background transition-all">
                  NEW HERE?
                </button>
              </div>
            </MojitoVariant>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-foreground/80">
            BlazeHouse is the global destination to get the best workout of your life. We are dedicated to changing lives worldwide through our workouts and community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinTheHustle;
