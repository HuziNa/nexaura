"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Hero from "@/components/home/hero";
import AboutUs from "@/components/about-us";
import Services from "@/components/services";
import Team from "@/components/team";
import Projects from "@/components/projects";
import Reviews from "@/components/reviews";
import Contact from "@/components/contact";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "system");
    root.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 120;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  };

  const navItems = [
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
  ];

  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl floating-element"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl floating-element"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent/8 rounded-full blur-xl floating-element"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(0, 212, 255, 0.08), transparent 60%), #000000",
          }}
        />
      </div>

      {/* Desktop Header */}
      <header
        className={`fixed top-4 z-[99999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm neon-border shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-4xl px-2" : "max-w-6xl px-4"
        } py-2 left-1/2 transform -translate-x-1/2`}
      >
        <a className={`z-50 flex items-center justify-center gap-2`} href="#">
          <div className="text-primary font-bold text-2xl neon-text">NEXURA</div>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="relative px-4 py-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (element) {
                  const headerOffset = 120;
                  const elementPosition =
                    element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              <span className="relative z-20">{item.name}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                const headerOffset = 120;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-r from-primary to-accent text-black neon-glow px-4 py-2 text-sm"
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-4 z-[99999] left-4 right-4 flex flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm neon-border shadow-lg md:hidden px-4 py-3">
        <a className="flex items-center justify-center gap-2" href="#">
          <div className="text-primary font-bold text-xl neon-text">NEXURA</div>
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 neon-border transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[99998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md neon-border rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-background/50"
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">
                <button
                  onClick={() => handleMobileNavClick("contact")}
                  className="px-4 py-3 text-lg font-bold text-center bg-gradient-to-r from-primary to-accent text-black rounded-lg neon-glow hover:-translate-y-0.5 transition-all duration-200"
                >
                  Contact Us
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Nexura GPT Button */}
      <div id="nexura-gpt-button-container" className="flex justify-center mt-8">
        <button
          id="ask-nexura-gpt"
          className="px-8 py-3 rounded-full bg-cyan-400 text-black font-bold text-lg shadow-neon hover:shadow-neon-lg transition-all duration-300 flex items-center gap-2"
        >
          ✨ ASK NEXURA GPT
        </button>
      </div>

      {/* Nexura GPT Popup */}
      <div
        id="nexura-gpt-popup"
        className="fixed bottom-6 right-6 w-96 h-[500px] bg-black border-2 border-cyan-400 rounded-xl shadow-neon hidden flex-col"
      >
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold p-3 rounded-t-xl flex justify-between items-center">
          🌐 NEXURA GPT
          <button
            id="close-nexura-gpt"
            className="text-black font-bold hover:text-white"
          >
            ✖
          </button>
        </div>
        <div
          id="nexura-gpt-messages"
          className="flex-1 p-3 overflow-y-auto text-white"
        >
          Hello! How can I help you?
        </div>
        <div className="flex p-3 gap-2">
          <input
            id="nexura-gpt-input"
            type="text"
            placeholder="Type your question..."
            className="flex-1 p-2 rounded-lg bg-gray-900 text-white outline-none"
          />
          <button
            id="nexura-gpt-send"
            className="bg-cyan-400 px-4 py-2 rounded-lg font-bold text-black"
          >
            Send
          </button>
        </div>
      </div>

      {/* About, Services, Team Sections */}
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="team">
        <Team />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <Link
          href="https://wa.me/13862910027?text=Hello%20I%20want%20to%20know%20more%20about%20your%20marketplace%20services!"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 animate-pulse hover:animate-none"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
        </Link>
      </div>

      {/* GPT Button Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const btn = document.getElementById('ask-nexura-gpt');
            const popup = document.getElementById('nexura-gpt-popup');
            const closeBtn = document.getElementById('close-nexura-gpt');
            btn.addEventListener('click', () => popup.classList.remove('hidden'));
            closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
          `,
        }}
      />
    </div>
  );
}
