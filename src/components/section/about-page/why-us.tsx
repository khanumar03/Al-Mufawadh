"use client";

import { motion } from "framer-motion";
import { EASING } from "@/lib/animation-config";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

const reasonsCards = [
  {
    icon: "🔧",
    title: "Proven expertise",
    description:
      "With years of experience in the industry, we bring a wealth of knowledge and a track record of delivering exceptional results.",
  },
  {
    icon: "🔔",
    title: "Tailored solutions",
    description:
      "We don't believe in one-size-fits-all approaches. Every strategy we create is designed specifically for you, ensuring maximum impact.",
  },
  {
    icon: "💡",
    title: "Innovative thinking",
    description:
      "By staying ahead of industry trends and embracing innovations, we deliver solutions that set you apart from the competition.",
  },
  {
    icon: "📊",
    title: "Measurable results",
    description:
      "Our focus is not just on promises but on outcomes. We ensure every project we undertake delivers tangible, measurable success.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASING.smooth }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Badge asChild className="text-linkrow-badge-text bg-linkrow-badge-bg">
            <Link href="#">
              <span className="text-linkrow-primary-text">Team</span>
            </Link>
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F514C] my-4">
            Why choose us
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            When it comes to finding the right partner, you deserve a team that understands your goals and delivers
            beyond expectations.
          </p>
        </motion.div>

        {/* Grid: 3 columns on md+, define explicit row spans for the big image + right card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {/* 1. Top left card */}
          <motion.article
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm min-h-[180px] flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-[#1F514C] rounded-lg flex items-center justify-center text-xl text-white mb-4">
              {reasonsCards[0].icon}
            </div>
            <h3 className="text-lg md:text-xl font-medium text-[#1F514C] mb-2">{reasonsCards[0].title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{reasonsCards[0].description}</p>
          </motion.article>

          {/* 2. Top middle card */}
          <motion.article
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm min-h-[180px] flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-[#1F514C] rounded-lg flex items-center justify-center text-xl text-white mb-4">
              {reasonsCards[1].icon}
            </div>
            <h3 className="text-lg md:text-xl font-medium text-[#1F514C] mb-2">{reasonsCards[1].title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{reasonsCards[1].description}</p>
          </motion.article>

          {/* 3. Right column - large team image spanning 2 rows */}
          <motion.div
            className="md:row-span-1 rounded-xl overflow-hidden shadow-md relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            {/* Use Next/Image in production; unsplash shown for quick mock */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop&q=80"
              alt="Professional team"
              className="w-full h-full object-cover aspect-[4/2]"
              style={{ minHeight: 240 }}
            />
          </motion.div>

          {/* 4. Bottom left - supporting image */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-md relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=600&fit=crop&q=80"
              alt="Team member"
              className="w-full h-full object-cover aspect-[4/2]"
              style={{ minHeight: 240 }}
            />
          </motion.div>

          {/* 5. Bottom middle card */}
          <motion.article
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm min-h-[180px] flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-[#1F514C] rounded-lg flex items-center justify-center text-xl text-white mb-4">
              {reasonsCards[2].icon}
            </div>
            <h3 className="text-lg md:text-xl font-medium text-[#1F514C] mb-2">{reasonsCards[2].title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{reasonsCards[2].description}</p>
          </motion.article>

          {/* 6. Bottom right card that visually anchors the right column */}
          <motion.article
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm min-h-[180px] md:row-span-1 flex flex-col justify-start"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-[#1F514C] rounded-lg flex items-center justify-center text-xl text-white mb-4">
              {reasonsCards[3].icon}
            </div>
            <h3 className="text-lg md:text-xl font-medium text-[#1F514C] mb-2">{reasonsCards[3].title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{reasonsCards[3].description}</p>        
          </motion.article>
        </div>
      </div>
    </section>
  );
}
