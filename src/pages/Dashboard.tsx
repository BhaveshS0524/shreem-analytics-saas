import { useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, Treemap
} from "recharts";
import { 
  Building2, Users, FileText, Settings, LogOut, Search, Bell, 
  TrendingUp, Activity, Package, DollarSign, Download, Sparkles, CreditCard, CheckCircle2, Lock
} from "lucide-react";
import { cn } from "../lib/utils";

const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 6890 },
  { name: 'Jun', value: 8390 },
  { name: 'Jul', value: 9490 },
];

const inventoryData = [
  { name: 'Week 1', stock: 4000, orders: 2400 },
  { name: 'Week 2', stock: 3000, orders: 1398 },
  { name: 'Week 3', stock: 2000, orders: 9800 },
  { name: 'Week 4', stock: 2780, orders: 3908 },
];

const treemapData = [
  { name: 'Fabrics', size: 12000 },
  { name: 'Raw Yarn', size: 8000 },
  { name: 'FMCG Food', size: 6000 },
  { name: 'FMCG Drinks', size: 4500 },
  { name: 'Parts', size: 3000 },
];

const TREEMAP_COLORS = ['#0F172A', '#1E293B', '#334155', '#06B6D4', '#0891B2', '#0E7490'];

const CustomTreemapContent = (props: any) => {
  const { x, y, width, height, name, index } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={TREEMAP_COLORS[index % TREEMAP_COLORS.length]}
        stroke="#ffffff"
        strokeWidth={2}
        rx={4}
      />
      {width > 50 && height > 30 && (
        <text
          x={x + 8}
          y={y + 24}
          fill="#fff"
          fontSize={12}
          fontWeight="bold"
        >
          {name}
        </text>
      )}
    </g>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="flex w-full h-full bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex w-60 bg-white border-r border-slate-200 flex-col p-4 flex-shrink-0 z-10">
        <div className="mb-8">
          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-4">Client Portal</p>
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('overview')}
              className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors", activeTab === 'overview' ? "bg-slate-100 text-[#0F172A]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700")}
            >
              <Activity className="h-4 w-4" /> Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('inventory')}
              className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors", activeTab === 'inventory' ? "bg-slate-100 text-[#0F172A]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700")}
            >
              <Package className="h-4 w-4" /> CSV Engine
            </button>
            <button 
              onClick={() => setActiveTab('ai-insights')}
              className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors", activeTab === 'ai-insights' ? "bg-cyan-50 text-cyan-700" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700")}
            >
              <Sparkles className="h-4 w-4" /> AI Insights
            </button>
            <button 
              onClick={() => setActiveTab('reports')}
              className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors", activeTab === 'reports' ? "bg-slate-100 text-[#0F172A]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700")}
            >
              <FileText className="h-4 w-4" /> Auto-Reports
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors", activeTab === 'billing' ? "bg-slate-100 text-[#0F172A]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700")}
            >
              <CreditCard className="h-4 w-4" /> Billing
            </button>
            <button 
              onClick={() => setActiveTab('team')}
              className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-cyan-600 font-medium", activeTab === 'team' ? "bg-slate-100" : "hover:bg-slate-50")}
            >
              <Users className="h-4 w-4" /> <span className="opacity-70 text-xs mr-1">+91</span> WhatsApp Sync
            </button>
          </nav>
        </div>

        <div className="mt-auto p-4 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-xs text-slate-500 italic pb-3 border-b border-slate-200 mb-3">"As you observe your SME scaling, you will <strong className="font-semibold text-slate-700">feel the confidence</strong> of total data control."</p>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">
                BS
             </div>
             <div>
                <p className="text-[10px] font-bold text-[#0F172A]">B. Suryavanshi</p>
                <p className="text-[9px] text-slate-400">Founder & Lead Advisor</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header (Optional internal search from original app) */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between flex-shrink-0 z-10 w-full">
          <div className="flex bg-slate-50 rounded-lg px-4 py-2 w-96 items-center border border-slate-200 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500">
            <Search className="h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search reports or metrics..." 
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm ml-2 w-full text-slate-700"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-[#06B6D4] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500 transition-colors shadow-sm">
              <Download className="h-4 w-4" /> Export
            </button>
            <button className="text-slate-400 hover:text-[#0F172A] relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>
            <div className="h-8 w-8 bg-slate-100 justify-center items-center flex rounded-full font-bold text-[#0F172A] text-xs border border-slate-300">
              MC
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto w-full">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
              {/* Left Column (spans 2) - Primary Dashboard Content */}
              <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                <header>
              <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">Executive Performance Blueprint</h1>
              <p className="text-slate-500 mt-1">Business Analytics Gujarat | Manufacturing & Textile Sector Insights</p>
            </header>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                 <p className="text-xs text-slate-400 font-bold uppercase mb-1">Monthly ROI</p>
                 <h2 className="text-2xl font-bold text-[#0F172A]">₹48,290</h2>
                 <div className="w-full bg-slate-100 h-1 mt-2 rounded-full overflow-hidden">
                   <div className="bg-[#06B6D4] w-3/4 h-full rounded-full"></div>
                 </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                 <p className="text-xs text-slate-400 font-bold uppercase mb-1">Data Efficiency</p>
                 <h2 className="text-2xl font-bold text-[#0F172A]">98.2%</h2>
                 <div className="w-full bg-slate-100 h-1 mt-2 rounded-full overflow-hidden">
                   <div className="bg-emerald-500 w-[98%] h-full rounded-full"></div>
                 </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                 <p className="text-xs text-slate-400 font-bold uppercase mb-1">SME Tenants</p>
                 <h2 className="text-2xl font-bold text-[#0F172A]">412</h2>
                 <div className="w-full bg-slate-100 h-1 mt-2 rounded-full overflow-hidden">
                   <div className="bg-slate-300 w-1/2 h-full rounded-full"></div>
                 </div>
              </div>
            </div>

            {/* Main Chart Area */}
            <div className="bg-white flex-1 rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col min-h-[300px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-700">Cross-Vertical Analytics Logic</h3>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded">FMCG</span>
                  <span className="text-[10px] bg-cyan-50 text-cyan-700 font-medium px-2 py-1 rounded">Textile</span>
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded">Logistics</span>
                </div>
              </div>
              <div className="flex-1 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94A3B8', fontWeight: 'bold', textTransform: 'uppercase' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94A3B8' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' }}
                      itemStyle={{ color: '#0F172A', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#06B6D4" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Secondary Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-[300px]">
                <h3 className="font-bold text-slate-700 mb-6">Stock vs Orders</h3>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={inventoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94A3B8', fontWeight: 'bold', textTransform: 'uppercase' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94A3B8' }} />
                      <Tooltip 
                        cursor={{ fill: '#F8FAFC' }}
                        contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' }}
                      />
                      <Bar dataKey="stock" fill="#0F172A" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="orders" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-[300px]">
                <h3 className="font-bold text-slate-700 mb-6">Market Distribution</h3>
                <div className="flex-1 w-full">
                   <ResponsiveContainer width="100%" height="100%">
                    <Treemap
                      data={treemapData}
                      dataKey="size"
                      aspectRatio={4 / 3}
                      stroke="#fff"
                      fill="#0F172A"
                      content={<CustomTreemapContent />}
                    >
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' }}
                      />
                    </Treemap>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column (spans 1) - Milton Blueprint Box */}
          <div className="col-span-1 flex flex-col gap-6">
            <div className="bg-[#0F172A] text-white p-6 rounded-2xl flex flex-col h-full border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#06B6D4] opacity-10 rounded-full blur-3xl mix-blend-screen"></div>
              
              <div className="mb-4 relative z-10">
                <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">The Milton Blueprint</span>
                <h4 className="text-xl font-light mt-2 leading-snug">Presupposing Your Future Growth</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed italic relative z-10">
                "When your revenue begins to scale using our insights, you will discover that <strong className="font-semibold text-white">choosing Shreem Analytics</strong> was the natural step for your FMCG or Textile plant."
              </p>
              
              <div className="mt-8 space-y-5 relative z-10">
                <p className="text-xs font-medium leading-relaxed text-slate-400">
                  Would you prefer to see a demo of your industry's dashboard now, or would you rather we discuss your specific ROI goals on WhatsApp?
                </p>
                <a href="https://wa.me/919824048748" className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-sm text-sm text-center">
                  Direct Line: +91 98240 48748
                </a>
              </div>
              
              <div className="mt-auto border-t border-slate-700/50 pt-6 relative z-10">
                <p className="text-[9px] text-slate-400 uppercase tracking-widest mb-2 font-bold">Automation Active</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                  <span className="text-xs text-slate-300">Monday Morning Reports Armed</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'ai-insights' && (
        <div className="p-8 max-w-4xl mx-auto flex flex-col gap-6 h-full w-full">
           <header className="mb-4">
             <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">AI Insights Engine</h1>
             <p className="text-slate-500 mt-1">Chat directly with your dataset for automated supply chain revelations.</p>
           </header>
           <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
             <div className="flex-1 p-6 overflow-y-auto relative">
                <div className="absolute inset-0 bg-slate-50 flex items-center justify-center pointer-events-none p-6 text-center">
                   <div>
                     <Sparkles className="w-12 h-12 text-[#06B6D4] mx-auto mb-4 opacity-50" />
                     <p className="text-slate-400 font-medium max-w-sm">"Ask me about supply bottlenecks, inventory thresholds, or weekly efficiency trends."</p>
                   </div>
                </div>
             </div>
             <div className="p-4 border-t border-slate-200 bg-slate-50">
                <div className="flex bg-white rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 p-2 gap-2 shadow-sm">
                  <input 
                    type="text" 
                    placeholder="e.g., Which region had the lowest fulfillment rate last week?" 
                    className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm flex-1 text-slate-700 px-2"
                  />
                  <button className="bg-[#0F172A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap">
                    Generate Insight
                  </button>
                </div>
             </div>
           </div>
        </div>
      )}

      {activeTab === 'billing' && (
        <div className="p-8 max-w-3xl mx-auto flex flex-col items-center text-center justify-center h-full w-full">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
               <Lock className="w-8 h-8 text-emerald-500" />
            </div>
            <h1 className="text-4xl font-bold text-[#0F172A] tracking-tight mb-4">Secure Checkout</h1>
            <p className="text-slate-500 mb-8 max-w-lg text-lg">
              You requested secure, automated billing via Stripe. To protect your payment details, full stripe checkout will be activated post-demo.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md text-left">
               <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-4">
                  <div>
                    <p className="font-bold text-[#0F172A]">Enterprise Subscription</p>
                    <p className="text-xs text-slate-500">Billed monthly</p>
                  </div>
                  <p className="text-xl font-bold text-[#0F172A]">₹15,000</p>
               </div>
               <ul className="space-y-3 mb-8">
                 <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Unlimited Data Sources</li>
                 <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Monday Morning PDF Automation</li>
                 <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> AI Insights Engine</li>
                 <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Priority WhatsApp Support</li>
               </ul>
               <button className="w-full bg-[#0F172A] text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2">
                 <CreditCard className="w-4 h-4" /> Mock Payment Interface
               </button>
            </div>
        </div>
      )}

      {(activeTab !== 'overview' && activeTab !== 'ai-insights' && activeTab !== 'billing') && (
        <div className="p-8 flex items-center justify-center h-full text-slate-400 w-full">
           Page under construction for the demo.
        </div>
      )}

    </div>
      </main>
    </div>
  );
}
