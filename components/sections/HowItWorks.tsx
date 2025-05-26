"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/70 via-white to-white/90"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center opacity-[0.05]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-indigo-200 bg-white/90 px-4 py-1.5 shadow-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-indigo-500"></span>
            <span className="text-sm font-medium text-indigo-700">Simple Process</span>
          </div>
          
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl md:text-5xl" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>
            Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">learning journey</span> in three easy steps
          </h2>
          
          <p className="mx-auto max-w-xl text-lg text-slate-600">
            Create your personalized roadmap in minutes and start learning effectively
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl">
          {/* Step 1 */}
          <div className="relative">
            <div className="w-full rounded-xl border border-indigo-100/80 bg-white/90 p-6 shadow-xl backdrop-blur-sm lg:p-8">
              <div className="md:flex md:items-center md:gap-8">
                <div className="mb-6 flex justify-center md:mb-0 md:w-1/3">
                  <div className="relative h-48 w-48 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-md">
                    <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center opacity-30"></div>
                    <div className="relative flex h-full w-full items-center justify-center p-4">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-md">
                        <svg 
                          width="48" 
                          height="48" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12"
                        >
                          <defs>
                            <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#6366f1" />
                              <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                          </defs>
                          {/* Dartboard/Target with Arrow */}
                          <circle cx="12" cy="12" r="9" stroke="url(#gradient-1)" strokeWidth="1.5" />
                          <circle cx="12" cy="12" r="6" stroke="url(#gradient-1)" strokeWidth="1.5" />
                          <circle cx="12" cy="12" r="3" stroke="url(#gradient-1)" strokeWidth="1.5" />
                          <circle cx="12" cy="12" r="1" fill="url(#gradient-1)" />
                          <path d="M19 5L13 11" stroke="url(#gradient-1)" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M21 3L19 5L17 3" stroke="url(#gradient-1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="mb-3 text-center text-2xl font-bold text-slate-800 md:text-left" style={{ fontFamily: "'Onest', sans-serif" }}>Tell us what you want to learn</h3>
                  <p className="text-center text-lg text-slate-600 md:text-left">
                    Enter the specific skills or topics you're interested in mastering. Our AI analyzes your goals and creates a tailored learning path.
                  </p>
                  <div className="mt-6 rounded-lg bg-indigo-50/70 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-slate-700">We identify the most important skills and create a logical progression for your learning journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow connecting to next step - Desktop */}
            <div className="hidden md:block h-20 w-1 bg-gradient-to-b from-indigo-400 to-purple-400 mx-auto"></div>
            
            {/* Arrow connecting to next step - Mobile */}
            <div className="md:hidden flex justify-center">
              <div className="h-16 w-1 bg-gradient-to-b from-indigo-400 to-purple-400"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="w-full rounded-xl border border-indigo-100/80 bg-white/90 p-6 shadow-xl backdrop-blur-sm lg:p-8">
              <div className="md:flex md:items-center md:gap-8">
                <div className="mb-6 flex justify-center md:mb-0 md:w-1/3">
                  <div className="relative h-48 w-48 overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 shadow-md">
                    <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center opacity-30"></div>
                    <div className="relative flex h-full w-full items-center justify-center p-4">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-md">
                        <svg 
                          width="48" 
                          height="48" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12"
                        >
                          <defs>
                            <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#a855f7" />
                              <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                          </defs>
                          {/* Calendar Icon */}
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="url(#gradient-2)" strokeWidth="1.5" />
                          <line x1="3" y1="10" x2="21" y2="10" stroke="url(#gradient-2)" strokeWidth="1.5" />
                          <line x1="8" y1="2" x2="8" y2="6" stroke="url(#gradient-2)" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1="16" y1="2" x2="16" y2="6" stroke="url(#gradient-2)" strokeWidth="1.5" strokeLinecap="round" />
                          <rect x="7" y="14" width="4" height="4" rx="0.5" fill="url(#gradient-2)" />
                          <circle cx="16" cy="16" r="2" stroke="url(#gradient-2)" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="mb-3 text-center text-2xl font-bold text-slate-800 md:text-left" style={{ fontFamily: "'Onest', sans-serif" }}>Set your schedule</h3>
                  <p className="text-center text-lg text-slate-600 md:text-left">
                    Tell us how much time you can dedicate and your preferred learning days. Your roadmap adapts to your lifestyle and availability.
                  </p>
                  <div className="mt-6 rounded-lg bg-purple-50/70 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-purple-200 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-slate-700">Our algorithm optimizes your learning path based on cognitive science and your personal schedule</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow connecting to next step - Desktop */}
            <div className="hidden md:block h-20 w-1 bg-gradient-to-b from-purple-400 to-blue-400 mx-auto"></div>
            
            {/* Arrow connecting to next step - Mobile */}
            <div className="md:hidden flex justify-center">
              <div className="h-16 w-1 bg-gradient-to-b from-purple-400 to-blue-400"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="w-full rounded-xl border border-indigo-100/80 bg-white/90 p-6 shadow-xl backdrop-blur-sm lg:p-8">
              <div className="md:flex md:items-center md:gap-8">
                <div className="mb-6 flex justify-center md:mb-0 md:w-1/3">
                  <div className="relative h-48 w-48 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-md">
                    <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center opacity-30"></div>
                    <div className="relative flex h-full w-full items-center justify-center p-4">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-md">
                        <svg 
                          width="48" 
                          height="48" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12"
                        >
                          <defs>
                            <linearGradient id="gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                          </defs>
                          {/* Roadmap Icon */}
                          <path d="M3 6C3 4.34315 4.34315 3 6 3H8C9.65685 3 11 4.34315 11 6V8C11 9.65685 9.65685 11 8 11H6C4.34315 11 3 9.65685 3 8V6Z" stroke="url(#gradient-3)" strokeWidth="1.5" />
                          <path d="M13 16C13 14.3431 14.3431 13 16 13H18C19.6569 13 21 14.3431 21 16V18C21 19.6569 19.6569 21 18 21H16C14.3431 21 13 19.6569 13 18V16Z" stroke="url(#gradient-3)" strokeWidth="1.5" />
                          <path d="M11 7H13V13" stroke="url(#gradient-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 11L16 13" stroke="url(#gradient-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="7" cy="7" r="1" fill="url(#gradient-3)" />
                          <circle cx="17" cy="17" r="1" fill="url(#gradient-3)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="mb-3 text-center text-2xl font-bold text-slate-800 md:text-left" style={{ fontFamily: "'Onest', sans-serif" }}>Get your personalized roadmap</h3>
                  <p className="text-center text-lg text-slate-600 md:text-left">
                    Receive a detailed learning plan with daily tasks, resources, and progress tracking to keep you motivated and on track.
                  </p>
                  <div className="mt-6 rounded-lg bg-blue-50/70 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-slate-700">Your roadmap updates as you progress, adapting to your learning speed and feedback</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button 
            asChild
            className="group relative inline-flex h-12 w-full max-w-xs items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 sm:px-8 py-3 text-white transition-all duration-300 ease-out hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 sm:w-auto"
          >
            <Link href="/create-roadmap">
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <span className="relative flex items-center font-medium">
                Create your roadmap
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Add extra CSS for connecting arrows without margin */}
      <style jsx>{`
        .relative + .relative {
          margin-top: -1px; /* Remove gap between sections */
        }
      `}</style>
    </section>
  )
} 