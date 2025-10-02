import redRoom from "@/assets/red-room.jpg";

const RedRoomSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
            GET A{" "}
            <span className="text-outline">
              ((RED))
            </span>{" "}
            ROOM
          </h2>
          <p className="text-lg flex items-center justify-center gap-2">
            <span className="text-2xl">🔊</span>
            The Global Expansion is real.{" "}
            <a href="#" className="underline hover:text-primary transition-colors font-bold">
              Keep Up
            </a>
          </p>
        </div>

        {/* Image with Text Overlay */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={redRoom}
              alt="Red Room Training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/40" />
            
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div>
                <p className="text-2xl md:text-4xl font-bold leading-relaxed">
                  you'll choose
                  <br />
                  to start on the bike or the floor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedRoomSection;
