import { motion } from "framer-motion";
import { Phone, Search, BarChart, FileCheck } from "lucide-react";

const steps = [
  {
    title: "Initial Request",
    description: "We review property details and assignment requirements to confirm scope and eligibility.",
    icon: Phone,
  },
  {
    title: "Property Inspection",
    description: "We conduct a thorough on-site inspection as required by the assignment type and standards.",
    icon: Search,
  },
  {
    title: "Market Analysis",
    description: "We collect data, analyze comparables, and apply market-supported adjustments.",
    icon: BarChart,
  },
  {
    title: "Reporting & Delivery",
    description: "You receive a clear, professional appraisal report delivered in accordance with standards.",
    icon: FileCheck,
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">
            The Appraisal Process
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10 w-[80%] mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-white flex items-center justify-center mb-6 group-hover:border-blue-100 transition-colors duration-300 relative z-10">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
