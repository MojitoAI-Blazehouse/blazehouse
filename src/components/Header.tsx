import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "THE WORKOUT",
      hasDropdown: true,
      items: ["Class Types", "Instructors", "Music"]
    },
    {
      label: "OUR STUDIOS",
      hasDropdown: true,
      items: ["Find a Studio", "Studio Amenities"]
    },
    {
      label: "FIRST TIMERS",
      hasDropdown: false
    }
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-background text-foreground text-center py-2 text-sm border-b border-border">
        The Best (Digital) Workout in the World{" "}
        <a href="#" className="underline hover:text-primary transition-colors">
          Learn More
        </a>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-12">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="BlazeHouse" className="h-12 w-auto" />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-sm font-bold tracking-wider hover:text-primary transition-colors">
                      {item.label}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 bg-card border border-border min-w-[200px] shadow-xl">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-6 py-3 hover:bg-muted transition-colors text-sm"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#" className="text-sm font-bold tracking-wider hover:text-primary transition-colors">
                MY ACCOUNT
              </a>
              <Link to="/book-now" className="border-2 border-foreground px-5 py-2 font-bold text-sm tracking-wider hover:bg-foreground hover:text-background transition-all inline-flex items-center justify-center">
                BOOK NOW
              </Link>
              <button className="bg-foreground text-background px-5 py-2 font-bold text-sm tracking-wider hover:bg-primary hover:border-primary border-2 border-foreground transition-all">
                BUY CLASSES
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button className="w-full text-left text-sm font-bold tracking-wider">
                    {item.label}
                  </button>
                  {item.hasDropdown && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {item.items?.map((subItem) => (
                        <a key={subItem} href="#" className="text-sm text-muted-foreground">
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/book-now" className="border-2 border-foreground px-6 py-2 font-bold text-sm tracking-wider text-center">
                  BOOK NOW
                </Link>
                <button className="bg-foreground text-background px-6 py-2 font-bold text-sm tracking-wider">
                  BUY CLASSES
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
