import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7 text-teal-500"
            >
              <path d="M8 3v3a2 2 0 0 1-2 2H3" />
              <path d="M21 8V5a2 2 0 0 0-2-2H8" />
              <path d="M3 16v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3" />
              <path d="M16 3v12a2 2 0 0 1-2 2H3" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "var(--font-inter)" }}>LearnPath</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              How it works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Success Stories
            </Link>
            <Button variant="outline" size="sm" className="rounded-full px-4">
              Sign in
            </Button>
            <Button size="sm" className="rounded-full bg-teal-500 px-4 hover:bg-teal-600">
              Get Started
            </Button>
          </nav>
          <div className="flex md:hidden">
            <Button variant="ghost" size="sm" className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden pb-16 pt-10 lg:pb-24 lg:pt-16">
          {/* Well-blended professional background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.15] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute -top-2 left-0 right-0 h-[500px] rounded-b-[50%] bg-gradient-to-r from-slate-50/80 via-blue-50/80 to-slate-50/80 backdrop-blur-3xl mix-blend-soft-light"></div>
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600/40 to-indigo-600/40 mix-blend-normal sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          
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
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                {/* Refined badge */}
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm lg:justify-start">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                  AI-Powered Learning Platform
                </div>
                
                <div className="space-y-6">
                  {/* Enhanced, more prominent headline */}
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:leading-[1.05]" style={{ fontFamily: "var(--font-inter)" }}>
                    <span className="relative z-10 inline-block after:absolute after:-z-10 after:bottom-2 after:left-0 after:h-4 after:w-full after:bg-blue-100 after:opacity-70 sm:after:h-6 md:after:h-8">Master any skill</span> with <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">personalized</span> learning journeys
                  </h1>
                  <p className="mx-auto text-lg text-gray-600 lg:mx-0 lg:text-xl">
                    Transform your goals into achievable daily tasks. Our AI creates customized 
                    learning paths that adapt to your schedule and learning style.
                  </p>
                </div>
                
                {/* Refined CTA section */}
                <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <Link
                    href="/create-roadmap"
                    className="inline-flex h-14 w-full items-center justify-center rounded-full bg-blue-600 px-8 text-base font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:w-auto"
                  >
                    Create Your Roadmap
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-base font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-50 hover:border-blue-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 sm:w-auto"
                  >
                    See how it works
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row lg:justify-start">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-white ring-2 ring-white/30">
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                          alt={`User ${i + 1}`}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover bg-blue-100"
                        />
                      </div>
                    ))}
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
                    <span className="font-bold text-gray-900">5,000+</span>
                    <span className="text-gray-500">learners</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced card with clearer use case */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="absolute -right-20 -top-10 h-32 w-32 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
                <div className="absolute bottom-10 -left-20 h-32 w-32 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>
                
                <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/30 opacity-80"></div>
                  
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
                    
                    {/* Updated call-to-action card with clearer value proposition */}
                    <div className="mt-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-md text-white">
                      <div className="flex items-center justify-between">
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
          
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-600 to-blue-700 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-600 shadow-sm mb-4">
                <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                The Science of Learning
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-inter)" }}>
                Proven principles behind <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">effective learning</span>
              </h2>
              <p className="mt-6 text-xl text-gray-500">
                Our platform is built on science-backed learning methods that help you master skills faster and retain knowledge longer.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative flex flex-col h-full items-center rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-white"
                    >
                      <path d="M12 2v8"></path>
                      <path d="m4.93 10.93 1.41 1.41"></path>
                      <path d="M2 18h2"></path>
                      <path d="M20 18h2"></path>
                      <path d="m19.07 10.93-1.41 1.41"></path>
                      <path d="M22 22H2"></path>
                      <path d="m16 6-4 4-4-4"></path>
                      <path d="M16 18a4 4 0 0 0-8 0"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Spaced Repetition</h3>
                  <p className="mt-4 text-center text-gray-600">
                    Our roadmaps use scientifically-proven spaced repetition to help you remember what you learn for the long term.
                  </p>
                  <div className="mt-6 border-t border-gray-100 pt-6 w-full">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Retention increase</span>
                      <span className="font-semibold text-teal-600">+92%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative flex flex-col h-full items-center rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-white"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                      <path d="M10 2c1 .5 2 2 2 5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Microlearning</h3>
                  <p className="mt-4 text-center text-gray-600">
                    Break down complex topics into bite-sized daily tasks that fit perfectly into your busy schedule.
                  </p>
                  <div className="mt-6 border-t border-gray-100 pt-6 w-full">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Completion rate</span>
                      <span className="font-semibold text-purple-600">+78%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative flex flex-col h-full items-center rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-white"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Active Recall</h3>
                  <p className="mt-4 text-center text-gray-600">
                    Our system encourages you to actively engage with the material, not just passively consume it.
                  </p>
                  <div className="mt-6 border-t border-gray-100 pt-6 w-full">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Knowledge retention</span>
                      <span className="font-semibold text-blue-600">3x higher</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-20 max-w-5xl">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 shadow-xl">
                <div className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2 bg-[url('/pattern.svg')] bg-cover opacity-10"></div>
                <div className="relative z-10 px-8 py-12 sm:px-12 lg:px-16">
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="max-w-xl">
                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Ready to accelerate your learning journey?
                      </h3>
                      <p className="mt-4 text-lg text-teal-100">
                        Create your personalized roadmap today and start making meaningful progress toward your goals.
                      </p>
                    </div>
                    <div className="mt-8 md:mt-0">
                      <Link
                        href="/create-roadmap"
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-teal-600 shadow-md transition-colors hover:bg-gray-50 hover:text-teal-700"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-600 shadow-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                Simple Process
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-inter)" }}>
                  Your <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">learning journey</span> in three easy steps
                </h2>
                <p className="mx-auto max-w-xl text-xl text-gray-500">
                  Create your personalized roadmap in minutes and start learning effectively
                </p>
              </div>
            </div>

            <div className="relative mx-auto mt-20 max-w-6xl">
              {/* Connect line */}
              <div className="absolute left-[50%] top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-teal-400 via-purple-400 to-blue-400 opacity-20 md:left-20 md:translate-x-0"></div>

              {/* Step 1 */}
              <div className="relative mb-16 md:ml-28">
                <div className="absolute left-[50%] top-0 -translate-x-1/2 md:left-[-28px] md:translate-x-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 shadow-lg">
                    <span className="text-lg font-bold text-white">1</span>
                  </div>
                </div>
                <div className="ml-0 rounded-xl bg-white p-6 shadow-xl md:ml-8 lg:p-8">
                  <div className="md:flex md:items-center md:gap-8">
                    <div className="mb-6 flex justify-center md:mb-0 md:w-1/3">
                      <div className="relative h-48 w-48 overflow-hidden rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 p-2">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
                        <div className="relative h-full w-full rounded-lg bg-white/80 p-4">
                          <div className="flex h-full w-full items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-20 w-20 text-teal-400"
                            >
                              <path d="M2 12h10" />
                              <path d="M9 4v16" />
                              <path d="M14 9l3 3-3 3" />
                              <path d="M17 12h5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="mb-3 text-center text-2xl font-bold text-gray-900 md:text-left">Tell us what you want to learn</h3>
                      <p className="text-center text-lg text-gray-600 md:text-left">
                        Enter the specific skills or topics you're interested in mastering. Our AI analyzes your goals and creates a tailored learning path.
                      </p>
                      <div className="mt-6 rounded-lg bg-teal-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </div>
                          <p className="text-sm text-gray-700">We identify the most important skills and create a logical progression for your learning journey</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-16 md:ml-28">
                <div className="absolute left-[50%] top-0 -translate-x-1/2 md:left-[-28px] md:translate-x-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg">
                    <span className="text-lg font-bold text-white">2</span>
                  </div>
                </div>
                <div className="ml-0 rounded-xl bg-white p-6 shadow-xl md:ml-8 lg:p-8">
                  <div className="md:flex md:items-center md:gap-8">
                    <div className="mb-6 flex justify-center md:mb-0 md:w-1/3">
                      <div className="relative h-48 w-48 overflow-hidden rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-2">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
                        <div className="relative h-full w-full rounded-lg bg-white/80 p-4">
                          <div className="flex h-full w-full items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-20 w-20 text-purple-400"
                            >
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                              <line x1="16" x2="16" y1="2" y2="6" />
                              <line x1="8" x2="8" y1="2" y2="6" />
                              <line x1="3" x2="21" y1="10" y2="10" />
                              <path d="M8 14h.01" />
                              <path d="M12 14h.01" />
                              <path d="M16 14h.01" />
                              <path d="M8 18h.01" />
                              <path d="M12 18h.01" />
                              <path d="M16 18h.01" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="mb-3 text-center text-2xl font-bold text-gray-900 md:text-left">Set your schedule</h3>
                      <p className="text-center text-lg text-gray-600 md:text-left">
                        Tell us how much time you can dedicate and your preferred learning days. Your roadmap adapts to your lifestyle and availability.
                      </p>
                      <div className="mt-6 rounded-lg bg-purple-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </div>
                          <p className="text-sm text-gray-700">Our algorithm optimizes your learning path based on cognitive science and your personal schedule</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-16 md:ml-28">
                <div className="absolute left-[50%] top-0 -translate-x-1/2 md:left-[-28px] md:translate-x-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg">
                    <span className="text-lg font-bold text-white">3</span>
                  </div>
                </div>
                <div className="ml-0 rounded-xl bg-white p-6 shadow-xl md:ml-8 lg:p-8">
                  <div className="md:flex md:items-center md:gap-8">
                    <div className="mb-6 flex justify-center md:mb-0 md:w-1/3">
                      <div className="relative h-48 w-48 overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-2">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
                        <div className="relative h-full w-full rounded-lg bg-white/80 p-4">
                          <div className="flex h-full w-full items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-20 w-20 text-blue-400"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="mb-3 text-center text-2xl font-bold text-gray-900 md:text-left">Get your personalized roadmap</h3>
                      <p className="text-center text-lg text-gray-600 md:text-left">
                        Receive a detailed learning plan with daily tasks, resources, and progress tracking to keep you motivated and on track.
                      </p>
                      <div className="mt-6 rounded-lg bg-blue-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </div>
                          <p className="text-sm text-gray-700">Your roadmap updates as you progress, adapting to your learning speed and feedback</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/create-roadmap"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-10 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
              >
                Create your roadmap
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-600 shadow-sm mb-4">
                <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                Success Stories
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-inter)" }}>
                Transforming learning <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">journeys</span>
              </h2>
              <p className="mt-6 text-xl text-gray-500">
                Join thousands of learners who have achieved their goals with our personalized roadmaps
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  {/* Top background design */}
                  <div className="absolute top-0 h-24 w-full bg-gradient-to-r from-teal-400 to-teal-500"></div>
                  
                  <div className="relative p-8 pt-16">
                    {/* Avatar */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative -mt-20 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Sarah Johnson"
                          className="h-full w-full object-cover"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                      <p className="text-teal-600">Web Developer</p>
                      
                      {/* Rating */}
                      <div className="mt-3 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5 text-amber-400"
                          >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <div className="relative mt-6">
                        <svg className="absolute -top-6 -left-2 h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative text-lg italic text-gray-600">
                          "I went from knowing nothing about web development to landing my first job in just 6 months! The daily breakdown made it easy to stay consistent even with my busy schedule."
                        </p>
                      </div>
                      
                      {/* Tags */}
                      <div className="mt-8 flex flex-wrap justify-center gap-2">
                        <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                          Web Development
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                          6 months
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  {/* Top background design */}
                  <div className="absolute top-0 h-24 w-full bg-gradient-to-r from-purple-400 to-purple-500"></div>
                  
                  <div className="relative p-8 pt-16">
                    {/* Avatar */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative -mt-20 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Michael Chen"
                          className="h-full w-full object-cover"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
                      <p className="text-purple-600">Data Scientist</p>
                      
                      {/* Rating */}
                      <div className="mt-3 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5 text-amber-400"
                          >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <div className="relative mt-6">
                        <svg className="absolute -top-6 -left-2 h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative text-lg italic text-gray-600">
                          "The personalized roadmap broke down complex topics into manageable chunks. I could only study 1 hour per day, but the focused approach helped me master machine learning in just 3 months."
                        </p>
                      </div>
                      
                      {/* Tags */}
                      <div className="mt-8 flex flex-wrap justify-center gap-2">
                        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                          Machine Learning
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                          3 months
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  {/* Top background design */}
                  <div className="absolute top-0 h-24 w-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
                  
                  <div className="relative p-8 pt-16">
                    {/* Avatar */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative -mt-20 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Emily Rodriguez"
                          className="h-full w-full object-cover"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900">Emily Rodriguez</h3>
                      <p className="text-blue-600">UX Designer</p>
                      
                      {/* Rating */}
                      <div className="mt-3 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5 text-amber-400"
                          >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <div className="relative mt-6">
                        <svg className="absolute -top-6 -left-2 h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative text-lg italic text-gray-600">
                          "As a busy mom, I could only dedicate weekends to learning. The weekly plan option was perfect for me, and I was able to transition to a UX design career while balancing family life."
                        </p>
                      </div>
                      
                      {/* Tags */}
                      <div className="mt-8 flex flex-wrap justify-center gap-2">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                          UX Design
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                          6 months
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-20 max-w-6xl rounded-2xl bg-white shadow-xl">
              <div className="bg-gradient-to-b from-gray-50 to-white p-8 md:p-12">
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-600 shadow-sm mb-6">
                      <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                      Success Metrics
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our learners achieve their goals</h3>
                    <p className="mt-4 text-lg text-gray-600">
                      We've helped thousands of people master new skills and advance their careers through structured,
                      personalized learning paths.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-6">
                      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-teal-500/10"></div>
                        <div className="relative">
                          <div className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-4xl font-extrabold text-transparent">94%</div>
                          <p className="mt-2 text-sm text-gray-600">Completion rate for learners who follow our roadmaps</p>
                        </div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-purple-500/10"></div>
                        <div className="relative">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">78%</div>
                          <p className="mt-2 text-sm text-gray-600">Users who report career advancement after completing a roadmap</p>
                        </div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10"></div>
                        <div className="relative">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-4xl font-extrabold text-transparent">3x</div>
                          <p className="mt-2 text-sm text-gray-600">Faster learning compared to unstructured approaches</p>
                        </div>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-500/10"></div>
                        <div className="relative">
                          <div className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-4xl font-extrabold text-transparent">5k+</div>
                          <p className="mt-2 text-sm text-gray-600">Active learners using our platform daily</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-2xl">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
                      
                      <div className="relative space-y-8">
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-gray-900">Your potential growth</h4>
                          <p className="mt-1 text-sm text-gray-600">Based on consistent daily learning</p>
                        </div>

                        <div className="h-[250px] w-full">
                          <div className="relative h-full w-full">
                            <div className="absolute bottom-0 left-0 h-[30%] w-[10%] rounded-t-md bg-gradient-to-t from-teal-500 to-teal-400"></div>
                            <div className="absolute bottom-0 left-[15%] h-[45%] w-[10%] rounded-t-md bg-gradient-to-t from-teal-500 to-teal-400"></div>
                            <div className="absolute bottom-0 left-[30%] h-[60%] w-[10%] rounded-t-md bg-gradient-to-t from-teal-600 to-teal-500"></div>
                            <div className="absolute bottom-0 left-[45%] h-[75%] w-[10%] rounded-t-md bg-gradient-to-t from-teal-600 to-teal-500"></div>
                            <div className="absolute bottom-0 left-[60%] h-[90%] w-[10%] rounded-t-md bg-gradient-to-t from-teal-700 to-teal-600"></div>
                            <div className="absolute bottom-0 left-[75%] h-[100%] w-[10%] rounded-t-md bg-gradient-to-t from-teal-700 to-teal-600"></div>

                            <div className="absolute bottom-[-30px] left-[5%] text-xs font-medium text-gray-600">Week 1</div>
                            <div className="absolute bottom-[-30px] left-[20%] text-xs font-medium text-gray-600">Week 2</div>
                            <div className="absolute bottom-[-30px] left-[35%] text-xs font-medium text-gray-600">Week 4</div>
                            <div className="absolute bottom-[-30px] left-[50%] text-xs font-medium text-gray-600">Week 8</div>
                            <div className="absolute bottom-[-30px] left-[65%] text-xs font-medium text-gray-600">Week 12</div>
                            <div className="absolute bottom-[-30px] left-[80%] text-xs font-medium text-gray-600">Week 16</div>
                            
                            {/* Horizontal lines */}
                            <div className="absolute left-0 top-0 w-full border-t border-dashed border-gray-200"></div>
                            <div className="absolute left-0 top-[25%] w-full border-t border-dashed border-gray-200"></div>
                            <div className="absolute left-0 top-[50%] w-full border-t border-dashed border-gray-200"></div>
                            <div className="absolute left-0 top-[75%] w-full border-t border-dashed border-gray-200"></div>
                            <div className="absolute left-0 bottom-0 w-full border-t border-gray-300"></div>
                            
                            {/* Y-axis labels */}
                            <div className="absolute left-[-20px] top-[-8px] text-xs font-medium text-gray-500">100%</div>
                            <div className="absolute left-[-20px] top-[25%] -translate-y-1/2 text-xs font-medium text-gray-500">75%</div>
                            <div className="absolute left-[-20px] top-[50%] -translate-y-1/2 text-xs font-medium text-gray-500">50%</div>
                            <div className="absolute left-[-20px] top-[75%] -translate-y-1/2 text-xs font-medium text-gray-500">25%</div>
                            <div className="absolute bottom-[-8px] left-[-20px] text-xs font-medium text-gray-500">0%</div>
                          </div>
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-3 rounded-xl bg-teal-50 p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal-600">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <p className="text-sm text-gray-800">
                            <span className="font-semibold">Start today</span> - consistent practice leads to exponential growth
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-teal-100 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
          
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-600 shadow-sm mb-4">
                <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                Start Your Journey
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Ready to <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">transform</span> your learning?
              </h2>
              <p className="mt-6 text-xl text-gray-500">
                Create your personalized roadmap today and take the first step toward mastering any skill.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/create-roadmap"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-10 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 sm:w-auto"
                >
                  Create Your Roadmap
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white px-10 text-base font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 sm:w-auto"
                >
                  Learn More
                </Link>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-white ring-2 ring-white">
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                          alt={`User ${i + 1}`}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-md">
                    Joined <span className="font-bold text-gray-900">today</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Join over <span className="font-semibold text-gray-700">5,000+</span> learners who have achieved their goals with LearnPath
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 text-teal-400"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                  <path d="M21 8V5a2 2 0 0 0-2-2H8" />
                  <path d="M3 16v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3" />
                  <path d="M16 3v12a2 2 0 0 1-2 2H3" />
                </svg>
                <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-inter)" }}>LearnPath</span>
              </div>
              <p className="mt-4 text-sm text-gray-300">
                Personalized learning roadmaps to help you master any skill on your schedule.
              </p>
              <div className="mt-6 flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-teal-400">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-teal-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-teal-400">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-teal-400">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="md:ml-8 xl:ml-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="md:ml-8 xl:ml-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="md:ml-8 xl:ml-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-300 hover:text-white">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-base text-gray-400">© 2023 LearnPath. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


