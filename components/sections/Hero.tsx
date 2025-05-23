"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-indigo-50/70 to-white pb-20 pt-16 lg:pb-32 lg:pt-24">
      {/* Grid pattern with gradient mask */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center"></div>
        {/* Gradient mask for top-to-bottom progression and lighter around headings */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent opacity-90"></div>
        {/* Extra radial gradient focused on heading area to make it lighter */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[120%] h-64 bg-radial-gradient from-white via-white to-transparent opacity-70"></div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-purple-200/20 blur-3xl"></div>
      
      {/* Line decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"></div>
      <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      <div className="absolute bottom-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Status indicator */}
          <div className="mx-auto mb-8 flex items-center justify-center md:mb-12">
            <div className="inline-flex items-center rounded-full border border-indigo-400/60 bg-white/90 px-3 py-1 shadow-sm backdrop-blur-sm">
              <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-indigo-500"></span>
              <span className="text-xs font-medium text-indigo-700">AI-Powered Learning Platform</span>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-center font-extrabold tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl" style={{ lineHeight: "1.05", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>
            <span className="block relative z-10">
              <span className="relative inline-block">
                Master
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-indigo-200/60 -skew-y-1 -z-10 transform"></span>
              </span>{" "}
              <span className="relative inline-block">
                any
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-indigo-200/60 -skew-y-1 -z-10 transform"></span>
              </span>{" "}
              <span className="relative inline-block">
                skill
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-indigo-200/60 -skew-y-1 -z-10 transform"></span>
              </span>
            </span>
            <div className="mt-3 block">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow-lg transform hover:scale-[1.03] transition-transform text-4xl sm:text-5xl font-black">
                AI-powered guidance
              </div>
            </div>
          </h1>
          
          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600 md:text-xl">
            Transform your learning goals into personalized daily plans. 
            Our AI adapts to your schedule and learning style for maximum progress.
          </p>
          
          {/* CTA Button */}
          <div className="mt-10 flex flex-col items-center justify-center">
            <Button 
              asChild
              className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-3 text-white transition-all duration-300 ease-out hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 sm:w-auto"
            >
              <Link href="/create-roadmap">
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                <span className="relative flex items-center font-medium">
                  Create your roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-white ring-2 ring-indigo-100">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${i + 1}`}
                      alt={`User ${i + 1}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium text-slate-700">5,000+ users</p>
              </div>
            </div>
            
            <div className="h-10 border-l border-indigo-200/50 hidden sm:block"></div>
            
            <div className="flex items-center">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium text-slate-700">4.9/5 rating</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-xl border border-indigo-200/50 bg-white/90 p-3 shadow-xl backdrop-blur-sm">
          {/* Dashboard with a consistent grid pattern */}
          <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/30 to-purple-50/30"></div>
          
          {/* Glass effect container */}
          <div className="relative overflow-hidden rounded-lg border border-indigo-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex h-10 items-center border-b border-indigo-200/50 bg-indigo-50/80 px-4">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
                <div className="text-xs font-medium text-indigo-700">learning-path.app</div>
              </div>
            </div>
            
            <div className="px-4 py-6 bg-gradient-to-b from-white/30 to-transparent">
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="rounded-lg border border-indigo-200/50 bg-white/90 p-4 shadow-md backdrop-blur-sm">
                    <h3 className="mb-3 text-sm font-medium text-indigo-700">Your Learning Path</h3>
                    <div className="mb-4 rounded-md border border-indigo-200/50 bg-indigo-50/50 p-3">
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-600 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-slate-800">Web Development</div>
                          <div className="text-xs text-indigo-600">12-week program</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-xs font-medium text-indigo-600">45% Completed</div>
                      <div className="text-xs text-indigo-600">53 days left</div>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-indigo-100">
                      <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm"></div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-8">
                  <div className="rounded-lg border border-indigo-200/50 bg-white/90 p-4 shadow-md backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-sm font-medium text-indigo-700">Today's Learning</h3>
                      <div className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-600 shadow-sm">Thu, May 23</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="rounded-md border border-green-200 bg-green-50/80 p-3 shadow-sm backdrop-blur-sm">
                        <div className="flex items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-slate-800">JavaScript Fundamentals</div>
                              <div className="text-xs text-green-600">Completed</div>
                            </div>
                            <div className="text-xs text-indigo-600">45 min</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-md border border-indigo-200 bg-indigo-50/80 p-3 shadow-sm backdrop-blur-sm">
                        <div className="flex items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-slate-800">DOM Manipulation</div>
                              <div className="text-xs text-indigo-600">In progress</div>
                            </div>
                            <div className="text-xs text-indigo-600">60 min</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-md border border-slate-200 bg-slate-50/80 p-3 shadow-sm backdrop-blur-sm">
                        <div className="flex items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-slate-100 to-slate-200 text-slate-500 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="16"></line>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-slate-600">Building Interactive Forms</div>
                              <div className="text-xs text-slate-500">Up next</div>
                            </div>
                            <div className="text-xs text-slate-500">50 min</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 h-12 w-12 rounded-full border border-indigo-200 bg-indigo-50 shadow-md"></div>
          <div className="absolute -bottom-6 -right-6 h-12 w-12 rounded-full border border-indigo-200 bg-indigo-50 shadow-md"></div>
          <div className="absolute top-1/2 -right-6 h-24 w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-transparent via-indigo-300/40 to-transparent"></div>
          <div className="absolute top-1/2 -left-6 h-24 w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-transparent via-indigo-300/40 to-transparent"></div>
        </div>
        
        {/* Code-like decorative element */}
        <div className="absolute bottom-12 left-4 hidden md:block">
          <div className="rounded-lg border border-indigo-200/50 bg-white/80 p-3 backdrop-blur-sm shadow-md">
            <pre className="text-xs text-indigo-600/70">
              <code>{`// Your next milestone
const nextMilestone = {
  goal: "JavaScript Mastery",
  daysLeft: 7,
  confidence: 0.92
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0) 70%);
        }
      `}</style>
    </section>
  )
} 