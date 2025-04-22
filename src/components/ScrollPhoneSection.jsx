import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";


const ScrollPhoneSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animations
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [90, 90]), {
    stiffness: 100,
    damping: 20
  });

  const scale = useSpring(useTransform(scrollYProgress, [0.1, 1], [1,  3]), {
    stiffness: 100,
    damping: 20
  });

  return (
    <section ref={sectionRef} className="h-[500vh] relative">
      <motion.div
        style={{
          scale,
          rotate,
          position: "sticky",
          top: "20vh",
          transformOrigin: "center",
          zIndex: 30
        }}
        className="mx-auto"
      >
        {/* The phone component here */}
        <motion.div
          className="relative left-2/5 bg-gradient-to-br from-zinc-600 via-zinc-200 to-white h-120 w-56 md:h-170 md:w-76 rounded-[2.5rem] border border-white/10 z-20"
          style={{
            boxShadow: `
              inset 0 0 20px rgba(255,255,255,0.05),
              0 2px 2px rgba(0,0,0,3)
            `
          }}
        >
          {/* Camera Module */}
          {/* <div className="absolute top-6 left-1/4 -translate-x-1/2 w-30 h-28 rounded-2xl flex flex-wrap items-start justify-start gap-2 p-3 shadow-inner border border-gray-900/50">
            {[['sky-400', 'top-1 right-1'], ['purple-400', 'top-1 left-5'], ['amber-400', 'bottom-1 right-4'], ['emerald-400', 'bottom-1 left-1']].map(([color, pos], i) => (
              <div key={i} className="bg-black w-10 h-10 rounded-full border-2 border-zinc-600 relative flex items-center justify-center">
                <div className={`bg-${color} w-2 h-2 rounded-full absolute shadow-md shadow-${color}`}></div>
              </div>
            ))}
            <div className="absolute top-29 left-12 w-3 h-3 rounded-full bg-amber-300 shadow-md shadow-white" />
          </div> */}

          {/* Logo Placeholder */}
          {/* <div className="absolute flex justify-center items-center top-50 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-zinc-600 shadow-sm text-gray-600">
            S
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ScrollPhoneSection
