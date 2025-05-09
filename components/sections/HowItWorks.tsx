import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  return (
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
  )
} 