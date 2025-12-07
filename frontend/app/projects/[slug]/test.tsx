import React from 'react';
import { ArrowUpRight, Github, ChevronRight, ArrowLeft } from 'lucide-react';

const CaseStudyRevamp = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
    

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* 2. HERO SECTION & META DATA (Perbaikan Konteks) */}
        <div className="mb-12">
          <a href="#" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-6 group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Works
          </a>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Praxis</h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            A privacy-focused platform helping creatives build websites that work as hard as they do without compromising user data.
          </p>

          {/* New: Project Meta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 py-6 border-y border-slate-100">
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Role</span>
              <span className="font-medium">Product Designer</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Timeline</span>
              <span className="font-medium">Dec 3, 2025 (4 Weeks)</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Team</span>
              <span className="font-medium">2 Devs, 1 PM</span>
            </div>
             <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Stack</span>
              <span className="font-medium">Next.js, Sanity</span>
            </div>
          </div>
        </div>

        {/* 3. HERO IMAGE (Full Width untuk Impact) */}
        <div className="w-full aspect-[16/9] bg-blue-600 rounded-2xl overflow-hidden shadow-2xl shadow-blue-200 mb-16 relative group">
           {/* Placeholder untuk gambar hero asli */}
           <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-gradient-to-br from-blue-600 to-indigo-700">
             <span className="text-lg">Hero Image Container</span>
           </div>
        </div>

        {/* 4. CONTENT BLOCKS (Typography yang lebih enak dibaca) */}
        <article className="prose prose-slate prose-lg max-w-none">
          
          {/* Section: The Challenge */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 m-0">The Challenge</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-slate-600 leading-relaxed mt-0">
                One major challenge was ensuring privacy while maintaining an easy-to-use interface. Users are often overwhelmed by complex settings menus. Our team developed an accessible settings architecture that puts users in control without the cognitive load.
              </p>
            </div>
          </div>

          {/* Section: The Solution (Gambar + Teks) */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Designing an Ad-Free Flow</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              We achieved this by focusing on rich content rather than disruptive banners. The interface prioritizes content hierarchy using whitespace and bold typography.
            </p>
            
            {/* Grid Gambar Besar (Perbaikan dari gambar kecil sebelumnya) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center min-h-[300px] border border-slate-100">
                 <span className="text-slate-400 text-sm">Mobile UI Mockup 1</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-8 flex items-center justify-center min-h-[300px] border border-slate-100">
                 <span className="text-slate-400 text-sm">Mobile UI Mockup 2</span>
              </div>
            </div>
          </div>

          {/* Section: Design Philosophy (Grid 2x2 untuk detail UI) */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Minimalism as a Function</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              In an age where attention spans are shrinking, minimalism communicates professionalism. Here is how we handled empty states and login flows.
            </p>

            {/* Grid 2x2 agar detail terlihat jelas */}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
               {[1, 2, 3, 4].map((item) => (
                 <div key={item} className="aspect-[3/4] bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-zoom-in">
                    <span className="text-xs text-slate-400">UI Detail {item}</span>
                 </div>
               ))}
            </div>
          </div>
        </article>

        {/* 5. IMPACT SECTION (Dibuat Visual & Data-Driven) */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8">Impact & Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="border-l border-white/20 pl-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wide">Optimization Score</div>
              </div>
              <div className="border-l border-white/20 pl-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">12%</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wide">Conversion Uplift</div>
              </div>
              <div className="border-l border-white/20 pl-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">A+</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wide">Accessibility Rating</div>
              </div>
            </div>

            <p className="text-slate-300 max-w-xl mb-8">
              "I successfully converted the chaotic legacy settings into a streamlined flow, resulting in higher user retention and positive feedback on the App Store."
            </p>

            {/* 6. CTA BUTTONS (Lebih solid dibanding link teks) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2">
                View Live Site
                <ArrowUpRight size={18} />
              </button>
              <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2">
                Explore Prototype
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* 7. FOOTER NAVIGATION (Next Project) */}
        <div className="border-t border-slate-100 pt-12 flex justify-between items-center">
            <div className="text-sm text-slate-400">© 2025 Praxis Case Study</div>
            <a href="#" className="group text-right">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Next Project</span>
              <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-2">
                Fintech Dashboard <ArrowUpRight size={18} />
              </span>
            </a>
        </div>

      </main>

      {/* Grid background for texture (Optional) */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};

export default CaseStudyRevamp;