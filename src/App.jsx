import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import F from './components/F';
import Feature from './components/Feature';
import Colors from './components/Colors';
import ScrollPhoneSection from './components/ScrollPhoneSection';

const App = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const [activeColor, setActiveColor] = useState('indigo'); // For phone color switching
  const [showFeatures, setShowFeatures] = useState(false);
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.5], [0, 1000]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  // Define color schemes
  const colorSchemes = {
    indigo: {
      gradient: "from-indigo-600 via-purple-500 to-pink-500",
      iconColor: "text-indigo-300",
      name: "Cosmic Purple"
    },
    emerald: {
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      iconColor: "text-emerald-300",
      name: "Ocean Breeze"
    },
    amber: {
      gradient: "from-amber-400 via-orange-500 to-rose-500",
      iconColor: "text-amber-300",
      name: "Sunset Gold"
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 800); // Slightly faster animation
    return () => clearTimeout(timer);
  }, []);

  // Floating feature elements with labels - adjusted for responsiveness
  const floatingFeatures = [
    {
      icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
      label: "Bio-connect",
      position: {
        sm: "top-12 right-2", // Mobile
        md: "-right-20 top-12"  // Desktop
      },
      animationDelay: 0,
      bgColor: "bg-blue-700/80"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      label: "Lightning Fast",
      position: {
        sm: "top-24 left-2", // Mobile
        md: "-left-20 top-24"  // Desktop
      },
      animationDelay: 0.5,
      bgColor: "bg-amber-400"
    },
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      label: "Smart AI",
      position: {
        sm: "bottom-32 right-2", // Mobile
        md: "-right-20 bottom-32"  // Desktop
      },
      animationDelay: 1,
      bgColor: "bg-purple-600"
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      label: "Secure",
      position: {
        sm: "bottom-16 left-2", // Mobile
        md: "-left-20 bottom-16"  // Desktop
      },
      animationDelay: 1.5,
      bgColor: "bg-green-500"
    }
  ];

  // Specifications for the spec display
  const phoneSpecs = [
    { label: "Processor", value: "F20 I6" },
    { label: "Display", value: "6.7-inch" },
    { label: "Battery", value: "5000mAh" },
    { label: "Camera", value: "50MP" }
  ];

  return (
    <>
      <div className="bg-amber-300 min-h-screen text-white font-sans relative overflow-hidden">
        {/* Enhanced background with more dynamic elements */}
        <div className="absolute w-full h-full overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/15 filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-3/4 left-1/3 w-72 h-72 rounded-full bg-blue-500/10 filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          />
        </div>

        <motion.section
          className="bg-black w-full max-w-screen h-dvh rounded-xl overflow-hidden relative"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "anticipate" }}
        >
          {/* Animated particles in background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -100 - 50],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Glowing lines across background */}
          <motion.div
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1 }}
          >
            <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="absolute left-0 right-0 top-2/3 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-2/3 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 h-full relative">
            {/* Enhanced top text with more dramatic reveal */}
            <motion.div
              className="absolute top-0 left-0 right-0 text-center pt-6 sm:pt-10 md:pt-16 px-4 sm:px-6 md:px-16 z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: contentVisible ? 1 : 0, y: contentVisible ? 0 : -20 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.h1
                className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-bl from-white bg-clip-text text-transparent leading-tight tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: contentVisible ? 0 : 20, opacity: contentVisible ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                It's not just a phone.
              </motion.h1>
              <motion.h1
                className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-bl from-white bg-clip-text text-transparent leading-tight tracking-tight"
                animate={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ backgroundSize: "200% 100%" }}
              >
                It's the air you breathe.
              </motion.h1>
            </motion.div>

            {/* Center - Enhanced Phone with color options */}
            <motion.div
              className="flex justify-center items-center w-full h-full mt-10 sm:mt-16 md:mt-20"
              style={{ y, opacity }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: contentVisible ? 1 : 0, scale: contentVisible ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Phone specifications display */}
                <motion.div
                  className="absolute -right-20 sm:-right-32 md:-right-42 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-lg p-3 sm:p-4 rounded-xl space-y-1 sm:space-y-2 text-white hidden sm:block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: showFeatures ? 1 : 0, x: showFeatures ? 0 : 20 }}
                >
                  <h3 className="font-semibold border-b border-white/20 pb-1 mb-1 sm:mb-2 text-sm sm:text-base">Tech Specs</h3>
                  {phoneSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between text-xs sm:text-sm">
                      <span className="text-white/70">{spec.label}:</span>
                      <span className="font-medium ml-2 sm:ml-4">{spec.value}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Button to toggle features */}
                <motion.button
                  className="absolute -right-8 sm:-right-10 md:-right-12 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowFeatures(!showFeatures)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.button>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  {/* Enhanced phone shadow */}
                  <motion.div
                    className="absolute bottom-0 w-40 sm:w-48 h-6 sm:h-8 bg-black/30 blur-md rounded-full mx-auto left-0 right-0 translate-y-4"
                    animate={{
                      width: ["40%", "45%", "40%"],
                      opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Enhanced Phone device - responsive sizing */}
                  <div className="bg-gradient-to-b from-zinc-800 to-black h-96 w-48 sm:h-120 sm:w-56 md:h-150 md:w-72 rounded-3xl border border-zinc-700 shadow-2xl relative overflow-hidden">
                    {/* Screen with dynamic color scheme */}
                    <div className={`absolute inset-1 rounded-2xl bg-gradient-to-tr ${colorSchemes[activeColor].gradient} overflow-hidden`}>
                      {/* Status bar */}
                      <div className="h-5 sm:h-6 px-3 sm:px-4 flex justify-between items-center text-xs text-white">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5z" />
                            <path d="M8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7z" />
                            <path d="M14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>

                      {/* Enhanced app content with animations */}
                      <div className="flex flex-col h-full pt-6 sm:pt-8 items-center">
                        <motion.div
                          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 rounded-full backdrop-blur-md mb-4 sm:mb-6 flex items-center justify-center relative overflow-hidden"
                          animate={{
                            boxShadow: ["0 0 0px rgba(255,255,255,0.3)", "0 0 20px rgba(255,255,255,0.6)", "0 0 0px rgba(255,255,255,0.3)"]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {/* Animated icon */}
                          <motion.div
                            animate={{
                              rotate: 360
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                          >
                            <div className="w-full h-full bg-gradient-to-tr from-white/5 to-white/30 rounded-full" />
                          </motion.div>

                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 ${colorSchemes[activeColor].iconColor} relative z-10`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </motion.div>

                        <motion.div
                          className="text-white text-base sm:text-lg md:text-xl font-semibold"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Experience More
                        </motion.div>
                        <div className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-6">Connected Everywhere</div>

                        {/* Animated progress bar */}
                        <motion.div
                          className="w-3/4 h-1 sm:h-1.5 bg-white/20 rounded-full mb-1 sm:mb-2 overflow-hidden"
                          initial={{ width: "50%" }}
                          animate={{ width: "75%" }}
                          transition={{ delay: 0.8, duration: 1 }}
                        >
                          <motion.div
                            className="bg-white h-full rounded-full"
                            initial={{ width: "40%" }}
                            animate={{ width: "80%" }}
                            transition={{ delay: 1, duration: 1.5 }}
                          />
                        </motion.div>

                        <div className="flex justify-between w-3/4 text-xs text-white/70">
                          <span className="text-[10px] sm:text-xs">Loading AI Experience...</span>
                          <span className="text-[10px] sm:text-xs">80%</span>
                        </div>

                        {/* App shortcuts */}
                        <div className="mt-6 sm:mt-8 grid grid-cols-4 gap-2 sm:gap-3 w-full px-3 sm:px-4">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="aspect-square rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1 + i * 0.1 }}
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                            >
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/80"></div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Bottom navigation bar */}
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                          <div className="w-full h-8 sm:h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-around px-2 sm:px-4">
                            {[...Array(4)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center"
                                whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
                              >
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 sm:mt-8 flex space-x-2">
                          <div className="h-1 w-8 sm:w-12 rounded-full bg-white/80"></div>
                          <div className="h-1 w-1.5 sm:w-2 rounded-full bg-white/30"></div>
                          <div className="h-1 w-1.5 sm:w-2 rounded-full bg-white/30"></div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced notch with "Dynamic Island" style */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black w-16 sm:w-20 h-4 sm:h-6 rounded-b-xl z-20 flex justify-center items-end pb-1">
                      <div className="w-8 sm:w-12 h-1.5 sm:h-2 bg-black rounded-full flex items-center justify-center">
                        <div className="w-3 sm:w-4 h-0.5 sm:h-1 bg-zinc-700 rounded-full" />
                        <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-zinc-600 rounded-full absolute right-3 sm:right-4" />
                      </div>
                    </div>

                    {/* Side buttons */}
                    <div className="absolute right-0 top-16 w-0.5 sm:w-1 h-6 sm:h-8 bg-zinc-700 rounded-l-md"></div>
                    <div className="absolute left-0 top-16 w-0.5 sm:w-1 h-4 sm:h-5 bg-zinc-700 rounded-r-md"></div>
                    <div className="absolute left-0 top-24 w-0.5 sm:w-1 h-4 sm:h-5 bg-zinc-700 rounded-r-md"></div>
                    <div className="absolute left-0 top-32 w-0.5 sm:w-1 h-8 sm:h-10 bg-zinc-700 rounded-r-md"></div>
                  </div>

                  {/* Enhanced floating elements around phone - responsive positions */}
                  {floatingFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${window.innerWidth < 640 ? feature.position.sm : feature.position.md} flex flex-col items-center`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + feature.animationDelay }}
                    >
                      <motion.div
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${feature.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg relative`}
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, feature.animationDelay % 2 === 0 ? 5 : -5, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: feature.animationDelay }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>

                        {/* Connection line - hide on small screens */}
                        <motion.div
                          className="absolute w-8 sm:w-16 h-px bg-white/30 hidden sm:block"
                          style={{
                            left: feature.position.md.includes("right") ? "-32px" : "100%",
                            top: "50%"
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 1.2 + feature.animationDelay }}
                        />
                      </motion.div>
                      <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-medium text-white">
                        {feature.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced bottom section with animated elements */}
            <motion.div
              className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center px-4 sm:px-6 md:px-16 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: contentVisible ? 1 : 0, y: contentVisible ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: contentVisible ? 0 : 20, opacity: contentVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.button
                  className="bg-gray-700/50 text-amber-300 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-lg sm:text-xl transition w-full sm:w-fit shadow-lg flex items-center justify-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05, backgroundColor: "rgb(31, 31, 31)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>

                <motion.button
                  className="border-2 border-amber-500 text-amber-500 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-lg sm:text-xl transition w-full sm:w-fit"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <F />
      <Feature />
      <Colors />
    </>
  );
};

export default App;