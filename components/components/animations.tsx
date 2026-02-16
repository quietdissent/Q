"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Fade up animation for text and content
export const FadeUp = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  className = "" 
}: { 
  children: ReactNode; 
  delay?: number; 
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for gallery items
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual gallery item
export const GalleryItem = ({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
