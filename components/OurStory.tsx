'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="py-16" id="story">
      <h2 className="text-center font-heading text-primary text-4xl font-bold leading-tight tracking-[-0.015em] px-4 pb-12 pt-5">Our Love Journey</h2>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-8 items-start px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-end text-right"
        >
          <p className="text-text-light dark:text-text-dark text-lg font-bold font-heading">Our First Date</p>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal">January 15, 2020</p>
          <p className="mt-2 text-sm max-w-sm">A chance meeting at a local coffee shop turned into an hours-long conversation. We knew from that moment something special was beginning.</p>
        </motion.div>
        <div className="flex flex-col items-center gap-1 h-full">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-primary rounded-full size-5"
          />
          <div className="w-px bg-secondary h-full"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-10"
        >
          <Image
            className="rounded-lg object-cover w-full h-48"
            alt="A cozy coffee shop interior."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTkg59haVktSqPZctwC_k3NdihplBYZo6TaQXrX_TbHbix0kVQRyLtLgRB7Dz8WBtajQNReI7b94ZwwPJdV8RsBIAm8s92PffAWbD11ROYD_pCqev9TDiusdf4B9CVSvP1Eyl5v60H9oa2-6L4999MYjavzgABkXEAKKCOYIsO3Q0ADYfXdZY0W_Yge3aPXhC5Lr6D_2RANuw4oF5pmWT0s_5IcRnHwtxR30nEAY8LV1HeA730wAjlRMZQkKLd27A3rDWGjo-EC-8"
            width={800}
            height={192}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="pt-10"
        >
          <Image
            className="rounded-lg object-cover w-full h-48"
            alt="A photo of moving boxes in an empty apartment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6wXuIumBmIrVtsDJIHVZiEUSd5r612OrbPvc51gD9naU7B7IdKdIX3nJCId7S0zEENaAfHs_x4RR02PE72fIb7Tz68POurZFjncYx0NT9xvFVJY66_z5g0cC74FCTLoN6q1VKVFknvr4mhmC4DDlgcm-n06-y7PRE-kH8tQp3VY9rxJ5Tjq2QkyswMvDr8d3cqSwyYH2wDQ1obzWOWr7gm0tuQUdZZSFZ1EN8K8wIAIA4mhFvxaNkUq0mZnHg1rcdqJN1n-BYkVI"
            width={800}
            height={192}
          />
        </motion.div>
        <div className="flex flex-col items-center gap-1 h-full">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-primary rounded-full size-5"
          />
          <div className="w-px bg-secondary h-full"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-start text-left"
        >
          <p className="text-text-light dark:text-text-dark text-lg font-bold font-heading">Moving In Together</p>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal">June 8, 2021</p>
          <p className="mt-2 text-sm max-w-sm">Combining our lives and our homes was the easiest decision we&apos;ve ever made. Our little apartment became a sanctuary of love and laughter.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-end text-right"
        >
          <p className="text-text-light dark:text-text-dark text-lg font-bold font-heading">The Proposal</p>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal">December 25, 2023</p>
          <p className="mt-2 text-sm max-w-sm">Under the starry sky on a crisp Christmas night, Ben got down on one knee. It was a perfect, magical moment that we&apos;ll cherish forever.</p>
        </motion.div>
        <div className="flex flex-col items-center gap-1 h-full">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-primary rounded-full size-5"
          />
          <div className="w-px bg-secondary h-full"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10"
        >
          <Image
            className="rounded-lg object-cover w-full h-48"
            alt="A close-up of an engagement ring on a finger."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvoE7fhonVsTNcmnaq5dCkism6XElCd4KgnHQ_clk7_KZuh940Y-u0v10A86tonNMxAFWxQalZpPJ1UCzW5-DNChJG2B7u4M1n6DGhTBeoDvOrGuXoAOef_ImdSRbPvG1JqTM-eGQrYLaSeifvpClrkeLN00l8hTVtvTyrGTgj6ROvwO9YBfWkUjtg2Ytnbj_DUxMYZDYLomhmL5z0VCeTaDizB7309VY2hK3ySUGsQNeUjtGSGCHiyxXIg9VHXVbqqLBz3gZji_M"
            width={800}
            height={192}
          />
        </motion.div>
      </div>
    </section>
  );
}
