import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/rural_land_with_pasture,_hardwood_trees,_fencing_and_distant_home.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern suburban home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-900/30 backdrop-blur-sm">
            <span className="text-blue-200 text-sm font-medium tracking-wide uppercase">
              Independent • Accurate • Professional
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
            Credible Analysis, <br />
            <span className="text-blue-400">Defensible Value.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-xl">
            Waypoint Appraisal provides independent real estate appraisal services focused on clear reporting and local market knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:sparks@waypointappraisal.com">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-12 px-8 shadow-xl shadow-blue-900/20"
              >
                Request an Appraisal
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-lg h-12 px-8"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Meet Steven
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
