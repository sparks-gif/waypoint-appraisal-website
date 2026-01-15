import { motion } from "framer-motion";
import { BadgeCheck, TrendingUp, Scale, FileText } from "lucide-react";

const reasons = [
  {
    title: "State-Certified Appraiser",
    description: "Fully licensed and certified to perform complex residential and land valuations in accordance with state and federal regulations.",
    icon: BadgeCheck,
  },
  {
    title: "Local Market Expertise",
    description: "Deep understanding of North Mississippi's rural markets, property characteristics, and neighborhood trends.",
    icon: TrendingUp,
  },
  {
    title: "Independent & Objective",
    description: "Unbiased analysis free from conflicts of interest. We don't engage in brokerage or advocacy—just the facts.",
    icon: Scale,
  },
  {
    title: "Clear Reporting",
    description: "Well-documented reports that explain not just the 'what' but the 'why' behind the value conclusion.",
    icon: FileText,
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-primary text-primary-foreground relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Why Choose <br/> Waypoint Appraisal?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              We are not a volume-driven operation. Each assignment receives direct attention, appropriate market research, and careful analysis tailored to the property and intended use.
            </p>
            <div className="h-1 w-20 bg-blue-400 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <reason.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
