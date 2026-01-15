import { motion } from "framer-motion";
import { Home, Trees, Map, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Residential Properties",
    description: "Comprehensive valuation for single-family homes, townhomes, and multi-unit residential properties. Perfect for private clients, lenders, and estates.",
    icon: Home,
  },
  {
    title: "Rural & Acreage Tracts",
    description: "Specialized analysis for rural properties, large acreage, and country estates requiring deep understanding of land value dynamics.",
    icon: Trees,
  },
  {
    title: "Land-Focused Valuation",
    description: "Expert assessment of vacant land, potential development sites, and agricultural properties throughout North Mississippi, with in-depth land broker specialist experience.",
    icon: Map,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Our Valuation Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide reliable opinions of value supported by sound methodology and extensive local market knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-slate-50/50 hover:bg-white">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
