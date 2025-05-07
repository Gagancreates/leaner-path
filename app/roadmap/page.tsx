"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Download,
  Calendar,
  Clock,
  CheckCircle,
  Edit,
  Share2,
  Users,
  Award,
  BookOpen,
  BarChart,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { generateRoadmap } from "@/lib/roadmap-generator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function RoadmapPage() {
  const searchParams = useSearchParams()
  const topic = searchParams.get("topic") || ""
  const timeframe = searchParams.get("timeframe") || ""
  const breakdown = searchParams.get("breakdown") || "daily"
  const hoursPerDay = Number(searchParams.get("hours")) || 2
  const daysPerWeek = Number(searchParams.get("days")) || 5

  const [roadmap, setRoadmap] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activePhase, setActivePhase] = useState(0)
  const [currentView, setCurrentView] = useState("timeline")

  useEffect(() => {
    // In a real app, we would fetch the roadmap from an API
    // For now, we'll generate it client-side
    const fetchRoadmap = async () => {
      setLoading(true)
      try {
        const data = await generateRoadmap(topic, timeframe, breakdown, hoursPerDay, daysPerWeek)
        setRoadmap(data)
      } catch (error) {
        console.error("Failed to generate roadmap:", error)
      } finally {
        setLoading(false)
      }
    }

    if (topic && timeframe) {
      fetchRoadmap()
    }
  }, [topic, timeframe, breakdown, hoursPerDay, daysPerWeek])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 border-b bg-white">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
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
              </Link>
            </div>
          </div>
        </header>
        <main className="flex flex-1 items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-teal-200 border-t-teal-500"></div>
            <h2 className="text-xl font-semibold text-gray-900">Generating your roadmap</h2>
            <p className="mt-2 text-gray-500">This may take a moment...</p>
          </div>
        </main>
      </div>
    )
  }

  const getWeekDates = (weekIndex: number) => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + weekIndex * 7)

    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + 6)

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    }

    return `${formatDate(startDate)} - ${formatDate(endDate)}`
  }

  const renderCalendarView = () => {
    if (breakdown === "daily") {
      // Daily calendar view
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Your Daily Schedule</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>
                {hoursPerDay} hours per day, {daysPerWeek} days per week
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            {Array.from({ length: 4 }).map((_, weekIndex) => (
              <Card key={weekIndex} className="overflow-hidden">
                <CardHeader className="bg-gray-50 py-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">Week {weekIndex + 1}</CardTitle>
                    <span className="text-xs text-gray-500">{getWeekDates(weekIndex)}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-7 divide-x">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, dayIndex) => (
                      <div key={day} className={`p-3 ${dayIndex >= daysPerWeek ? "bg-gray-50 opacity-50" : ""}`}>
                        <div className="mb-2 text-center">
                          <div className="text-xs font-medium text-gray-500">{day}</div>
                        </div>

                        {dayIndex < daysPerWeek && (
                          <div className="space-y-2">
                            {Array.from({ length: Math.ceil(hoursPerDay) }).map((_, hourIndex) => {
                              const taskIndex =
                                weekIndex * daysPerWeek * Math.ceil(hoursPerDay) +
                                dayIndex * Math.ceil(hoursPerDay) +
                                hourIndex
                              const phaseIndex = taskIndex < 10 ? 0 : taskIndex < 20 ? 1 : 2
                              const color = phaseIndex === 0 ? "teal" : phaseIndex === 1 ? "purple" : "blue"

                              return (
                                <div key={hourIndex} className={`rounded-md bg-${color}-50 p-2 text-xs`}>
                                  <div className={`font-medium text-${color}-800`}>Task {taskIndex + 1}</div>
                                  <div className={`mt-1 text-${color}-600`}>{hourIndex + 1}h</div>
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    } else {
      // Weekly calendar view
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Your Weekly Schedule</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>Total: {hoursPerDay * daysPerWeek} hours per week</span>
            </div>
          </div>

          <div className="grid gap-6">
            {Array.from({ length: 12 }).map((_, weekIndex) => {
              const phaseIndex = weekIndex < 4 ? 0 : weekIndex < 8 ? 1 : 2
              const color = phaseIndex === 0 ? "teal" : phaseIndex === 1 ? "purple" : "blue"

              return (
                <Card key={weekIndex} className={`border-l-4 border-${color}-500`}>
                  <CardHeader className="py-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-medium">Week {weekIndex + 1}</CardTitle>
                      <span className="text-xs text-gray-500">{getWeekDates(weekIndex)}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-${color}-100 text-${color}-700`}
                      >
                        {weekIndex + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium text-${color}-800`}>
                          {phaseIndex === 0 ? "Fundamentals" : phaseIndex === 1 ? "Intermediate" : "Advanced"} - Week{" "}
                          {weekIndex + 1}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {hoursPerDay * daysPerWeek} hours of focused learning
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Mark complete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
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
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Edit className="mr-2 h-4 w-4" />
              Customize
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gradient-to-b from-white to-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/create-roadmap"
              className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to form
            </Link>
            <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{topic} Roadmap</h1>
                <p className="mt-1 text-gray-500">Your personalized learning journey</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                  <Calendar className="h-3.5 w-3.5 text-gray-500" />
                  <span>{timeframe.replace("-", " ")}</span>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                  <Clock className="h-3.5 w-3.5 text-gray-500" />
                  <span>{hoursPerDay} hours/day</span>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                  <Users className="h-3.5 w-3.5 text-gray-500" />
                  <span>{daysPerWeek} days/week</span>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 capitalize">
                  <Calendar className="h-3.5 w-3.5 text-gray-500" />
                  <span>{breakdown} plan</span>
                </Badge>
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">Total Learning Time</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">{hoursPerDay * daysPerWeek * 4}</span>
                  <span className="ml-1 text-sm text-gray-500">hours/month</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">Completion Rate</div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-2 w-[5%] rounded-full bg-teal-500"></div>
                  </div>
                  <span className="text-sm font-medium">5%</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">Current Phase</div>
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-teal-500"></div>
                  <span className="font-medium text-gray-900">Fundamentals</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500">Estimated Completion</div>
                <div className="font-medium text-gray-900">
                  {new Date(
                    Date.now() +
                      1000 * 60 * 60 * 24 * 30 * (timeframe.includes("month") ? Number.parseInt(timeframe) : 12),
                  ).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Overall</span>
                        <span className="font-medium">5%</span>
                      </div>
                      <Progress value={5} className="h-2 w-full bg-gray-100" />
                    </div>

                    <div className="space-y-4">
                      <div
                        className={`flex cursor-pointer items-center gap-3 rounded-md p-2 ${activePhase === 0 ? "bg-teal-50" : "hover:bg-gray-50"}`}
                        onClick={() => setActivePhase(0)}
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Fundamentals</div>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="h-1.5 w-full rounded-full bg-gray-100">
                              <div className="h-1.5 w-[10%] rounded-full bg-teal-500"></div>
                            </div>
                            <span className="text-xs font-medium">10%</span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex cursor-pointer items-center gap-3 rounded-md p-2 ${activePhase === 1 ? "bg-purple-50" : "hover:bg-gray-50"}`}
                        onClick={() => setActivePhase(1)}
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                          <BarChart className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Intermediate</div>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="h-1.5 w-full rounded-full bg-gray-100">
                              <div className="h-1.5 w-[0%] rounded-full bg-purple-500"></div>
                            </div>
                            <span className="text-xs font-medium">0%</span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex cursor-pointer items-center gap-3 rounded-md p-2 ${activePhase === 2 ? "bg-blue-50" : "hover:bg-gray-50"}`}
                        onClick={() => setActivePhase(2)}
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Advanced</div>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="h-1.5 w-full rounded-full bg-gray-100">
                              <div className="h-1.5 w-[0%] rounded-full bg-blue-500"></div>
                            </div>
                            <span className="text-xs font-medium">0%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Learning Streak</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                        <Award className="h-8 w-8 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">1</div>
                        <div className="text-sm text-gray-500">day streak</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-8 rounded ${i === 0 ? "bg-teal-500" : "bg-gray-100"}`}
                          title={i === 0 ? "Today" : `${i} days ago`}
                        ></div>
                      ))}
                    </div>

                    <div className="text-center text-sm text-gray-500">Keep learning daily to build your streak!</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex -space-x-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Avatar key={i} className="border-2 border-white">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${i + 1}`} />
                          <AvatarFallback>U{i + 1}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-medium">
                        +24
                      </div>
                    </div>

                    <div className="text-sm text-gray-500">Join 29 others learning {topic}</div>

                    <Button variant="outline" className="w-full">
                      <Users className="mr-2 h-4 w-4" />
                      Join Community
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Tabs defaultValue="timeline" className="space-y-8" onValueChange={(value) => setCurrentView(value)}>
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="timeline">Timeline View</TabsTrigger>
                  <TabsTrigger value="calendar">Calendar View</TabsTrigger>
                </TabsList>

                <TabsContent value="timeline" className="space-y-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-800">
                        <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                        Phase 1: Fundamentals
                      </h3>
                      <div className="space-y-4">
                        {roadmap?.phases[0].tasks.map((task: any, index: number) => (
                          <Card key={index} className={`overflow-hidden ${activePhase === 0 ? "border-teal-200" : ""}`}>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{task.title}</CardTitle>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                                        <Clock className="h-3 w-3" />
                                        {task.duration}
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Estimated time to complete</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                              <CardDescription>{task.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <ul className="ml-6 list-disc space-y-1 text-sm text-gray-600">
                                {task.subtasks.map((subtask: string, idx: number) => (
                                  <li key={idx}>{subtask}</li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between border-t bg-gray-50 px-6 py-3">
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="h-8">
                                  <CheckCircle className="mr-1 h-3 w-3" />
                                  Mark as complete
                                </Button>
                              </div>
                              {task.resources && (
                                <Link href="#" className="text-xs font-medium text-teal-600 hover:text-teal-700">
                                  View resources
                                </Link>
                              )}
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-800">
                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                        Phase 2: Intermediate Concepts
                      </h3>
                      <div className="space-y-4">
                        {roadmap?.phases[1].tasks.map((task: any, index: number) => (
                          <Card
                            key={index}
                            className={`overflow-hidden ${activePhase === 1 ? "border-purple-200" : ""}`}
                          >
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{task.title}</CardTitle>
                                <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                                  <Clock className="h-3 w-3" />
                                  {task.duration}
                                </div>
                              </div>
                              <CardDescription>{task.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <ul className="ml-6 list-disc space-y-1 text-sm text-gray-600">
                                {task.subtasks.map((subtask: string, idx: number) => (
                                  <li key={idx}>{subtask}</li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between border-t bg-gray-50 px-6 py-3">
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="h-8">
                                  <CheckCircle className="mr-1 h-3 w-3" />
                                  Mark as complete
                                </Button>
                              </div>
                              {task.resources && (
                                <Link href="#" className="text-xs font-medium text-purple-600 hover:text-purple-700">
                                  View resources
                                </Link>
                              )}
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                        Phase 3: Advanced Topics
                      </h3>
                      <div className="space-y-4">
                        {roadmap?.phases[2].tasks.map((task: any, index: number) => (
                          <Card key={index} className={`overflow-hidden ${activePhase === 2 ? "border-blue-200" : ""}`}>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{task.title}</CardTitle>
                                <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                                  <Clock className="h-3 w-3" />
                                  {task.duration}
                                </div>
                              </div>
                              <CardDescription>{task.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <ul className="ml-6 list-disc space-y-1 text-sm text-gray-600">
                                {task.subtasks.map((subtask: string, idx: number) => (
                                  <li key={idx}>{subtask}</li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between border-t bg-gray-50 px-6 py-3">
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="h-8">
                                  <CheckCircle className="mr-1 h-3 w-3" />
                                  Mark as complete
                                </Button>
                              </div>
                              {task.resources && (
                                <Link href="#" className="text-xs font-medium text-blue-600 hover:text-blue-700">
                                  View resources
                                </Link>
                              )}
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="calendar" className="space-y-8">
                  {renderCalendarView()}
                </TabsContent>
              </Tabs>

              <div className="mt-12 rounded-lg border bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">Recommended Resources</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {roadmap?.resources.map((resource: any, index: number) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <CardDescription>{resource.type}</CardDescription>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {resource.type.toLowerCase()}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{resource.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Link href="#" className="text-sm font-medium text-teal-600 hover:text-teal-700">
                          Visit resource →
                        </Link>
                        <Button variant="ghost" size="sm">
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
                            className="h-4 w-4"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </svg>
                          <span className="sr-only">Save</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">© 2023 LearnPath. All rights reserved.</div>
      </footer>
    </div>
  )
}
