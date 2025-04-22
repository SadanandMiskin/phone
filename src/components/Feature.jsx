import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, Battery, Zap, Monitor, Joystick, Camera } from "lucide-react";

// Enhanced feature data with minimal color palette
const features = [
  {
    title: "Pro-Level Gaming",
    description: "Experience ultra-smooth gameplay with our 120Hz adaptive refresh rate and dedicated gaming processor for lag-free performance.",
    color: "bg-zinc-800",
    gradient: "from-pink-800 to-zinc-900",
    icon: <Joystick size={32} />,
    stats: [
      { label: "Refresh Rate", value: "120Hz" },
      { label: "Touch Response", value: "240Hz" },
      { label: "Gaming Mode", value: "Ultra" }
    ]
  },
  {
    title: "Stunning Display",
    description: "6.7-inch AMOLED ProMotion screen with 1500 nits peak brightness and TrueTone color adaptation technology.",
    color: "bg-zinc-800",
    gradient: "from-cyan-800 to-zinc-900",
    icon: <Monitor size={32} />,
    stats: [
      { label: "Resolution", value: "2K+" },
      { label: "Peak Brightness", value: "1500 nits" },
      { label: "Color Gamut", value: "DCI-P3" }
    ]
  },
  {
    title: "All-Day Battery",
    description: "5,000mAh battery with intelligent power management keeps you going 24+ hours with 65W hyper-charging technology.",
    color: "bg-zinc-800",
    gradient: "from-green-800 to-zinc-900",
    icon: <Battery size={32} />,
    stats: [
      { label: "Capacity", value: "5000mAh" },
      { label: "Fast Charging", value: "65W" },
      { label: "Wireless", value: "15W" }
    ]
  },
  {
    title: "Pro Camera System",
    description: "Capture stunning imagery with our 50MP main sensor, ultra-wide lens, and 5x optical zoom for professional-grade photography.",
    color: "bg-zinc-800",
    gradient: "from-blue-800 to-zinc-900",
    icon: <Camera size={32} />,
    stats: [
      { label: "Main Sensor", value: "50MP" },
      { label: "Ultra-Wide", value: "12MP" },
      { label: "Optical Zoom", value: "5x" }
    ]
  }
];

// Animated phone screen contents for each feature - with minimal design
const PhoneScreen = ({ activeIndex }) => {
  const feature = features[activeIndex];

  // Different screen content based on active feature
  const renderContent = () => {
    switch(activeIndex) {
      case 0: // Gaming
        return (
          <motion.div className="bg-gradient-to-br from-purple-900 to-sky-800 h-full w-full p-3 flex flex-col"

          >
            <div className="text-xs text-zinc-300 mb-1 flex justify-between">
              <span>GAMING MODE</span>
              <span className="flex items-center"><Zap size={12} className="mr-1"/>120 FPS</span>
            </div>
            <div className="flex-1 bg-black/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Joystick className="mx-auto text-zinc-300 mb-2" size={24} />
                <div className="text-zinc-200 text-xs font-bold">ULTRA MODE</div>
                <div className="mt-3 flex justify-center gap-1">
                  {[1,2,3].map(n => (
                    <div key={n} className="w-1 h-3 bg-zinc-300 rounded-full animate-pulse"
                      style={{animationDelay: `${n * 0.1}s`}}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 1: // Display
        return (

          <div className="bg-gradient-to-br from-zinc-900 via-gray-400 to-zinc-400 h-full w-full flex flex-col">
              <img src="display.webp" className="bg-contain h-full " />
            {/* <div className="text-xs text-zinc-300 mb-1">PRO DISPLAY</div> */}
            <div className="flex-1 overflow-hidden rounded-lg">


              {/* <motion.div
                initial={{ scale: 1.5, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/api/placeholder/100/150')" }}
              /> */}
            </div>
            {/* <div className="mt-1 flex justify-between text-zinc-300 text-xs">
              <span>2K+ Resolution</span>
              <span>HDR10+</span>
            </div> */}
          </div>
        );
      case 2: // Battery
        return (
          <div className="bg-gradient-to-br from-green-900 to-black h-full w-full p-3 flex flex-col">
            <div className="text-xs text-zinc-300 mb-1">BATTERY STATUS</div>
            <div className="flex-1 flex items-center justify-center flex-col">
              <div className="relative w-16 h-24 border-2 rounded-md border-zinc-500 mb-3">
                <motion.div
                  initial={{ height: '20%' }}
                  animate={{ height: '85%' }}
                  transition={{ duration: 2,  repeatType: "reverse" }}
                  className="absolute bottom-0 w-full bg-green-500 rounded-b"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  85%
                </div>
              </div>
              <div className="text-zinc-300 text-xs">24+ HOURS REMAINING</div>
            </div>
          </div>
        );
      case 3: // Camera
        return (
          <div className="bg-gradient-to-br from-zinc-900 to-black h-full w-full  flex flex-col">
            <div className="text-xs text-zinc-300 mb-1 flex justify-between">
              <span>PRO CAM</span>
              <span>50MP</span>
            </div>
            <div className="flex-1 bg-black/40 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                <img src="s.webp"  className=" bg-cover w-full p-2 h-[88%]" />
                {/* <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "./s.webp" }}
                /> */}
              </div>
              <div className="absolute bottom-5  right-34 bg-white text-zinc-200 text-xs p-6 rounded-full">
                {/* 5.0x */}
              </div>
              <div className="absolute top-2 left-2">
                <div className="flex items-center bg-black/60 text-zinc-200 text-xs px-2 py-1 rounded-full">
                  <Camera size={12} className="mr-1" />
                  <span>PORTRAIT</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="bg-black h-full w-full" />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl overflow-hidden"
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
};

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            opacity: Math.random() * 0.05 + 0.05,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 10}%`,
            scale: Math.random() * 0.3 + 0.3
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [Math.random() * 0.1 + 0.05, Math.random() * 0.05]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Sparkles size={Math.random() * 8 + 4} className="text-white opacity-20" />
        </motion.div>
      ))}
    </div>
  );
};

const FeatureStat = ({ label, value }) => (
  <div className="flex flex-col items-center bg-black/20 backdrop-blur-sm p-2 rounded-lg">
    <span className="text-zinc-400 text-xs">{label}</span>
    <span className="text-zinc-100 font-bold text-sm">{value}</span>
  </div>
);

const FeatureSection = ({ feature, index, scrollYProgress, setActiveIndex }) => {
  // Control animation timing for each section
  const sectionsCount = features.length;
  const start = index * (1 / sectionsCount);
  const end = start + (1 / sectionsCount);
  const mid = (start + end) / 2;

  // Animation values
  const opacity = useTransform(scrollYProgress,
    [start, mid, end],
    [1, 1, 0]
  );

  const x = useTransform(scrollYProgress,
    [start, mid, end],
    [0, 0, -200]
  );

  const scale = useTransform(scrollYProgress,
    [start, mid, end],
    [1, 1, 0]
  );

  // Update active index for phone screen
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      if (value >= start && value <= end) {
        if (value > mid -0.1 && value < mid + 0.1) {
          setActiveIndex(index);
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, start, end, mid, index, setActiveIndex]);

  return (
    <motion.div
      className="h-screen z-30  flex items-center justify-start pr-2 md:pr-24 lg:pr-2"

      style={{ opacity, x, scale, y:400 }}
    >
      <div className={`p-6 md:p-8 rounded-2xl text-white max-w-md bg-gradient-to-br ${feature.gradient} shadow-lg border border-zinc-700/30 backdrop-blur-sm relative overflow-hidden`}>
        {/* Background decorative elements - more subtle */}
        <div className="absolute top-0 right-0 w-52 h-42 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/10 rounded-full blur-xl -ml-5 -mb-5" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="bg-white/10 p-2 rounded-lg mr-3">
              {feature.icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
          </div>

          <p className="text-base md:text-lg mb-6 text-zinc-300">{feature.description}</p>

          <div className="grid grid-cols-3 gap-3">
            {feature.stats.map((stat, i) => (
              <FeatureStat key={i} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feature = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phone transform (scale and rotate slightly as user scrolls)
  const phoneScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const phoneRotateY = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const phoneRotateZ = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 2, -2, 0]);
  const phRotateY = useTransform(scrollYProgress, [0.9, 1], [0, 90]);

  const scalePh = useTransform(scrollYProgress , [0.9 , 1] , [0, 800] , {
    stiffness: 100,
    damping: 20
  })

  // Background color transition - minimal and sleek
  const getBackgroundByIndex = () => {
    return "from-zinc-900 to-black";
  };

  // Indicator for scroll progress
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
    <div ref={containerRef} className={`relative h-[500vh] font-sans bg-gradient-to-tl from-zinc-800 to-gray-900 transition-colors duration-700`}>
      {/* Decorative particles - fewer particles */}
      <FloatingParticles />

      {/* Scroll progress indicator */}
      <div className="w-screen fixed top-4 flex justify-center transform z-30 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white/40 rounded-full"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Title header */}
      <div className="sticky top-0 w-full pt-12 pb-4 text-center z-20 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm">
        <motion.h1 className="text-3xl md:text-7xl font-bold text-white"
          style={{
            opacity: scrollYProgress
          }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
           The Ultimate Smartphone
          </span>
          {/* <span className="text-lg font-light ml-2 text-zinc-400">Premium Smartphone</span> */}
        </motion.h1>
      </div>

      {/* Sticky Centered Phone */}
      <motion.div className="sticky top-1/3 -translate-y-1/3 h-screen flex justify-center items-center pointer-events-none"
        style={{
          y: scalePh,
          rotateZ: phRotateY
        }}
      >
        <motion.div
          className="bg-black h-84 w-42 md:h-150 md:w-80 rounded-3xl border border-zinc-800 relative overflow-hidden"
          style={{
            scale: phoneScale,
            rotateY: phoneRotateY,
            rotateZ: phoneRotateZ,
            // boxShadow: "0 0 40px rgba(0, 0, 0, 0.5), 0 0 60px rgba(120, 120, 120, 0.1)"
          }}
        >
          {/* Phone details */}
          <div className="w-16 h-1 bg-zinc-800 rounded-full absolute top-3 left-1/2 transform -translate-x-1/2 z-20" />
          <div className="w-3 h-3 bg-zinc-900 rounded-full absolute top-2 right-4 z-20" />

          {/* Phone screen content */}
          <PhoneScreen activeIndex={activeIndex} />

          {/* Phone bottom bar */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-zinc-800 rounded-full z-20" />

          {/* Reflection overlay - more subtle */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 pointer-events-none" />

          {/* Side buttons */}
          <div className="absolute top-20 right-0 w-1 h-8 bg-zinc-800 rounded-l-sm" />
          <div className="absolute top-32 right-0 w-1 h-8 bg-zinc-800 rounded-l-sm" />
          <div className="absolute top-20 left-0 w-1 h-12 bg-zinc-800 rounded-r-sm" />
        </motion.div>



      </motion.div>

      {/* Feature Sections */}
      <div className="absolute top-0 sm:-left-1/2 md:left-50">
        {features.map((feature, index) => (
          <FeatureSection
            key={index}
            feature={feature}
            index={index}
            scrollYProgress={scrollYProgress}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
    {/* New Color Showcase Section */}

</>
  );
};

export default Feature;