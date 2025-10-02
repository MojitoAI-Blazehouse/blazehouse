import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/pricing-hero.jpg";

const BuyClasses = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "first-timer", label: "First Timer Exclusive Offer" },
    { id: "packages", label: "Class Packages" },
    { id: "memberships", label: "Memberships" },
    { id: "gift-cards", label: "Class Package Digital Gift Cards" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId);
    if (sectionId === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <img
          src={heroImage}
          alt="BlazeHouse Pricing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <p className="text-white text-sm font-bold tracking-wider mb-4">
            LOS ANGELES, CALIFORNIA
          </p>
          <h1 className="text-white text-7xl md:text-8xl font-black tracking-tight">
            PRICING
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <p className="text-sm text-muted-foreground mb-2">Purchase Classes for</p>
            <h2 className="text-3xl font-black mb-8">Los Angeles Downtown</h2>
            
            <nav className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    activeCategory === category.id
                      ? "border-l-4 border-foreground font-bold bg-muted"
                      : "border-l-4 border-transparent hover:bg-muted/50"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main>
            {/* First Timer Exclusive Offer */}
            <section id="first-timer" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-black mb-8">First Timer Exclusive Offer</h2>
              
              <div className="bg-card border border-border overflow-hidden max-w-2xl">
                <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                  FIRST TIMER EXCLUSIVE OFFER
                </div>
                <div className="p-8">
                  <p className="text-sm text-muted-foreground mb-4">
                    $45 First Timer 3 Pack + FREE Fuel Item - website
                  </p>
                  <div className="flex items-baseline gap-8 mb-4">
                    <div className="flex items-baseline">
                      <span className="text-6xl font-black">$45</span>
                      <span className="text-2xl text-muted-foreground">.00</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-6xl font-black">3</span>
                      <span className="text-lg text-muted-foreground ml-2">classes</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    3 CLASSES FOR ONLY $45! Get a complimentary Fuel Grab & Go item on your 3rd class. 
                    First Timer 3 Pack classes are valid for 30 days from purchase date.
                  </p>
                </div>
              </div>
            </section>

            {/* Class Packages */}
            <section id="packages" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-black mb-8">Class Packages</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1 Class */}
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                    LOS ANGELES SINGLE CLASS
                  </div>
                  <div className="p-6">
                    <p className="font-bold mb-4">Los Angeles Downtown - 1 Class</p>
                    <div className="flex items-baseline gap-6 mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">$29</span>
                        <span className="text-xl text-muted-foreground">.00</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">1</span>
                        <span className="text-sm text-muted-foreground ml-2">class</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles Downtown credits are also valid in the following regions: Santa Monica, 
                      Beverly Hills, Pasadena, Long Beach, Burbank...
                    </p>
                  </div>
                </div>

                {/* 5 Classes */}
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                    LOS ANGELES CLASS PACKAGE
                  </div>
                  <div className="p-6">
                    <p className="font-bold mb-4">Los Angeles Downtown - 5 Classes</p>
                    <div className="flex items-baseline gap-6 mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">$140</span>
                        <span className="text-xl text-muted-foreground">.00</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">5</span>
                        <span className="text-sm text-muted-foreground ml-2">classes</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles Downtown credits are also valid in the following regions: Santa Monica, 
                      Beverly Hills, Pasadena, Long Beach, Burbank...
                    </p>
                  </div>
                </div>

                {/* 10 Classes */}
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                    LOS ANGELES CLASS PACKAGE
                  </div>
                  <div className="p-6">
                    <p className="font-bold mb-4">Los Angeles Downtown - 10 Classes</p>
                    <div className="flex items-baseline gap-6 mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">$270</span>
                        <span className="text-xl text-muted-foreground">.00</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">10</span>
                        <span className="text-sm text-muted-foreground ml-2">classes</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles Downtown credits are also valid in the following regions: Santa Monica, 
                      Beverly Hills, Pasadena, Long Beach, Burbank...
                    </p>
                  </div>
                </div>

                {/* 20 Classes */}
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                    LOS ANGELES CLASS PACKAGE
                  </div>
                  <div className="p-6">
                    <p className="font-bold mb-4">Los Angeles Downtown - 20 Classes</p>
                    <div className="flex items-baseline gap-6 mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">$520</span>
                        <span className="text-xl text-muted-foreground">.00</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">20</span>
                        <span className="text-sm text-muted-foreground ml-2">classes</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles Downtown credits are also valid in the following regions: Santa Monica, 
                      Beverly Hills, Pasadena, Long Beach, Burbank...
                    </p>
                  </div>
                </div>

                {/* 50 Classes */}
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                    LOS ANGELES CLASS PACKAGE
                  </div>
                  <div className="p-6">
                    <p className="font-bold mb-4">Los Angeles Downtown - 50 Classes</p>
                    <div className="flex items-baseline gap-6 mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">$1,225</span>
                        <span className="text-xl text-muted-foreground">.00</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">50</span>
                        <span className="text-sm text-muted-foreground ml-2">classes</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles Downtown credits are also valid in the following regions: Santa Monica, 
                      Beverly Hills, Pasadena, Long Beach, Burbank...
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Memberships */}
            <section id="memberships" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-black mb-8">Memberships</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 8 Classes/Month */}
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                    LOS ANGELES MEMBERSHIP
                  </div>
                  <div className="p-6">
                    <p className="font-bold mb-4">Los Angeles Downtown 8 Classes/Month Recurring Membership</p>
                    <div className="flex items-baseline gap-6 mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">$170</span>
                        <span className="text-xl text-muted-foreground">.00</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">8</span>
                        <span className="text-sm text-muted-foreground ml-2">per<br/>month</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles memberships are also valid in the following regions: Santa Monica, 
                      Beverly Hills, Pasadena, Long Beach, Burbank...
                    </p>
                  </div>
                </div>

                {/* 12 Classes/Month */}
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                    LOS ANGELES MEMBERSHIP
                  </div>
                  <div className="p-6">
                    <p className="font-bold mb-4">Los Angeles Downtown 12 Classes/Month Recurring Membership</p>
                    <div className="flex items-baseline gap-6 mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">$235</span>
                        <span className="text-xl text-muted-foreground">.00</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">12</span>
                        <span className="text-sm text-muted-foreground ml-2">per<br/>month</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles memberships are also valid in the following regions: Santa Monica, 
                      Beverly Hills, Pasadena, Long Beach, Burbank...
                    </p>
                  </div>
                </div>

                {/* 16 Classes/Month */}
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                    LOS ANGELES MEMBERSHIP
                  </div>
                  <div className="p-6">
                    <p className="font-bold mb-4">Los Angeles Downtown 16 Classes/Month Recurring Membership</p>
                    <div className="flex items-baseline gap-6 mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">$265</span>
                        <span className="text-xl text-muted-foreground">.00</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">16</span>
                        <span className="text-sm text-muted-foreground ml-2">per<br/>month</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles memberships are also valid in the following regions: Santa Monica, 
                      Beverly Hills, Pasadena, Long Beach, Burbank...
                    </p>
                  </div>
                </div>

                {/* 30 Classes/Month */}
                <div className="bg-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-6 py-3 font-bold text-sm tracking-wider">
                    LOS ANGELES MEMBERSHIP
                  </div>
                  <div className="p-6">
                    <p className="font-bold mb-4">Los Angeles Downtown 30 Classes/Month Recurring Membership</p>
                    <div className="flex items-baseline gap-6 mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">$335</span>
                        <span className="text-xl text-muted-foreground">.00</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-black">30</span>
                        <span className="text-sm text-muted-foreground ml-2">for<br/>30 days</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Los Angeles memberships are also valid in the following regions: Santa Monica, 
                      Beverly Hills, Pasadena, Long Beach, Burbank...
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Text */}
            <section className="max-w-4xl mx-auto text-center space-y-6 py-12">
              <p className="text-sm leading-relaxed">
                <strong>Class Packages</strong> are good for one year from the date of purchase, with the exception 
                of the First Timer offer (which is specified in the package). Class packages can be used to bring guests. 
                Please refer to the details of the specific package to see which regions you will also have access to.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Memberships</strong> will be charged immediately for the first month of the membership and will 
                continue to be billed every 30 days. The maximum number of classes you can take in a cycle is reflected 
                by the membership chosen – 8/month, 12/month, 16/month, or 30/month. A $20 no show fee (plus class credit 
                lossage) applies if you do not cancel a reserved spot prior to 12 hours before your class time. Please refer 
                to the details of the specific membership to see which regions your membership will also have access to.
              </p>
              <p className="text-sm">
                For more information see our <Link to="#" className="underline hover:text-primary">FAQ</Link>.
              </p>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyClasses;
