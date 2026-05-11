import { BarChart, FileSpreadsheet, Send, CreditCard, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "../lib/utils";

export default function Services() {
  const services = [
    {
      title: "Multi-Tenant Client Portal",
      description: "When you log into your secure executive dashboard, you'll immediately see the metrics that drive your profitability. A centralized hub tailored exclusively for SME owners.",
      icon: BarChart,
      highlight: true
    },
    {
      title: "CSV/Excel Analytics Engine",
      description: "You've spent enough time staring at static cells. As you easily upload your operational Excel files, our engine processes the logic, cleaning and transforming raw data into actionable visual insights.",
      icon: FileSpreadsheet,
      highlight: false
    },
    {
      title: "Automated Report Generator",
      description: "Imagine waking up every Monday to a comprehensive PDF report in your inbox. Feel the relief of having your weekly performance summarized without lifting a finger.",
      icon: Send,
      highlight: false
    },
    {
      title: "Seamless Subscription Billing",
      description: "Integrations with Stripe mean your analytics never experience downtime. You can focus on scaling your manufacturing output while we handle the automated background renewals.",
      icon: CreditCard,
      highlight: false
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-shreem-navy py-20 px-4 sm:px-6 lg:px-8 text-center">
         <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Engines of <span className="text-shreem-cyan">Your Success</span>
         </h1>
         <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Because when your revenue begins to scale using our insights, you'll wonder how you ever managed the supply chain without them.
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "rounded-3xl p-8 sm:p-10 transition-all border",
                service.highlight 
                  ? "bg-white border-shreem-cyan/30 shadow-lg shadow-shreem-cyan/5" 
                  : "bg-white border-slate-200 shadow-sm hover:shadow-md"
              )}
            >
               <div className="flex items-center justify-between mb-8">
                 <div className="w-14 h-14 bg-shreem-navy rounded-2xl flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-shreem-cyan" />
                 </div>
                 <span className="font-display font-bold text-5xl text-slate-100 select-none">
                    0{index + 1}
                 </span>
               </div>
               <h3 className="text-2xl font-bold text-shreem-navy mb-4">{service.title}</h3>
               <p className="text-slate-600 leading-relaxed text-lg">
                 {service.description}
               </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-shreem-navy rounded-3xl p-10 sm:p-16 text-center shadow-xl border border-slate-800 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-shreem-cyan rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
           
           <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6 relative z-10">
              Ready to <span className="text-shreem-cyan">decide</span>?
           </h2>
           <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 relative z-10 font-light italic">
              "Would you prefer to view a live demonstration of the client portal, or would you rather message our founder directly on WhatsApp to discuss your unique logistics bottleneck?"
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                to="/dashboard"
                className="w-full sm:w-auto rounded-full bg-shreem-cyan px-8 py-4 text-sm font-semibold text-shreem-navy shadow-sm hover:bg-cyan-400 transition-all font-display tracking-wide uppercase"
              >
                View The Demo
              </Link>
              <a 
                href="https://wa.me/919824048748" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto rounded-full bg-transparent border border-white/20 px-8 py-4 text-sm font-semibold text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 font-display tracking-wide uppercase"
              >
                WhatsApp Us <ArrowRight className="h-4 w-4" />
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}
