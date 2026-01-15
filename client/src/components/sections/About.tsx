import { motion } from "framer-motion";
import { Award, Map, Scale, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Meet The Appraiser</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-2 leading-tight text-primary">
              Steven Sparks
            </h2>
            <h3 className="text-xl text-slate-600 font-medium mb-6">
              Certified Real Estate Appraiser & Land Specialist
            </h3>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                With over 15 years of experience in real estate valuation, Steven Sparks specializes in the appraisal of rural land, acreage, and complex properties. His work focuses on defensible analysis, local market support, and clear reporting tailored to the intended use of each assignment.
              </p>
              <p>
                Steven’s background includes extensive appraisal work involving raw land, rural residential tracts, timberland, hunting property, and agricultural estates. He regularly evaluates development potential, access, topography, utilities, and market feasibility using GIS-based tools and field-level analysis.
              </p>
              <p>
                Beyond standard residential assignments, Steven provides detailed highest and best use analysis and market-supported conclusions for private clients, lenders, and estate matters. Each appraisal is completed independently and in accordance with applicable appraisal standards.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-800">18+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Map className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-800">Rural & Land Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-800">State Certified Appraiser</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-800">Assignment-Specific Analysis</span>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative flex justify-center"
          >
            <div className="relative w-full max-w-xs aspect-square">
               <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
               <div className="relative bg-slate-50 p-2 rounded-2xl shadow-xl overflow-hidden w-full h-full">
                 <img 
                   src="/headshot.png"
                   alt="Steven Sparks - Real Estate Appraiser"
                   className="w-full h-full object-cover rounded-xl"
                 />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
