import { ArrowRight, Target, TrendingUp, Handshake } from "lucide-react";
import { Link } from "react-router";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="bg-shreem-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-white/10 pb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Meet <span className="text-shreem-cyan">Bhavesh Suryavanshi</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Bridging 8 years of rigorous BFSI analytics with 9 years of corporate soft skills coaching to transform your business narrative.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: The Story & NLP */}
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-3xl font-display font-bold text-shreem-navy">
              You know the numbers matter, but you also know the people behind them matter more.
            </h2>
            <p className="text-slate-600 leading-relaxed mt-6">
              As you reflect on the last decade of your business journey, you've seen strategies come and go. When you look at your current operational data, it's easy to see the raw metrics. But what if those metrics could tell a story? 
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              With over 8 years in BFSI Sales, Marketing, and Analysis, I noticed a recurring pattern. Businesses had the data, but lacked the narrative. You will begin to understand that when you <strong className="text-shreem-navy font-semibold">partner with Shreem Analytics</strong>, you aren't just getting spreadsheets; you are getting a hybrid executive approach.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Having spent 9 years as a Corporate Soft Skills Trainer, I realized that true change happens when clarity meets communication. You can <strong className="text-shreem-navy font-semibold">allow yourself to relax</strong> knowing that your reports won't just be accurate—they will be intuitively designed for you and your stakeholders.
            </p>
            
            <div className="bg-shreem-silver p-6 rounded-2xl border-l-4 border-shreem-cyan mt-8">
              <p className="font-medium text-shreem-navy m-0 italic">
                “Are you ready to optimize your FMCG supply chain immediately, or would you prefer to explore our textile distribution modules first?”
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
               <Link
                to="/services"
                className="rounded-full bg-shreem-navy px-6 py-3 text-sm font-semibold text-white shadow-sm hover:hover:bg-slate-800 transition-colors gap-2 inline-flex"
              >
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Values */}
          <div className="flex flex-col gap-6">
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-shreem-cyan/20 rounded-xl flex items-center justify-center mb-6">
                   <Target className="text-shreem-cyan h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-shreem-navy mb-3">Strategic Precision</h3>
                <p className="text-slate-600">Rooted in banking and finance logistics, we bring institutional-grade analysis to Gujarat's thriving SME sector.</p>
             </div>
             
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-shreem-cyan/20 rounded-xl flex items-center justify-center mb-6">
                   <TrackingUpIcon />
                </div>
                <h3 className="text-xl font-bold text-shreem-navy mb-3">Hybrid Executive Approach</h3>
                <p className="text-slate-600">We balance the hard edge of data analytics with the soft skills necessary to train your team and present to your board.</p>
             </div>
             
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-shreem-cyan/20 rounded-xl flex items-center justify-center mb-6">
                   <Handshake className="text-shreem-cyan h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-shreem-navy mb-3">Local Market Mastery</h3>
                <p className="text-slate-600">Based directly in Ahmedabad, we understand the cultural and economic nuances of local Manufacturing, Retail, and Pharma operations.</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function TrackingUpIcon() {
  return <TrendingUp className="text-shreem-cyan h-6 w-6" />;
}
