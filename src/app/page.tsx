"use client"
import { motion } from "framer-motion"
export default function Home() {
  return (
    <>
      {/* adding box for animation  */}
      <div className="container-box flex flex-col justify-center items-center h-[180vh] ">
        {/* add motion to every div like this */}
        <motion.div
          // initial for start animation
          initial={{ x: 180, y: -10, opacity: 0 }}
          // animate for animation to change value of x or y or anything else
          animate={{ x: 0, y: 0, opacity: 1 }}
          // transition for adding time to the animation 
          transition={{ duration: 2 }}
          //That's it for a box or div animation
          className="box-1 w-96 h-64 bg-red-900 m-4"></motion.div>
        {/* repeatAnimation */}
        <motion.div
          initial={{ x: -180, y: 10, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="box-1 w-96 h-64 bg-red-900 m-4"></motion.div>
        {/* repeatAnimation */}
        <motion.div
          initial={{ x: 180, y: -10, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="box-1 w-96 h-64 bg-red-900 m-4"></motion.div>
        {/* repeatAnimation */}
        <motion.div
          initial={{ x: -180, y: 10, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="box-1 w-96 h-64 bg-red-900 m-4"></motion.div>
      </div>
    </>
  )
}
