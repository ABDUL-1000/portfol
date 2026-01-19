'use client'

import React from 'react'
import { BentoGridItem } from './ui/BentoGrid'
import { projects } from '@/data'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const itemRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Grid = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-[3rem] font-bold py-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
      >
        Featured{' '}
        <span className="text-purple-300 dark:text-purple-400">
          Projects
        </span>
      </motion.h1>

      <motion.section
        id="projects"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        {projects.map(({ id, title, img, des, link, iconLists, subtitle, status, features }, i) => (
          <motion.div
            key={id}
            variants={i % 2 === 0 ? itemLeft : itemRight}
            whileHover={{ 
              scale: 1.03,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            {/* Status Badge */}
            {status && (
              <Badge className="absolute top-4 right-4 z-10 bg-green-500 hover:bg-green-600">
                {status}
              </Badge>
            )}
            
            {/* Link overlay */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20"
                aria-label={`Visit ${title}`}
              />
            )}
            
            <BentoGridItem
              id={id}
              title={title}
              description={des}
              link={link}
              icon={iconLists}
              img={img}
              className="h-full"
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none z-10" />
            
            {/* Subtle hover indicator */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Visit Project</span>
            </div>
          </motion.div>
        ))}
      </motion.section>
      
      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-8 py-4 rounded-2xl">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{projects.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
          </div>
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-700" />
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {projects.filter(p => p.status === "Live").length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Live Projects</div>
          </div>
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-700" />
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {new Set(projects.flatMap(p => p.iconLists)).size}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies Used</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Grid