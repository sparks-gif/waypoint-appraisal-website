import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">
              Waypoint<span className="text-blue-500">Appraisal</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Independent, well-supported real estate appraisal services tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Residential Appraisal</li>
              <li>Rural & Acreage Appraisal</li>
              <li>Land & Timber Valuation</li>
              <li>Estate & Probate Appraisals</li>
              <li>Complex & Non-Lender Assignments</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:sparks@waypointappraisal.com" className="hover:text-white transition-colors">
                  sparks@waypointappraisal.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <a href="tel:6625234603" className="hover:text-white transition-colors">
                  (662) 523-4603
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>8165 Hwy 9 N<br />Blue Springs, MS 38828<br />North Mississippi & surrounding areas</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Ready to start?</h4>
            <p className="text-sm">Reach out for confirmation on coverage area or to request a quote.</p>
            <a href="mailto:sparks@waypointappraisal.com">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Waypoint Appraisal. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p>State Certified Real Estate Appraiser</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
