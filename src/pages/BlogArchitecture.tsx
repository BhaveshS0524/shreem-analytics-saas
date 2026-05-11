import { FileText, AlignLeft, BarChart3, Presentation, Link as LinkIcon, Search } from "lucide-react";

export default function BlogArchitecture() {
  return (
    <div className="flex flex-col w-full bg-white pb-24">
      {/* Header */}
      <div className="bg-shreem-navy py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          SEO Content <span className="text-shreem-cyan">Architecture</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
          The structural blueprint for ranking "Business Analytics Gujarat".
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        <div className="prose prose-slate max-w-none mb-12">
           <h2 className="text-2xl font-display font-bold text-shreem-navy border-b border-slate-200 pb-2 mb-6">Core SEO Strategy</h2>
           <p>
             To dominate local search for "Business Analytics Gujarat," we map the content using an overarching <strong>Pillar-Cluster Model</strong>. The cornerstone is a comprehensive guide addressing how local SMEs (Textile, Pharma, FMCG) implement data analytics, branching out into highly specific, long-tail query clusters.
           </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm mb-12">
           <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-shreem-cyan/20 rounded-lg flex items-center justify-center">
                 <Search className="h-5 w-5 text-shreem-cyan" />
              </div>
              <h3 className="text-xl font-bold font-display text-shreem-navy">Primary Pillar Page</h3>
           </div>
           
           <div className="bg-white border border-slate-200 p-6 rounded-2xl mb-4">
              <h4 className="font-bold text-lg text-slate-800 mb-2">Title: The Ultimate Guide to Business Analytics for SMEs in Gujarat</h4>
              <p className="text-sm text-slate-600 mb-4"><strong>Target Keyword:</strong> Business Analytics Gujarat, SME Analytics Ahmedabad</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><AlignLeft className="h-4 w-4 text-shreem-cyan"/> Introduction: The data revolution in Ahmedabad's industrial zones.</li>
                <li className="flex items-center gap-2"><AlignLeft className="h-4 w-4 text-shreem-cyan"/> Chapter 1: Why CSV parsing is failing your textile business.</li>
                <li className="flex items-center gap-2"><AlignLeft className="h-4 w-4 text-shreem-cyan"/> Chapter 2: The ROI of automated reporting in Pharma.</li>
                <li className="flex items-center gap-2"><AlignLeft className="h-4 w-4 text-shreem-cyan"/> Chapter 3: How Shreem Analytics bridges the gap.</li>
              </ul>
           </div>
        </div>

        <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-shreem-navy border-b border-slate-200 pb-2 mb-6">Supporting Content Clusters</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="border border-slate-200 p-6 rounded-2xl bg-white hover:border-shreem-cyan/50 transition-colors">
                  <h4 className="font-bold text-lg text-shreem-navy mb-2">Cluster 1: Industry Specific</h4>
                  <ul className="space-y-3 text-sm text-slate-600 mt-4">
                     <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" /> 
                        <span>How Surat Textile Manufacturers Use Data to Cut Waste</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" /> 
                        <span>Optimizing FMCG Supply Chains in Ahmedabad with Excel Automation</span>
                     </li>
                  </ul>
               </div>
               
               <div className="border border-slate-200 p-6 rounded-2xl bg-white hover:border-shreem-cyan/50 transition-colors">
                  <h4 className="font-bold text-lg text-shreem-navy mb-2">Cluster 2: Problem/Solution</h4>
                  <ul className="space-y-3 text-sm text-slate-600 mt-4">
                     <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" /> 
                        <span>Why Your Weekly Excel Reports Take 5 Hours (And How to Fix It)</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" /> 
                        <span>The Cost of Ignoring Visual Dashboards in Logistics</span>
                     </li>
                  </ul>
               </div>
            </div>
        </div>
        
        <div className="bg-shreem-navy p-8 rounded-3xl text-white">
           <h3 className="text-xl font-bold font-display mb-4">Internal Linking Strategy</h3>
           <p className="text-slate-300 text-sm leading-relaxed mb-6">
             Every cluster article must aggressively link back to the Primary Pillar Page using exact and partial match anchors (e.g., "business analytics implementation in Gujarat"). Furthermore, all middle-of-funnel (MoFu) content must include a Milton Model Call-To-Action driving them to the <strong className="text-white border-b border-shreem-cyan">Client Portal Demo</strong>.
           </p>
           <div className="flex items-center gap-2 text-shreem-cyan text-sm font-medium">
             <LinkIcon className="h-4 w-4" /> Ensure URL structure is flat: /blog/business-analytics-gujarat
           </div>
        </div>

      </div>
    </div>
  );
}
