import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const LbcWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const stories = [
    {
      image: "/Assets/Mecco.png",
      alignment: "object-top",
      quotes: [
        "Entering a new community as a small business leader with a new concept can be a challenge! You look at all the 'what if's' and 'who's who' in the demographic... and that weight alone can be crippling to any entrepreneur.",
        "Before entering our new business endeavor in Frederick, CO, we were welcomed and greeted at the local farmers market by some of the kindest and already established small town business owners... overnight became a family of force.",
        "Opening a business is never as easy as one would think and through the connection, inclusion and transparency of those new friendships... we were able to build a network of trust. Never doubt the strength of the community around you.",
      ],
      author: "Isaac Olson & Shane Stinn",
      role: "Owners of 2025 Frederick Small Business of the Year, MECO Coffee Collective",
    },
    {
      image: "/Assets/DMC-1-16.jpg",
      alignment: "object-center",
      quotes: [
        "It’s been really helpful, too find the support of a community full of fellow business owners. There’s so much to be learned from other people’s experiences and getting to hear from people willing to share what they would do differently if they could to help other people not learn the hard way.",
        "That sharing also helps to shorten the learning curve quite a bit.",
        "There is also a vast amount of resources when it comes to working within a community like-minded people that are willing to share.",
        "When you’re a business owner going at it alone or even just with your own very small team, it can quickly feel like you’re on your own or your struggles are insurmountable. And that’s one of the many benefits of being surrounded by a community of fellow business owners. They’ve been where you’ve been or they are where you are and so you feel less alone and more like you can take on what the future holds.",
      ],
      author: "Angel Hepp",
      role: "Founder, Josephine & Grace",
    },
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex(
      (prev) => (prev - 1 + stories.length) % stories.length
    );
  };

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Color Palette extraction
  const colors = {
    beige: "#F1EDE6", // Main light background
    dark: "#121212", // Main dark background
    orange: "#F5A623", // Highlight text
    red: "#D47558", // Headers
    brightRed: "#E05757", // New accent red
    blueGrey: "#A3B8B0", // Accents
    textDark: "#283655",
    blueLink: "#3C66F4",
  };

  // Reusable Components
  const Section = ({
    className,
    children,
    id,
  }: {
    className?: string;
    children: React.ReactNode;
    id?: string;
  }) => (
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

  const ContactModal = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission logic here
      alert("Thank you for contacting us! We will get back to you shortly.");
      onClose();
    };

    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#121212]/50 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden animate-fade-in">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-2 text-[#F5A623]">
              Let's collaborate! Contact us today.
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Fill out the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F5A623] focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F5A623] focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Reason for Contacting
                </label>
                <textarea
                  id="reason"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F5A623] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#121212] text-white font-bold py-3 rounded-md hover:bg-[#F5A623] transition-colors duration-300 mt-2"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const methodologyItems: {
    image?: string;
    icon?: any;
    title: string;
    text: string;
  }[] = [
    {
      image: "/Assets/Education_button.png",
      title: "EDUCATION",
      text: "Empower your business with access to workshops: from financial fluency to marketing mastery, access programs built around what you want to learn, designed and led by community experts.",
    },
    {
      image: "/Assets/Community_button.png",
      title: "CONNECTION",
      text: "Collaboration is our greatest currency. Work side-by-side with other entrepreneurs for peer-to-peer learning and mentorship. Enggage in events that create real opportunities for growth and partnership",
    },
    {
      image: "/Assets/Recong_button.png",
      title: "RECOGNITION",
      text: "Celebrate local success and elevate your brand. Through spotlights, showcases, and shared storytelling, ensure your wins don’t go unnoticed - because your success fuels our entire community.",
    },
  ];

  return (
    <div
      className="font-sans antialiased text-[#121212]"
      style={{ backgroundColor: colors.beige }}
    >
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 shadow-md py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="flex items-center justify-center h-full">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-[200px] h-24 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/Assets/LBC Primary.svg"
                className="object-contain h-full"
                alt="LBC Logo"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-sm tracking-wide">
            {["About", "The Problem", "Community", "Stories", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={
                    item === "Contact"
                      ? "#"
                      : `#${item.toLowerCase().replace(" ", "-")}`
                  }
                  onClick={(e) => {
                    if (item === "Contact") {
                      e.preventDefault();
                      setIsContactOpen(true);
                    }
                  }}
                  className="hover:text-[#F5A623] transition-colors"
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
                    href={
                      item === "Contact"
                        ? "#"
                        : `#${item.toLowerCase().replace(" ", "-")}`
                    }
                    onClick={(e) => {
                      if (item === "Contact") {
                        e.preventDefault();
                        setIsContactOpen(true);
                      }
                      setIsMenuOpen(false);
                    }}
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

      {/* New Top Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden flex items-center justify-center bg-[#121212]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        >
          <source
            src="/Assets/7792548-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <img
          src="/Assets/Website cover photo.png"
          alt="LBC Threads with Logo"
          className={`relative z-10 max-w-[80%] md:max-w-full max-h-[80%] md:max-h-full object-contain transition-all duration-[2000ms] ease-out ${
            heroLoaded
              ? "opacity-90 scale-125 md:scale-150 blur-0"
              : "opacity-0 scale-110 blur-sm"
          }`}
        />
      </div>

      {/* Hero Section (Image 2) */}
      <header
        id="about"
        className="relative min-h-[600px] flex items-center overflow-hidden py-16 md:py-0"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
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
              <p className="text-xl text-gray-700 mb-8 max-w-lg"></p>
              <button className="px-8 py-3 bg-[#121212] text-white font-bold tracking-wide hover:bg-[#F5A623] transition-colors duration-300">
                JOIN THE COLLABORATIVE
              </button>
            </div>
          </div>
        </div>

        {/* Full height image on the right (1/3 width on desktop) */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Man working in industrial workshop"
            className="w-full h-full object-cover"
          />
        </div>
      </header>
      <ThreadStrip />

      {/* The Problem (Images 3 & 4) - Dark Mode */}
      <Section id="the-problem" className="bg-[#121212] text-white pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
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
                <span style={{ color: "#3C66F4" }}>
                  isolation can make forward motion feel harder than it should
                </span>
                , emphasizing the need for community and connection in business.
              </p>
            </div>
            <div className="relative">
              {/* Dark Building Window Image */}
              <div className="aspect-square bg-[#121212] relative">
                <img
                  src="/Assets/BuildingLight.png"
                  alt="Lone lit window in dark building"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-[#121212] text-white pt-12">
        <div className="container mx-auto px-6">
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
                  content: (
                    <>
                      Another year spent in isolation leads to increased stress
                      and burnout, leaving{" "}
                      <span className="text-[#3C66F4]">
                        entrepreneurs feeling drained and overwhelmed
                      </span>
                      . This cycle can stifle creativity and dminish passion for
                      their work
                    </>
                  ),
                },
                {
                  title: "PRESSURE",
                  content: (
                    <>
                      Isolation amplifies the pressure of leadership. With no
                      space to process ideas, validate direction, or share
                      responsibility,{" "}
                      <span className="text-[#3C66F4]">
                        entrepreneurs carry everything themselves leading to
                        heightened stress, second-guessing,
                      </span>{" "}
                      and a relentless sense of being on wth no relief.
                    </>
                  ),
                },
                {
                  title: "STAGNATION",
                  content: (
                    <>
                      Without proactive change, many entrepreneurs find
                      themselves stuck struggling to naviate challenges alone,
                      utlimately{" "}
                      <span className="text-[#3C66F4]">
                        missing opportinities for growth and innovation,
                      </span>{" "}
                      that collaboration provides.
                    </>
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div
                    className="w-4 h-4 mt-2 bg-[#F5A623] shrink-0"
                    style={{ backgroundColor: colors.orange }}
                  ></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {item.content}
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
      <section
        id="mission"
        className="relative bg-[#F4F1EA] min-h-[500px] flex items-center overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2
                className="text-5xl md:text-6xl font-bold leading-tight mb-4"
                style={{ color: colors.brightRed }}
              >
                Introducing The
                <br />
                Local Business
                <br />
                Collaborative
              </h2>
              <h3 className="font-bold tracking-widest uppercase mb-6 text-[#121212]">
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
          </div>
        </div>

        {/* Full height image on the right (1/3 width on desktop) */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full">
          <img
            src="/Assets/lbcquilt.png"
            alt="LBC Quilt"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <ThreadStrip />

      {/* Methodology (Image 7) */}
      <div className="relative py-20">
        {/* Background Image */}
        <img
          src="/Assets/Background_1.png?v=3"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative container mx-auto px-6">
          <h2
            className="text-5xl font-bold mb-16 text-center md:text-left"
            style={{ color: "#D47558" }}
          >
            A Clear Path to
            <br />
            Growth and Success
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {methodologyItems.map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-[#F5A623] p-8 flex flex-col items-center text-center bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#F5A623] rounded flex items-center justify-center text-white mb-6 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <item.icon size={32} />
                  )}
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

      {/* Transformation (Image 8) */}
      <div className="bg-[#F4F1EA]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 py-16 px-6 md:px-16 lg:pl-32">
            <h2 className="text-5xl font-bold mb-12">
              <span style={{ color: colors.orange }}>
                Who You
                <br />
                Become
              </span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-4 h-4 mt-2 bg-[#F5A623] shrink-0"></div>
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
                <div className="w-4 h-4 mt-2 bg-[#F5A623] shrink-0"></div>
                <div>
                  <h4 className="font-bold uppercase mb-2">Empowered</h4>
                  <p className="text-gray-700">
                    Experience a shift from overwhelmed to empowered, as the LBC
                    provides the tools and resources needed to navigate
                    challenges and move forward with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center lg:self-end">
            <img
              src="/Assets/whoyoubecome.png"
              alt="Happy diverse group working"
              className="w-1/2 h-auto"
            />
          </div>
        </div>
      </div>
      <ThreadStrip />

      {/* Stories / Testimonial (Image 9) */}
      <section
        id="stories"
        className="flex flex-col lg:flex-row bg-[#F4F1EA] min-h-[350px]"
      >
        {/* Image Section - 1/3 width on desktop, full on mobile */}
        <div className="lg:w-1/3 w-full relative min-h-[350px] lg:min-h-auto group">
          <img
            key={currentStoryIndex}
            src={stories[currentStoryIndex].image}
            alt={stories[currentStoryIndex].author}
            className={`absolute inset-0 w-full h-full object-cover animate-fade-in ${stories[currentStoryIndex].alignment}`}
          />
          {/* Navigation Buttons */}
          <div className="absolute bottom-0 right-0 flex z-10">
            <button
              onClick={prevStory}
              className="bg-[#121212] text-white p-4 hover:bg-[#F5A623] transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextStory}
              className="bg-[#121212] text-white p-4 hover:bg-[#F5A623] transition-colors border-l border-gray-800"
              aria-label="Next story"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Content Section - 2/3 width on desktop */}
        <div className="lg:w-2/3 w-full py-8 px-6 md:px-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span style={{ color: colors.orange }}>
              Inspiring Stories from
              <br />
              Our Local Leaders
            </span>
          </h2>

          <div className="space-y-6 text-gray-800 text-lg leading-relaxed min-h-[350px]">
            {stories[currentStoryIndex].quotes.map((quote, idx) => (
              <p key={idx} className="animate-fade-in">
                "{quote}"
              </p>
            ))}
          </div>

          <div className="mt-8 font-bold text-sm uppercase tracking-wide animate-fade-in">
            - {stories[currentStoryIndex].author}
            <br />
            <span className="text-gray-600 font-normal normal-case">
              {stories[currentStoryIndex].role}
            </span>
          </div>
        </div>
      </section>
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
                  img: "/Assets/Workshops.png",
                },
                {
                  title: "PEER CIRCLES",
                  desc: "Connect with fellow entrepreneurs for support.",
                  img: "/Assets/Peer Circles.png",
                },
                {
                  title: "STRATEGIC SESSIONS",
                  desc: "Tailored guidance from experienced mentors.",
                  img: "/Assets/Strategic Sessions.png",
                },
                {
                  title: "RECOGNITION",
                  desc: "Celebrate your achievements within the community.",
                  img: "/Assets/Recognition.png",
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
      <ThreadStrip />

      {/* Footer */}
      <footer id="contact" className="bg-white pt-16">
        <div className="container mx-auto px-6 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-xs">
              <img
                src="/Assets/LBC Primary.svg"
                alt="LBC Logo"
                className="w-24 h-24 object-contain mb-2"
              />
              <p
                className="text-sm font-bold mb-4"
                style={{ color: colors.orange }}
              >
                Together Is How We Grow
              </p>
            </div>

            <div>
              <h4 className="font-bold uppercase mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#about" className="hover:text-[#F5A623]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-[#F5A623]">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#stories" className="hover:text-[#F5A623]">
                    Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F5A623]">
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> fred@localbusinesscollaborative.com
                </li>
                <li className="flex items-center gap-2">
                  501 Walnut St. Frederick, CO 80530
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center text-xs text-gray-400 font-bold">
            © 2025 Local Business Collaborative. All rights reserved.
          </div>
        </div>
        <ThreadStrip />
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default LbcWebsite;
