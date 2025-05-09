"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 lg:pb-24 lg:pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-background"></div>
      
      {/* Enhanced background elements for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.15] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Mobile-specific glowing spots */}
      <div className="absolute top-8 left-4 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl sm:hidden"></div>
      <div className="absolute top-20 right-4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-300/20 blur-xl sm:hidden"></div>
      <div className="absolute top-[70%] left-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-400/20 blur-xl -translate-x-1/2 -translate-y-1/2 sm:hidden"></div>
      
      <div className="absolute -top-2 left-0 right-0 h-[500px] rounded-b-[50%] bg-gradient-to-r from-slate-50/80 via-blue-50/80 to-slate-50/80 backdrop-blur-3xl mix-blend-soft-light"></div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600/40 to-indigo-600/40 mix-blend-normal sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      
      {/* Mobile noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] bg-repeat sm:hidden"></div>
      
      {/* Blended geometric elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200/40 to-transparent rounded-full mix-blend-overlay blur-2xl"></div>
      <div className="absolute -bottom-10 left-0 w-full h-1/2 bg-gradient-to-t from-slate-100/30 to-transparent opacity-60 mix-blend-normal"></div>
      
      {/* Blended circles */}
      <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full border border-blue-200/40 mix-blend-overlay"></div>
      <div className="absolute right-10 top-1/3 w-32 h-32 rounded-full border border-indigo-200/40 mix-blend-overlay"></div>
      <div className="absolute left-1/2 bottom-20 w-48 h-48 rounded-full border border-blue-100/40 mix-blend-overlay"></div>
      
      {/* Harmonious accent elements */}
      <div className="absolute -right-20 top-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl mix-blend-overlay"></div>
      <div className="absolute left-20 top-1/2 w-24 h-24 bg-gradient-to-tr from-teal-400/20 to-blue-400/20 rounded-full blur-xl mix-blend-overlay"></div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile exclusive floating UI elements */}
        <div className="absolute top-2 right-2 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-lg animate-pulse sm:hidden"></div>
        <div className="absolute -bottom-4 left-4 w-16 h-16 rounded-full border-2 border-dashed border-blue-400/20 sm:hidden"></div>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            {/* Enhanced mobile badge */}
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-600 shadow-md backdrop-blur-sm lg:justify-start">
              <div className="relative">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping absolute inline-flex opacity-75"></span>
                <span className="flex h-2 w-2 rounded-full bg-blue-600 relative inline-flex"></span>
              </div>
              <span className="relative">
                Your Personal AI tutor
                <span className="hidden sm:inline-block absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-200/50"></span>
              </span>
            </div>
            
            <div className="space-y-6">
              {/* Mobile-optimized headline with glowy effect */}
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:leading-[1.05]" style={{ fontFamily: "var(--font-inter)" }}>
                <span className="relative z-10 inline-block after:absolute after:-z-10 after:bottom-2 after:left-0 after:h-4 after:w-full after:bg-blue-100 after:opacity-70 sm:after:h-6 md:after:h-8">
                  Master ANY skill
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200/0 via-indigo-300/30 to-blue-200/0 blur-lg -z-10 opacity-0 sm:opacity-50"></span>
                </span> with <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent relative">
                  personalized
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 blur-lg -z-10 opacity-0 sm:opacity-50"></span>
                </span> learning journeys
              </h1>
              <p className="mx-auto text-lg text-gray-600 lg:mx-0 lg:text-xl">
                Transform your goals into achievable daily tasks. Our AI creates customized 
                learning paths that adapt to your schedule and learning style.
              </p>
            </div>
            
            {/* Enhanced CTA section for mobile */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/create-roadmap"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-base font-medium text-white shadow-lg transition-all hover:shadow-blue-500/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:w-auto"
              >
                <span className="relative z-10">Create Your Roadmap</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm px-8 text-base font-medium text-gray-800 shadow-sm transition-colors hover:bg-white hover:border-blue-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 sm:w-auto"
              >
                See how it works
              </Link>
            </div>

            {/* Mobile-enhanced trust signals */}
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <div className="flex -space-x-2 relative">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-white ring-2 ring-white/30 transition-transform hover:scale-110 hover:z-10">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                      alt={`User ${i + 1}`}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover bg-blue-100"
                    />
                  </div>
                ))}
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 ring-2 ring-white sm:hidden">
                  <span className="h-2 w-2 rounded-full bg-green-300 animate-ping absolute"></span>
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 text-amber-400"
                    >
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium text-gray-700">5.0</span>
                <span className="text-gray-500">from over</span>
                <span className="relative font-bold text-gray-900">
                  5,000+
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0"></span>
                </span>
                <span className="text-gray-500">learners</span>
              </div>
            </div>
          </div>
          
          {/* Mobile-optimized card with enhanced visual cues */}
          <div className="relative flex items-center justify-center lg:justify-end pt-10 lg:pt-24">
            <div className="absolute -right-20 -top-10 h-32 w-32 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
            <div className="absolute bottom-10 -left-20 h-32 w-32 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>
            
            {/* Mobile UI decorations */}
            <div className="absolute -top-6 left-0 w-full h-12 bg-gradient-to-r from-blue-500/5 via-indigo-500/10 to-blue-500/5 blur-xl sm:hidden"></div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400/0 via-indigo-400/70 to-blue-400/0 rounded-full sm:hidden"></div>
            
            <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm shadow-[0_10px_50px_rgba(8,_112,_184,_0.2)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/30 opacity-80"></div>
              
              {/* Mobile shimmer effect */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite] sm:hidden"></div>
              
              {/* Card header with clearer product identity */}
              <div className="relative z-10 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-blue-100 px-3 py-1.5 shadow-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span className="text-xs font-medium text-gray-800">Your Learning Roadmap</span>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-2.5 py-1 text-xs font-medium text-white shadow-sm">
                    AI-Optimized
                  </div>
                </div>
                
                <div className="mb-5 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-3 border border-blue-100">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <path d="M12 18v-6"/>
                      <path d="M8 15h8"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Your path to <span className="font-bold text-blue-700">Full-Stack Development</span></p>
                      <p className="text-xs text-gray-500 mt-0.5">Personalized • 5 hours/week • 12 weeks</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Your Daily Plan</h3>
                    <span className="text-xs font-medium text-blue-600">35% Complete</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-blue-100 p-1.5 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                            <path d="M10 16h4"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900 text-sm">Day 26: JavaScript Functions</h4>
                              <p className="mt-0.5 text-xs text-gray-500">Today • 45 min estimated</p>
                            </div>
                            <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full">Today</span>
                          </div>
                          <div className="mt-2 flex gap-2 text-xs">
                            <div className="flex-1 rounded-lg bg-gray-50 p-2 border border-gray-100">
                              <span className="font-medium text-gray-700 block text-[11px]">Morning: Function declarations</span>
                            </div>
                            <div className="flex-1 rounded-lg bg-gray-50 p-2 border border-gray-100">
                              <span className="font-medium text-gray-700 block text-[11px]">Evening: Scope & closures</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-blue-100/50 p-1.5 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500/70">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                            <path d="M10 16h4"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-gray-700 text-sm">Day 27: DOM Manipulation</h4>
                            <span className="text-xs text-gray-400">Tomorrow</span>
                          </div>
                          <p className="mt-0.5 text-xs text-gray-500">Interactive web elements • 55 min</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-blue-100/50 p-1.5 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500/70">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                            <path d="M10 16h4"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-gray-700 text-sm">Day 28: Event Listeners</h4>
                            <span className="text-xs text-gray-400">In 2 days</span>
                          </div>
                          <p className="mt-0.5 text-xs text-gray-500">Make pages interactive • 50 min</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced mobile CTA card */}
                <div className="mt-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.03]"></div>
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200">
                          <path d="M12 2v4"></path>
                          <path d="M12 18v4"></path>
                          <path d="m4.93 10.93 2.83-2.83"></path>
                          <path d="M16.24 16.24 19.07 19.07"></path>
                          <path d="M2 12h4"></path>
                          <path d="M18 12h4"></path>
                          <path d="m10.93 4.93-2.83-2.83"></path>
                          <path d="M16.24 7.76 19.07 4.93"></path>
                        </svg>
                        <div className="text-xs font-medium text-blue-100">Ready for today's progress?</div>
                      </div>
                      <div className="mt-1 text-sm font-semibold">JavaScript Functions</div>
                      <div className="mt-0.5 text-xs text-blue-100">Stay on track for your certification</div>
                    </div>
                    <Button size="sm" className="rounded-full bg-white text-blue-700 px-4 py-1.5 shadow-md hover:bg-blue-50 transition-colors text-xs font-medium">
                      Start Now
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <p className="text-[11px] text-gray-500">
                      On track for September completion
                    </p>
                  </div>
                  <div className="text-[11px] text-gray-500 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                    Updates daily
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile floating element at bottom */}
      <div className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg flex items-center justify-center sm:hidden z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-600 to-blue-700 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      
      {/* Grid background style */}
      <style jsx global>{`
        .grid-background {
          background-color: white;
          background-image:
            linear-gradient(#9ca3af 1.5px, transparent 1.5px),
            linear-gradient(to right, #9ca3af 1px, white 1px);
          background-size: 40px 40px;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
} 