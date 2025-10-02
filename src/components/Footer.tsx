import { Instagram, Facebook, ChevronDown, ChevronUp } from "lucide-react";
import { Smartphone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Newsletter Section */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <input type="checkbox" id="newsletter" className="w-5 h-5" />
              <label htmlFor="newsletter" className="text-sm">
                I have read and agree to the{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="flex-1 max-w-xs">
              <select className="w-full bg-primary border-b-2 border-foreground py-2 text-sm font-bold">
                <option>Your Region*</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia Pacific</option>
              </select>
            </div>

            <div className="flex-1 max-w-md">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full bg-transparent border-b-2 border-foreground py-2 placeholder:text-foreground/60 text-sm"
              />
            </div>

            <button className="bg-foreground text-background px-10 py-3 font-bold text-sm tracking-wider hover:bg-background hover:text-foreground border-2 border-foreground transition-all">
              SUBMIT
            </button>
          </div>
          <p className="text-center lg:text-left text-xs mt-4 font-bold tracking-widest">
            NEWSLETTER FORM SIGNUP
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Info */}
            <div>
              <h3 className="font-bold text-sm tracking-wider mb-4">INFO</h3>
              <div className="flex gap-3 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-sm tracking-wider mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-sm mt-8">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Franchise
                  </a>
                </li>
              </ul>
            </div>

            {/* App */}
            <div>
              <h3 className="font-bold text-sm tracking-wider mb-4">BLAZEHOUSE'S APPS</h3>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors font-bold"
              >
                <Smartphone className="w-4 h-4" />
                Explore Apps
              </a>
              <div className="mt-6">
                <img src={logo} alt="BlazeHouse" className="h-16 w-auto" />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="mt-12 max-w-7xl mx-auto">
            <h3 className="font-bold text-sm tracking-wider mb-4">PREFERENCES</h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md">
              <div className="relative">
                <select className="w-full bg-transparent border border-border py-3 px-4 pr-10 text-sm appearance-none">
                  <option>🇺🇸 USA</option>
                  <option>🇬🇧 UK</option>
                  <option>🇨🇦 Canada</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="w-full bg-transparent border border-border py-3 px-4 pr-10 text-sm appearance-none">
                  <option>English</option>
                  <option>Español</option>
                  <option>Français</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto text-xs text-muted-foreground">
            <p>© BlazeHouse 2025</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Accessibility Statement
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <ChevronUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
