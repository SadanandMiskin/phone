import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const PhoneAnimation = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.8], [-300, 1900])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 2.5])

  // New transformations for enhanced effects
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const shadowIntensity = useTransform(scrollYProgress, [0, 0.5], [5, 40])
  const phoneShadowOpacity = useTransform(scrollYProgress, [0, 0.4], [0.2, 0.8])

  return (
    <div className="bg-zinc-950 flex justify-center items-center text-white px-4 font-sans min-h-screen">
      <motion.section
        className="bg-zinc-100/10 w-full max-w-screen h-dvh rounded-3xl overflow-hidden flex flex-col items-center justify-center relative shadow-2xl"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, ease: "anticipate" }}
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-white backdrop-blur-2xl"></div>

        {/* Hero Title - Added opacity effect */}
        <motion.h1
          className="text-5xl md:text-9xl font-extrabold text-center px-6 tracking-tight z-10 text-black"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ opacity: textOpacity }} // Text fades out while scrolling
        >
          Camera, like your eyes.
        </motion.h1>

        {/* Phone - Enhanced shadow and effects */}
        <motion.div
          className="flex justify-center items-center mt-20"
          style={{
            y,
            scale,
            filter: `drop-shadow(0 0 ${shadowIntensity}px rgba(0, 0, 0, 0.5))` // Dynamic shadow based on scroll
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-pink-800 via-zinc-900 to-black h-120 w-65 md:h-150 md:w-72 rounded-[2.5rem] border border-white/10 z-20"
            style={{
              boxShadow: `
                inset 0 0 20px rgba(255,255,255,0.05),
                0 ${shadowIntensity}px ${shadowIntensity}px rgba(0,0,0,${phoneShadowOpacity})
              `
            }}
          >
            {/* Camera Module */}
            <div className="absolute top-6 left-1/4 -translate-x-1/2  w-30 h-28 rounded-2xl flex flex-wrap items-start justify-start gap-2 p-3  shadow-inner border border-gray-900/50">
              {[['sky-400', 'top-1 right-1'], ['purple-400', 'top-1 left-5'], ['amber-400', 'bottom-1 right-4'], ['emerald-400', 'bottom-1 left-1']].map(([color, pos], i) => (
                <div key={i} className="bg-black w-10 h-10 rounded-full border-2 border-zinc-600 relative flex  items-center justify-center ">
                  <div className={`bg-${color} w-2 h-2 rounded-full absolute  shadow-md shadow-${color}`}></div>
                </div>
              ))}
            <div className="absolute top-29 left-12 w-3 h-3 rounded-full bg-amber-300 shadow-md shadow-white" />

            </div>

            {/* Flash */}

            {/* Logo Placeholder */}
            <div className="absolute flex justify-center items-center top-50 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-zinc-600 shadow-sm text-gray-600" >
            S </div>
          </motion.div>
        </motion.div>

        {/* Tagline - Added fade out effect */}
        <motion.p
          className="text-white text-lg md:text-xl absolute bottom-24 text-center bg-gray-500 backdrop-blur-lg px-6 py-2 rounded-full border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          style={{ opacity: textOpacity }} // Fades out with scroll
        >
          See the world differently.
        </motion.p>
      </motion.section>
    </div>
  )
}

export default PhoneAnimation