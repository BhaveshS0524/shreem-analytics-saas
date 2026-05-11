import { ArrowRight, CheckCircle2, Factory, Package, ShoppingCart, Pill, Shirt, Truck } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  const verticals = [
    { name: "Manufacturing", icon: Factory },
    { name: "FMCG", icon: Package },
    { name: "Retail", icon: ShoppingCart },
    { name: "Pharma", icon: Pill },
    { name: "Textile", icon: Shirt },
    { name: "Logistics", icon: Truck },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-shreem-navy pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-900/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Transform Your Raw Data Into <span className="text-shreem-cyan">Unstoppable Growth</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 font-sans">
            As you look at your warehouse, your endless Excel sheets, and your weekly numbers, you might realize how much potential is hidden just beneath the surface. When you realize that the answers are already there, you can easily <strong className="font-semibold text-white">choose Shreem Analytics</strong> to reveal them.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/dashboard"
              className="rounded-full bg-shreem-cyan px-8 py-3.5 text-sm font-semibold text-shreem-navy shadow-sm hover:hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shreem-cyan transition-all"
            >
              Experience The Dashboard
            </Link>
            <a href="https://wa.me/919824048748" target="_blank" rel="noreferrer" className="text-sm font-semibold leading-6 text-white group flex items-center gap-2">
              Discuss ROI on WhatsApp <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Embedded Command & Presupposition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold tracking-tight text-shreem-navy sm:text-4xl">
                When your revenue scale begins using our insights...
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                You've been managing the complexities of your business for years. Naturally, as you navigate changing margins and supply chain challenges, you want to <strong className="text-shreem-navy font-semibold">feel the confidence</strong> of crystal-clear forecasting.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                You might wonder how quickly things will shift once you integrate your data into our platform. Because when you do, our Automated Report Generator seamlessly drops the insights right into your inbox every Monday morning. 
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600 font-medium italic">
                Would you prefer to see a demo of your industry's dashboard now, or would you rather we discuss your specific ROI goals on WhatsApp?
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm relative">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-shreem-cyan rounded-full opacity-20 blur-xl"></div>
                <h3 className="text-xl font-semibold text-shreem-navy mb-6">Designed For Gujarat's Core Industries</h3>
                <div className="grid grid-cols-2 gap-4">
                  {verticals.map((v) => (
                    <div key={v.name} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 mix-blend-multiply">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-shreem-navy flex items-center justify-center">
                         <v.icon className="h-5 w-5 text-shreem-cyan" />
                      </div>
                      <span className="font-medium text-slate-700">{v.name}</span>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-display font-bold text-shreem-navy mb-12">Built For The Modern SME Owner</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                 <div className="w-14 h-14 bg-shreem-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-shreem-cyan">
                    <CheckCircle2 className="h-8 w-8" />
                 </div>
                 <h3 className="text-xl font-bold text-shreem-navy mb-3">CSV to Analytics Engine</h3>
                 <p className="text-slate-600">Stop wrestling with spreadsheets. Upload your raw data manually or automatically and let our engine map out your profitability instantly.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                 <div className="w-14 h-14 bg-shreem-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-shreem-cyan">
                    <CheckCircle2 className="h-8 w-8" />
                 </div>
                 <h3 className="text-xl font-bold text-shreem-navy mb-3">Monday Morning Delivery</h3>
                 <p className="text-slate-600">Every week starts with clarity. Automated PDF and email reports arrive directly via WhatsApp or Email, summarizing your wins and alerts.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                 <div className="w-14 h-14 bg-shreem-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-shreem-cyan">
                    <CheckCircle2 className="h-8 w-8" />
                 </div>
                 <h3 className="text-xl font-bold text-shreem-navy mb-3">Predictable Subscription</h3>
                 <p className="text-slate-600">Powered by Stripe integrations, our automated billing ensures you maintain uninterrupted access to high-level strategic oversight.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
