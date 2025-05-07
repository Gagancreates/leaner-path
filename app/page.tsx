import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
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
              className="h-6 w-6 text-teal-500"
            >
              <path d="M8 3v3a2 2 0 0 1-2 2H3" />
              <path d="M21 8V5a2 2 0 0 0-2-2H8" />
              <path d="M3 16v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3" />
              <path d="M16 3v12a2 2 0 0 1-2 2H3" />
            </svg>
            <span className="text-xl font-semibold text-gray-900">LearnPath</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              How it works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Success Stories
            </Link>
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
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
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-12 md:py-20">
          <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:24px_24px] opacity-25"></div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-600">
                  <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                  Personalized Learning Paths
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Master any skill with a personalized roadmap
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Turn your learning goals into achievable daily tasks. Our AI-powered platform creates a customized
                    learning journey tailored to your schedule and goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/create-roadmap"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500"
                  >
                    Create Your Roadmap
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    See how it works
                  </Link>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${i + 1}`}
                          alt={`User ${i + 1}`}
                          width={32}
                          height={32}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-900">5,000+</span> learners have achieved their goals
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative h-[350px] w-full max-w-[550px] overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-xl sm:h-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-purple-50 opacity-50"></div>
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                        <span className="text-sm font-medium text-gray-700">Web Development Roadmap</span>
                      </div>
                      <div className="rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800">
                        3 months plan
                      </div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-teal-700">1</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">HTML & CSS Fundamentals</div>
                            <div className="mt-1 text-xs text-gray-500">Learn the building blocks of web pages</div>
                            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                              <div className="h-1.5 w-[75%] rounded-full bg-teal-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-purple-700">2</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">JavaScript Essentials</div>
                            <div className="mt-1 text-xs text-gray-500">Master interactive web programming</div>
                            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                              <div className="h-1.5 w-[30%] rounded-full bg-purple-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-blue-700">3</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">React Framework</div>
                            <div className="mt-1 text-xs text-gray-500">Build modern web applications</div>
                            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                              <div className="h-1.5 w-[5%] rounded-full bg-blue-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 hidden sm:block">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-amber-700">4</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">Backend Development</div>
                            <div className="mt-1 text-xs text-gray-500">Create server-side applications</div>
                            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                              <div className="h-1.5 w-[0%] rounded-full bg-amber-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 rounded-md bg-gray-50 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500">Today's goal:</span>
                          <div className="font-medium">Complete CSS Flexbox tutorial</div>
                        </div>
                        <Button size="sm" className="h-8 bg-teal-500 hover:bg-teal-600">
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-600">
                <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                Why LearnPath Works
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                The science behind effective learning
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Our platform is built on proven learning principles that help you achieve your goals faster and retain
                knowledge longer.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
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
                    className="h-8 w-8 text-teal-500"
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
                <h3 className="text-xl font-bold">Spaced Repetition</h3>
                <p className="mt-2 text-gray-500">
                  Our roadmaps use scientifically-proven spaced repetition to help you remember what you learn for the
                  long term.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
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
                    className="h-8 w-8 text-purple-500"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                    <path d="M10 2c1 .5 2 2 2 5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Microlearning</h3>
                <p className="mt-2 text-gray-500">
                  Break down complex topics into bite-sized daily tasks that fit into your busy schedule.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
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
                    className="h-8 w-8 text-blue-500"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Active Recall</h3>
                <p className="mt-2 text-gray-500">
                  Our system encourages you to actively engage with the material, not just passively consume it.
                </p>
              </div>
            </div>

            <div className="mt-16 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100 p-8">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ready to accelerate your learning?</h3>
                  <p className="mt-2 text-gray-600">
                    Create your personalized roadmap today and start making progress toward your goals.
                  </p>
                </div>
                <Link
                  href="/create-roadmap"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-600">
                <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                Simple Process
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create your personalized learning roadmap in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100">
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
                      className="h-10 w-10 text-teal-500"
                    >
                      <path d="M2 12h10" />
                      <path d="M9 4v16" />
                      <path d="M14 9l3 3-3 3" />
                      <path d="M17 12h5" />
                    </svg>
                  </div>
                  <div className="absolute -right-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white">
                    1
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Tell us what you want to learn</h3>
                  <p className="text-gray-500">
                    Enter the subject or skill you're interested in mastering, whether it's programming, design, or any
                    other topic.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
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
                      className="h-10 w-10 text-purple-500"
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
                  <div className="absolute -right-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">
                    2
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Set your schedule</h3>
                  <p className="text-gray-500">
                    Tell us how much time you can dedicate each day and which days of the week work best for your
                    learning.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
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
                      className="h-10 w-10 text-blue-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="absolute -right-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                    3
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Get your personalized roadmap</h3>
                  <p className="text-gray-500">
                    Receive a detailed plan that breaks down your learning journey into manageable tasks based on your
                    availability.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="/create-roadmap"
                className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500"
              >
                Create your roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-50 py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-600">
                <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                Success Stories
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transforming learning journeys
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of learners who have achieved their goals with our roadmaps
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 md:mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="User"
                    className="rounded-full mx-auto sm:mx-0"
                    width={60}
                    height={60}
                  />
                  <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <h3 className="font-semibold">Sarah Johnson</h3>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="none"
                            className="h-4 w-4 text-amber-400"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 text-center sm:text-left">Web Developer</p>
                    <p className="mt-4 text-gray-600">
                      "I went from knowing nothing about web development to landing my first job in just 6 months! The
                      daily breakdown made it easy to stay consistent even with my busy schedule."
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800">
                        Web Development
                      </span>
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                        6 months
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="User"
                    className="rounded-full mx-auto sm:mx-0"
                    width={60}
                    height={60}
                  />
                  <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <h3 className="font-semibold">Michael Chen</h3>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="none"
                            className="h-4 w-4 text-amber-400"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 text-center sm:text-left">Data Scientist</p>
                    <p className="mt-4 text-gray-600">
                      "The personalized roadmap broke down complex topics into manageable chunks. I could only study 1
                      hour per day, but the focused approach helped me master machine learning in just 3 months."
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                        Machine Learning
                      </span>
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                        3 months
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="User"
                    className="rounded-full mx-auto sm:mx-0"
                    width={60}
                    height={60}
                  />
                  <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <h3 className="font-semibold">Emily Rodriguez</h3>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="none"
                            className="h-4 w-4 text-amber-400"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 text-center sm:text-left">UX Designer</p>
                    <p className="mt-4 text-gray-600">
                      "As a busy mom, I could only dedicate weekends to learning. The weekly plan option was perfect for
                      me, and I was able to transition to a UX design career while balancing family life."
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                        UX Design
                      </span>
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                        6 months
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-lg bg-white p-8 shadow-sm">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-600">
                    <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                    Success Metrics
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">Our learners achieve their goals</h3>
                  <p className="mt-2 text-gray-500">
                    We've helped thousands of people master new skills and advance their careers through structured,
                    personalized learning paths.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <div className="text-3xl font-bold text-teal-500">94%</div>
                      <p className="mt-1 text-sm text-gray-500">Completion rate for learners who follow our roadmaps</p>
                    </div>
                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <div className="text-3xl font-bold text-purple-500">78%</div>
                      <p className="mt-1 text-sm text-gray-500">
                        Users who report career advancement after completing a roadmap
                      </p>
                    </div>
                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <div className="text-3xl font-bold text-blue-500">3x</div>
                      <p className="mt-1 text-sm text-gray-500">Faster learning compared to unstructured approaches</p>
                    </div>
                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <div className="text-3xl font-bold text-amber-500">5k+</div>
                      <p className="mt-1 text-sm text-gray-500">Active learners using our platform daily</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative h-[350px] w-full max-w-[400px] overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-teal-50 to-purple-50 p-6">
                    <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:16px_16px] opacity-25"></div>
                    <div className="relative space-y-6">
                      <div className="text-center">
                        <h4 className="text-lg font-semibold">Your potential growth</h4>
                        <p className="text-sm text-gray-500">Based on consistent daily learning</p>
                      </div>

                      <div className="h-[200px] w-full">
                        <div className="relative h-full w-full">
                          <div className="absolute bottom-0 left-0 h-[30%] w-[10%] rounded-t-md bg-teal-200"></div>
                          <div className="absolute bottom-0 left-[15%] h-[45%] w-[10%] rounded-t-md bg-teal-300"></div>
                          <div className="absolute bottom-0 left-[30%] h-[60%] w-[10%] rounded-t-md bg-teal-400"></div>
                          <div className="absolute bottom-0 left-[45%] h-[75%] w-[10%] rounded-t-md bg-teal-500"></div>
                          <div className="absolute bottom-0 left-[60%] h-[90%] w-[10%] rounded-t-md bg-teal-600"></div>
                          <div className="absolute bottom-0 left-[75%] h-[100%] w-[10%] rounded-t-md bg-teal-700"></div>

                          <div className="absolute bottom-[-24px] left-[5%] text-xs text-gray-500">Week 1</div>
                          <div className="absolute bottom-[-24px] left-[20%] text-xs text-gray-500">Week 2</div>
                          <div className="absolute bottom-[-24px] left-[35%] text-xs text-gray-500">Week 4</div>
                          <div className="absolute bottom-[-24px] left-[50%] text-xs text-gray-500">Week 8</div>
                          <div className="absolute bottom-[-24px] left-[65%] text-xs text-gray-500">Week 12</div>
                          <div className="absolute bottom-[-24px] left-[80%] text-xs text-gray-500">Week 16</div>
                        </div>
                      </div>

                      <div className="text-center text-sm">
                        <p className="font-medium">Start your journey today</p>
                        <p className="text-xs text-gray-500">Consistent daily practice leads to exponential growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-600">
                <span className="mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                Start Your Journey
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                Ready to transform your learning?
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Create your personalized roadmap today and take the first step toward mastering any skill.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/create-roadmap"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-teal-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500 sm:w-auto"
                >
                  Create Your Roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 sm:w-auto"
                >
                  Learn More
                </Link>
              </div>

              <div className="mt-8 text-center text-sm text-gray-500">
                Join over 5,000 learners who have achieved their goals with LearnPath
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-12">
        <div className="container px-4 md:px-6">
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
                  className="h-6 w-6 text-teal-500"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                  <path d="M21 8V5a2 2 0 0 0-2-2H8" />
                  <path d="M3 16v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3" />
                  <path d="M16 3v12a2 2 0 0 1-2 2H3" />
                </svg>
                <span className="text-xl font-semibold text-gray-900">LearnPath</span>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Personalized learning roadmaps to help you master any skill on your schedule.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Product</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">© 2023 LearnPath. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
