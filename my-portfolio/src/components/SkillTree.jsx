import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

// // ✅ Skill tree data
// const skillTree = [
//   {
//     tech: 'HTML',
//     level: 'Beginner',
//     emoji: '🌐',
//     image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
//     projects: ['Personal Portfolio', 'Landing Pages']
//   },
//   {
//     tech: 'CSS',
//     level: 'Intermediate',
//     emoji: '🎨',
//     image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
//     projects: ['Styled Components', 'Responsive Design']
//   },
//   {
//     tech: 'JavaScript',
//     level: 'Intermediate',
//     emoji: '⚙️',
//     image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
//     projects: ['Emoji Game', 'Match Game']
//   },
//   {
//     tech: 'React',
//     level: 'Advanced',
//     emoji: '⚛️',
//     image: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
//     projects: ['Password Manager', 'Routing Practice']
//   },
//   {
//     tech: 'MERN Stack',
//     level: 'Proficient',
//     emoji: '🚀',
//     image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*lstNQu_9sdcfE7W3lT_4qw.png',
//     projects: ['Full Stack Dashboard', 'Chat App']
//   },
//   {
//     tech: 'Next.js + AI',
//     level: 'Learning',
//     emoji: '🤖',
//     image: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
//     projects: ['AI Code Reviewer', 'Realtime Location Tracker']
//   }
// ]

const SkillTree = () => {
  const [selectedNode, setSelectedNode] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => setCurrentIndex(prev => Math.min(prev + 1, skillTree.length - 1)),
    onSwipedDown: () => setCurrentIndex(prev => Math.max(prev - 1, 0)),
  })

  return (
    <>
    <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center m-10 gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>


    {/* <div className="w-full py-10 px-4" {...swipeHandlers}>
      {/* Skill Tree Title */}
      {/* <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 mb-12">
        📈 My Skill Tree
      </h2>  */}

      {/* Vertical Skill Tree */}
      {/* <div className="flex flex-col items-center gap-10">
        {skillTree.map((node, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            {/* Node Card */}
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-700 px-6 py-5 rounded-xl cursor-pointer text-center w-64"
              onClick={() => setSelectedNode(node)}
            >
              <img src={node.image} alt={node.tech} className="w-10 h-10 mx-auto mb-2" />
              <div className="text-3xl mb-1">{node.emoji}</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{node.level}</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{node.tech}</h3>
            </motion.div> */}

            {/* Connector */}
            {/* {index < skillTree.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6 }}
                className="w-1 h-10 bg-gradient-to-b from-pink-500 via-orange-400 to-yellow-400 rounded-full mt-2"
              />
            )}
          </div>
        ))}
      </div> */}


   <div>
      {/* Why Work With Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-20 bg-gray-900 text-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
          🚀 Why Work With Me?
        </h2>
        <ul className="space-y-4 text-base leading-relaxed">
          <li>
            <strong>🔍 Not Just a Developer — A Problem Solver:</strong> I build real-world solutions like SleepSync, Realtime Tracker & AI Code Reviewer.
          </li>
          <li>
            <strong>🧠 Fast Learner:</strong> From HTML to AI SDKs, I learn & adapt quickly.
          </li>
          <li>
            <strong>🛠️ Full-Stack Power:</strong> I can build everything — UI, APIs, DBs, and infrastructure.
          </li>
          <li>
            <strong>📈 Proven Performer:</strong> Hackathon finalist, Web Dev champion, TA for 200+ peers.
          </li>
          <li>
            <strong>⚡ Fast Delivery, Clean Code:</strong> Tools like Tailwind, Prisma, and Next.js make me quick and reliable.
          </li>
        </ul>
      </motion.div>

      {/* Project Modal */}
      <Dialog
        open={!!selectedNode}
        onClose={() => setSelectedNode(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      >
        <Dialog.Panel className="bg-white dark:bg-gray-800 max-w-md w-full p-6 rounded-xl shadow-lg text-black dark:text-white">
          <Dialog.Title className="text-2xl font-bold mb-2">
            {selectedNode?.emoji} {selectedNode?.tech}
          </Dialog.Title>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">Level: {selectedNode?.level}</p>
          <ul className="list-disc list-inside space-y-1">
            {selectedNode?.projects.map((project, i) => (
              <li key={i}>{project}</li>
            ))}
          </ul>
          <button
            onClick={() => setSelectedNode(null)}
            className="mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg"
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
    </>
  )
}

export default SkillTree