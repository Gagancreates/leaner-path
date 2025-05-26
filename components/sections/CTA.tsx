import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background elements - matching FAQ.tsx */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-indigo-50/40"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center opacity-[0.03]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-teal-600 shadow-sm mb-3 sm:mb-4">
            <span className="mr-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-500"></span>
            Start Your Journey
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>
            Ready to <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">transform</span> your learning?
          </h2>
          <p className="mt-3 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-500">
            Create your personalized roadmap today and take the first step toward mastering any skill.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4">
            <Button 
              asChild
              className="group relative inline-flex h-12 w-full max-w-xs items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-pink-400 px-8 sm:px-10 py-3 text-white shadow-lg transition-all duration-300 ease-out hover:from-blue-600 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 sm:w-auto"
            >
              <Link href="/create-roadmap">
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                <span className="relative flex items-center font-medium">
                  Create Your Roadmap
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </Link>
            </Button>
            <Link
              href="#how-it-works"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-full border border-gray-200 bg-white px-8 sm:px-10 text-sm sm:text-base font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="inline-block h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full border-2 border-white ring-2 ring-white">
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
              <div className="rounded-full bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-600 shadow-md">
                Joined <span className="font-bold text-gray-900">today</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Join over <span className="font-semibold text-gray-700">5,000+</span> learners who have achieved their goals with LearnPath
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 