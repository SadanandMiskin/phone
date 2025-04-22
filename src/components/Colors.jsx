import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    {
      name: "Midnight Black",
      gradient: "bg-gradient-to-br from-zinc-200 via-zinc-900 to-black",
      delayFactor: 0
    },
    {
      name: "Glacier White",
      gradient: "bg-gradient-to-br from-zinc-600 via-zinc-200 to-white",
      delayFactor: 0.2
    },
    {
      name: "Deep Violet",
      gradient: "bg-gradient-to-br from-zinc-800 via-violet-700 to-violet-900",
      delayFactor: 0.4
    }
  ];

  const rotateVariants = {
    hover: {
      rotateY: [0, 5, -5, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tl from-white to-white text-black relative z-10 py-16">
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-12 text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Comes in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">3 Colors</span>
      </motion.h2>

      {/* Color Selection Dots */}
      <motion.div
        className="flex gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {colors.map((color, index) => (
          <motion.button
            key={index}
            className={`w-4 h-4 rounded-full border-2 ${selectedColor === index ? 'border-blue-500 scale-125' : 'border-gray-400'} transition-all duration-300`}
            onClick={() => setSelectedColor(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-4 ">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: selectedColor === index ? 1 : 0.5,
              y: 0,
              scale: selectedColor === index ? 1.05 : 0.95
            }}
            transition={{ duration: 0.6, delay: color.delayFactor }}
            className="flex flex-col items-center"
            onClick={() => setSelectedColor(index)}
          >
            <motion.div
              className="flex justify-center items-center mt-6"
              style={{
                filter: `drop-shadow(0 0 10px rgba(0, 0, 0, 0.2))`
              }}
              whileHover="hover"
              variants={rotateVariants}
            >
              <motion.div
                className={`relative ${color.gradient} h-64 w-32 sm:h-80 sm:w-40 md:h-96 md:w-48 rounded-3xl border border-white/10 z-20`}
                style={{
                  boxShadow: `
                    inset 0 0 20px rgba(255,255,255,0.05),
                    0 2px 12px rgba(0,0,0,0.3)
                  `
                }}
                whileHover={{
                  boxShadow: `
                    inset 0 0 30px rgba(255,255,255,0.1),
                    0 4px 20px rgba(0,0,0,0.4)
                  `
                }}
              >
                {/* Camera Module - Fixed Alignment */}
                <motion.div
                  className="absolute top-3 left-2 w-15 h-15  sm:w-24 sm:h-24 rounded-xl bg-black/20 shadow-inner border border-gray-900/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + color.delayFactor, duration: 0.8 }}
                >
                  {/* Camera Grid with Proper Alignment */}
                  <div className="grid grid-cols-2 gap-1 p-2 w-full h-full">
                    {[
                      { color: "sky-400", position: "" },
                      { color: "purple-400", position: "" },
                      { color: "amber-400", position: "" },
                      { color: "emerald-400", position: "" }
                    ].map((cam, i) => (
                      <motion.div
                        key={i}
                        className="bg-black w-5 h-5 sm:w-8 sm:h-8  rounded-full border border-zinc-600 relative flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
                      >
                        <motion.div
                          className={`bg-${cam.color} w-2 h-2 rounded-full absolute`}
                          animate={{
                            boxShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.8)', '0 0 0px rgba(255,255,255,0)']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Flash */}
                  <motion.div
                    className="absolute -bottom-5 right-5 w-3 h-3 rounded-full bg-amber-300"
                    animate={{
                      boxShadow: ['0 0 0px rgba(251,191,36,0)', '0 0 8px rgba(251,191,36,0.8)', '0 0 0px rgba(251,191,36,0)']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>

                {/* Logo Placeholder */}
                <motion.div
                  className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-zinc-600 shadow-sm text-gray-300"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 1 + color.delayFactor, duration: 0.8 }}
                >
                  S
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.span
              className="mt-4 text-zinc-800 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + color.delayFactor, duration: 0.5 }}
            >
              {color.name}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.button
        className="mt-16 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.98 }}
      >
        Choose Your Color
      </motion.button>
    </div>
  );
};

export default Colors;