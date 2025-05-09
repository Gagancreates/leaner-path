import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CTA() {
  return (
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
  )
} 