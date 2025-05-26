import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
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
          <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-600 shadow-sm mb-4">
            <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
            Start Your Journey
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>
            Ready to <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">transform</span> your learning?
          </h2>
          <p className="mt-6 text-xl text-gray-500">
            Create your personalized roadmap today and take the first step toward mastering any skill.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              asChild
              className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-pink-400 px-10 text-base font-medium text-white shadow-lg transition-all duration-300 ease-out hover:from-blue-600 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 sm:w-auto"
            >
              <Link href="/create-roadmap">
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                <span className="relative flex items-center font-medium">
                  Create Your Roadmap
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Button>
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
  )
} 