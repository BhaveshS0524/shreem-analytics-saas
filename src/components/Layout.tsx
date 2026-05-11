import { Outlet, Link, useLocation } from "react-router";
import { cn } from "../lib/utils";
import { BarChart3, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 overflow-hidden">
      <header className="h-16 bg-[#0F172A] flex items-center justify-between px-4 sm:px-8 border-b border-slate-700 z-50 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#06B6D4] rounded flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">S</div>
            <span className="text-white font-semibold text-xl tracking-tight">Shreem Analytics</span>
            <span className="hidden md:inline-flex text-slate-400 text-[10px] border border-slate-600 px-2 py-0.5 rounded ml-2 uppercase tracking-widest">Enterprise</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "hover:text-white transition-colors",
                  isActive ? "text-white font-medium" : ""
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            to="/dashboard"
            className="bg-[#06B6D4] text-white px-5 py-2 rounded font-medium hover:bg-cyan-500 transition-colors"
          >
            Book Demo
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-slate-700 absolute w-full z-40 top-16">
          <div className="space-y-1 pb-4 pt-2 px-4 shadow-lg">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-3 py-3 text-base font-medium rounded-md",
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 pb-2">
               <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center rounded bg-[#06B6D4] px-4 py-3 text-base font-medium text-white hover:bg-cyan-500 transition-colors"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 flex flex-col w-full relative overflow-y-auto">
        <Outlet />
      </main>

      <footer className="h-12 bg-white border-t border-slate-200 flex items-center justify-between px-4 sm:px-8 text-[10px] text-slate-400 font-medium uppercase tracking-widest flex-shrink-0">
        <div>&copy; 2024 Shreem Analytics | Ahmedabad, Gujarat</div>
        <div className="hidden sm:flex gap-6">
          <span>Next.js</span>
          <span>Supabase</span>
          <span>Tailwind</span>
          <span>Stripe</span>
        </div>
      </footer>
    </div>
  );
}
