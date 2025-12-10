import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Users,
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
} from "lucide-react";

const LbcWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Color Palette extraction
  const colors = {
    beige: "#F4F1EA", // Main light background
    dark: "#121212", // Main dark background
    orange: "#EFA045", // Highlight text
    red: "#D86B60", // Headers
    blueGrey: "#7A99AC", // Accents
    textDark: "#2D2D2D",
    blueLink: "#4A90E2",
  };

  // Reusable Components
  const Section = ({ className, children, id }) => (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );

  const ThreadStrip = () => (
    <div className="w-full">
      <img
        src="/Assets/thread_image.png"
        alt="Colorful thread decorative divider"
        className="w-full h-auto max-h-5 object-cover block"
      />
    </div>
  );

  return (
    <div
      className="font-sans antialiased text-gray-900"
      style={{ backgroundColor: colors.beige }}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="flex items-center justify-center h-full">
            <div className="w-[150px] h-22 flex items-center justify-center">
              <img
                src="/Assets/LBC Primary.svg"
                className="object-contain h-full"
                alt="LBC Logo"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-sm tracking-wide">
            {["About", "The Problem", "Community", "Stories", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-[#D86B60] transition-colors"
                >
                  {item.toUpperCase()}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#F4F1EA] border-b border-gray-200 py-4 shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              {["About", "The Problem", "Community", "Stories", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-bold text-lg"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section (Image 2) */}
      <header
        id="about"
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span style={{ color: colors.orange }}>
                  Entrepreneurs are the{" "}
                </span>
                <span style={{ color: colors.blueGrey }}>threads</span>
                <span style={{ color: colors.orange }}>
                  {" "}
                  that hold the fabric of a town together
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                We believe that local business owners are the artisans of our
                community economy. Together, we weave a stronger future.
              </p>
              <button className="px-8 py-3 bg-black text-white font-bold tracking-wide hover:bg-[#D86B60] transition-colors duration-300">
                JOIN THE COLLABORATIVE
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative shadow-xl">
                {/* Placeholder for Man in Workshop Image */}
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Man working in industrial workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <ThreadStrip />

      {/* The Problem (Images 3 & 4) - Dark Mode */}
      <Section id="the-problem" className="bg-[#121212] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Leadership Can
                <br />
                Be Isolating
              </h2>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">
                Do You Feel The Weight of Responsibility?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Building something meaningful often feels lonely. Entrepreneurs
                face challenges such as lack of time, tools, and support. This{" "}
                <span style={{ color: "#4A90E2" }}>
                  isolation can make forward motion feel harder than it should
                </span>
                , emphasizing the need for community and connection in business.
              </p>
            </div>
            <div className="relative">
              {/* Dark Building Window Image */}
              <div className="aspect-square bg-gray-900 relative">
                <img
                  src="https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Lone lit window in dark building"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-[#F4F1EA]">
                Leadership
                <br />
                Isolation
                <br />
                Has a Cost
              </h2>
            </div>
            <div className="space-y-12">
              {[
                {
                  title: "BURNOUT",
                  desc: "Another year spent in isolation leads to increased stress and burnout, leaving entrepreneurs feeling drained and overwhelmed.",
                },
                {
                  title: "PRESSURE",
                  desc: "Isolation amplifies the pressure of leadership. With no space to process ideas, validate direction, or share responsibility, entrepreneurs carry everything themselves.",
                },
                {
                  title: "STAGNATION",
                  desc: "Without proactive change, many entrepreneurs find themselves stuck, struggling to navigate challenges alone, ultimately missing opportunities for growth.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div
                    className="w-4 h-4 mt-2 bg-orange-500 shrink-0"
                    style={{ backgroundColor: colors.orange }}
                  ></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {item.desc.split("entrepreneurs").map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-[#4A90E2]">
                              entrepreneurs
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <ThreadStrip />

      {/* Intro & Quote (Images 5 & 6) */}
      <Section id="mission" className="bg-[#F4F1EA]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <div className="lg:w-1/2">
              <h2
                className="text-5xl md:text-6xl font-bold leading-tight mb-4"
                style={{ color: colors.red }}
              >
                Introducing The
                <br />
                Local Business
                <br />
                Collaborative
              </h2>
              <h3 className="font-bold tracking-widest uppercase mb-6 text-black">
                A Community for Entrepreneurs
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                The LBC is a nurturing environment where entrepreneurs unite,
                share experiences, and pursue growth together,{" "}
                <span className="font-bold">
                  transforming challenges into opportunities for success.
                </span>
              </p>
            </div>
            <div className="lg:w-1/2">
              {/* Abstract Fabric Image */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Abstract woven texture"
                  className="w-full h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem]"
                />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center py-12 border-t-2 border-gray-200">
            <p
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: colors.red }}
            >
              “We help entrepreneurs and business leaders break through what’s
              holding them back—by surrounding them with what moves them
              forward.”
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-12 h-12 border-2 border-gray-400 p-1 opacity-50">
                <div className="w-full h-full bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Methodology (Image 7) */}
      <div
        className="relative py-20"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
          backgroundColor: "#f0ede6",
        }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-bold mb-16 text-center md:text-left"
            style={{ color: colors.red }}
          >
            A Clear Path to
            <br />
            Growth and Success
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "EDUCATION",
                text: "Empower your business with access to workshops: from financial fluency to marketing mastery, access programs built around what you want to learn.",
              },
              {
                icon: Users,
                title: "CONNECTION",
                text: "Collaboration is our greatest currency. Work side-by-side with other entrepreneurs for peer-to-peer learning and mentorship.",
              },
              {
                icon: TrendingUp,
                title: "RECOGNITION",
                text: "Celebrate local success and elevate your brand. Through spotlights, showcases, and shared storytelling, ensure your wins don’t go unnoticed.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-orange-300 p-8 flex flex-col items-center text-center bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#D86B60] rounded flex items-center justify-center text-white mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ThreadStrip />

      {/* Community Grid (Image 10) */}
      <Section id="community" className="bg-[#F4F1EA]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2
                className="text-5xl font-bold leading-tight sticky top-32"
                style={{ color: colors.orange }}
              >
                Why Be Part
                <br />
                of the LBC
                <br />
                Community?
              </h2>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "WORKSHOPS",
                  desc: "Engaging sessions to enhance your skills.",
                  img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "PEER CIRCLES",
                  desc: "Connect with fellow entrepreneurs for support.",
                  img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "STRATEGIC SESSIONS",
                  desc: "Tailored guidance from experienced mentors.",
                  img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "RECOGNITION",
                  desc: "Celebrate your achievements within the community.",
                  img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                },
              ].map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="aspect-[4/3] mb-4 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Transformation (Image 8) */}
      <div className="bg-[#F4F1EA] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold mb-12">
                <span style={{ color: colors.orange }}>
                  Who You
                  <br />
                  Become
                </span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-4 h-4 mt-2 bg-orange-400 shrink-0"></div>
                  <div>
                    <h4 className="font-bold uppercase mb-2">Connected</h4>
                    <p className="text-gray-700">
                      Inside the LBC, you'll transition from feeling isolated to
                      becoming part of a supportive network, where collaboration
                      and community drive your growth and success.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-4 h-4 mt-2 bg-orange-400 shrink-0"></div>
                  <div>
                    <h4 className="font-bold uppercase mb-2">Empowered</h4>
                    <p className="text-gray-700">
                      Experience a shift from overwhelmed to empowered, as the
                      LBC provides the tools and resources needed to navigate
                      challenges and move forward with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Happy diverse group working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThreadStrip />

      {/* Stories / Testimonial (Image 9) */}
      <Section id="stories" className="bg-[#F4F1EA]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="aspect-[3/4] relative">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Local business owners"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span style={{ color: colors.orange }}>
                  Inspiring Stories from
                  <br />
                  Our Local Leaders
                </span>
              </h2>

              <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
                <p>
                  "Entering a new community as a small business leader with a
                  new concept can be a challenge! You look at all the 'what
                  if's' and 'who's who' in the demographic... and{" "}
                  <span className="font-bold">
                    that weight alone can be crippling to any entrepreneur.
                  </span>
                  "
                </p>
                <p>
                  "Before entering our new business endeavor in Frederick, CO,
                  we were welcomed and greeted at the local farmers market by
                  some of the kindest and already established small town
                  business owners... overnight became a family of force."
                </p>
                <p>
                  "Opening a business is never as easy as one would think and
                  through the connection, inclusion and transparency of those
                  new friendships... we were able to build a network of trust.{" "}
                  <span className="font-bold">
                    Never doubt the strength of the community around you
                  </span>
                  ."
                </p>
              </div>

              <div className="mt-8 font-bold text-sm uppercase tracking-wide">
                - Isaac Olson & Shane Stinn
                <br />
                <span className="text-gray-600 font-normal normal-case">
                  Owners of 2025 Frederick Small Business of the Year, MECO
                  Coffee Collective
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer id="contact" className="bg-white pt-16">
        <div className="container mx-auto px-6 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-xs">
              <div className="w-16 h-16 border-2 border-black flex flex-wrap p-1 mb-6">
                <span className="w-1/2 h-1/2 border-r border-b border-black rounded-tl-lg block"></span>
                <span className="w-1/2 h-1/2 border-b border-black block"></span>
                <span className="w-1/2 h-1/2 border-r border-black block"></span>
                <span className="w-1/2 h-1/2 bg-black rounded-br-lg block"></span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                We help entrepreneurs weave their unique threads into the fabric
                of our community.
              </p>
            </div>

            <div>
              <h4 className="font-bold uppercase mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#about" className="hover:text-orange-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-orange-500">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#stories" className="hover:text-orange-500">
                    Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> hello@localbusinesscollaborative.com
                </li>
                <li className="flex items-center gap-2">Frederick, CO</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
            © 2025 Local Business Collaborative. All rights reserved.
          </div>
        </div>
        <ThreadStrip />
      </footer>
    </div>
  );
};

export default LbcWebsite;
