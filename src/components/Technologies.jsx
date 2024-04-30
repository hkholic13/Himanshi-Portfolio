import { RiReactjsLine } from "react-icons/ri"
import { TbBrandTypescript } from "react-icons/tb"
import { TbBrandTailwind } from "react-icons/tb"
import { TbBrandRedux } from "react-icons/tb"
import { TbBrandGraphql } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoAws } from "react-icons/bi"
import { SiRubyonrails } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-9"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <TbBrandRedux className="text-7xl text-purple-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <TbBrandTypescript className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <SiRubyonrails className="text-7xl text-red-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <TbBrandTailwind className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <TbBrandGraphql className="text-7xl text-pink-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <FaNodeJs className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <BiLogoAws className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <SiMysql className="text-7xl text-grey-400"/>
            </motion.div>   
        </motion.div>
    </div>
  )
}

export default Technologies