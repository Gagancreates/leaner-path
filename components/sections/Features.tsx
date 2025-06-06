import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-teal-600 shadow-sm mb-3 sm:mb-4">
            <span className="mr-1.5 sm:mr-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-500"></span>
            The Science of Learning
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>
            Proven principles behind <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">effective learning</span>
          </h2>
          <p className="mt-3 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-500">
            Our platform is built on science-backed learning methods that help you master skills faster and retain knowledge longer.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 md:gap-12 grid-cols-1 md:grid-cols-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative flex flex-col h-full items-center rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-lg">
              <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-white"
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
              <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>Spaced Repetition</h3>
              <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-gray-600">
                Our roadmaps use scientifically-proven spaced repetition to help you remember what you learn for the long term.
              </p>
              <div className="mt-4 sm:mt-6 border-t border-gray-100 pt-4 sm:pt-6 w-full">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">Retention increase</span>
                  <span className="font-semibold text-teal-600">+92%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative flex flex-col h-full items-center rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-lg">
              <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                  <path d="M10 2c1 .5 2 2 2 5"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>Microlearning</h3>
              <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-gray-600">
                Break down complex topics into bite-sized daily tasks that fit perfectly into your busy schedule.
              </p>
              <div className="mt-4 sm:mt-6 border-t border-gray-100 pt-4 sm:pt-6 w-full">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">Completion rate</span>
                  <span className="font-semibold text-purple-600">+78%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative flex flex-col h-full items-center rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-lg">
              <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>Active Recall</h3>
              <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-gray-600">
                Our system encourages you to actively engage with the material, not just passively consume it.
              </p>
              <div className="mt-4 sm:mt-6 border-t border-gray-100 pt-4 sm:pt-6 w-full">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">Knowledge retention</span>
                  <span className="font-semibold text-blue-600">3x higher</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 sm:mt-20 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-xl">
            <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/90 to-indigo-700/90"></div>
            <div className="relative z-10 px-6 py-10 sm:px-12 lg:px-16 sm:py-12">
              <div className="md:flex md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white sm:text-3xl" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>
                    Ready to accelerate your learning journey?
                  </h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-indigo-100">
                    Create your personalized roadmap today and start making meaningful progress toward your goals.
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <Button 
                    asChild
                    className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-lg bg-white px-6 sm:px-8 py-3 text-indigo-700 transition-all duration-300 ease-out hover:bg-gray-50 hover:text-indigo-800 font-medium"
                  >
                    <Link href="/create-roadmap">
                      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-indigo-600 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                      <span className="relative flex items-center font-medium">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 