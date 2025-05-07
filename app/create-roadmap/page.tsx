"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function CreateRoadmap() {
  const router = useRouter()
  const [topic, setTopic] = useState("")
  const [timeframe, setTimeframe] = useState("")
  const [breakdownType, setBreakdownType] = useState("daily")
  const [hoursPerDay, setHoursPerDay] = useState(2)
  const [daysPerWeek, setDaysPerWeek] = useState(5)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!topic || !timeframe || !breakdownType) return

    setIsLoading(true)

    // In a real app, we would generate the roadmap on the server
    // For now, we'll simulate a delay and redirect to the results page
    setTimeout(() => {
      const params = new URLSearchParams({
        topic: topic,
        timeframe: timeframe,
        breakdown: breakdownType,
        hours: hoursPerDay.toString(),
        days: daysPerWeek.toString(),
      })
      router.push(`/roadmap?${params.toString()}`)
    }, 1500)
  }

  const nextStep = () => {
    if (step === 1 && (!topic || !timeframe)) return
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white sticky top-0 z-50">
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
      <main className="flex-1 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 md:py-20">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to home
            </Link>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm md:p-8">
            <div className="mb-8 space-y-2">
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Create your learning roadmap</h1>
              <p className="text-gray-500">
                Tell us about your learning goals and schedule, and we'll create a personalized roadmap for you.
              </p>
            </div>

            <div className="mb-8">
              <div className="relative">
                <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>
                <ol className="relative flex justify-between">
                  <li className="flex items-center justify-center">
                    <div
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 ${step >= 1 ? "border-teal-500 bg-teal-500 text-white" : "border-gray-300 bg-white text-gray-500"} text-sm font-medium`}
                    >
                      1
                    </div>
                    <span className="absolute mt-10 text-xs font-medium text-gray-600">Learning Goal</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 ${step >= 2 ? "border-teal-500 bg-teal-500 text-white" : "border-gray-300 bg-white text-gray-500"} text-sm font-medium`}
                    >
                      2
                    </div>
                    <span className="absolute mt-10 text-xs font-medium text-gray-600">Schedule</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 ${step >= 3 ? "border-teal-500 bg-teal-500 text-white" : "border-gray-300 bg-white text-gray-500"} text-sm font-medium`}
                    >
                      3
                    </div>
                    <span className="absolute mt-10 text-xs font-medium text-gray-600">Review</span>
                  </li>
                </ol>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="topic" className="text-base">
                      What do you want to learn?
                    </Label>
                    <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2">
                      <BookOpen className="mr-2 h-5 w-5 text-gray-400" />
                      <Input
                        id="topic"
                        placeholder="e.g., Web Development, Machine Learning, UX Design"
                        className="flex-1 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeframe" className="text-base">
                      How much time do you have to complete your learning journey?
                    </Label>
                    <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2">
                      <Calendar className="mr-2 h-5 w-5 text-gray-400" />
                      <Select value={timeframe} onValueChange={setTimeframe} required>
                        <SelectTrigger className="flex-1 border-0 bg-transparent p-0 shadow-none focus:ring-0">
                          <SelectValue placeholder="Select a timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-weeks">2 weeks</SelectItem>
                          <SelectItem value="1-month">1 month</SelectItem>
                          <SelectItem value="3-months">3 months</SelectItem>
                          <SelectItem value="6-months">6 months</SelectItem>
                          <SelectItem value="1-year">1 year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button
                      type="button"
                      className="w-full bg-teal-500 hover:bg-teal-600"
                      onClick={nextStep}
                      disabled={!topic || !timeframe}
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-base">How would you like your roadmap to be broken down?</Label>
                    <RadioGroup
                      value={breakdownType}
                      onValueChange={setBreakdownType}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div>
                        <RadioGroupItem value="daily" id="daily" className="peer sr-only" />
                        <Label
                          htmlFor="daily"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-checked:border-teal-500 peer-checked:bg-teal-50 [&:has([data-state=checked])]:border-teal-500"
                        >
                          <Calendar className="mb-3 h-6 w-6 text-gray-500" />
                          <div className="text-center">
                            <div className="text-sm font-medium">Daily Plan</div>
                            <div className="text-xs text-gray-500">Tasks broken down by day</div>
                          </div>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="weekly" id="weekly" className="peer sr-only" />
                        <Label
                          htmlFor="weekly"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-checked:border-teal-500 peer-checked:bg-teal-50 [&:has([data-state=checked])]:border-teal-500"
                        >
                          <Calendar className="mb-3 h-6 w-6 text-gray-500" />
                          <div className="text-center">
                            <div className="text-sm font-medium">Weekly Plan</div>
                            <div className="text-xs text-gray-500">Tasks broken down by week</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <Label className="text-base">How many hours can you dedicate per day?</Label>
                        <span className="text-sm font-medium text-teal-600">{hoursPerDay} hours</span>
                      </div>
                      <Slider
                        defaultValue={[2]}
                        min={0.5}
                        max={8}
                        step={0.5}
                        value={[hoursPerDay]}
                        onValueChange={(value) => setHoursPerDay(value[0])}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>30min</span>
                        <span>8 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <Label className="text-base">How many days per week can you learn?</Label>
                        <span className="text-sm font-medium text-teal-600">{daysPerWeek} days</span>
                      </div>
                      <Slider
                        defaultValue={[5]}
                        min={1}
                        max={7}
                        step={1}
                        value={[daysPerWeek]}
                        onValueChange={(value) => setDaysPerWeek(value[0])}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>1 day</span>
                        <span>7 days</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button type="button" className="bg-teal-500 hover:bg-teal-600" onClick={nextStep}>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <h3 className="mb-4 text-lg font-medium">Review Your Learning Plan</h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Learning Topic:</span>
                        <span className="text-sm font-medium">{topic}</span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Timeframe:</span>
                        <span className="text-sm font-medium">{timeframe.replace("-", " ")}</span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Plan Breakdown:</span>
                        <span className="text-sm font-medium capitalize">{breakdownType}</span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Hours per day:</span>
                        <span className="text-sm font-medium">{hoursPerDay} hours</span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Days per week:</span>
                        <span className="text-sm font-medium">{daysPerWeek} days</span>
                      </div>
                    </div>

                    <div className="mt-6 rounded-md bg-teal-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-teal-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-teal-800">
                            Total learning time:{" "}
                            <span className="font-bold">{hoursPerDay * daysPerWeek} hours per week</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button type="submit" className="bg-teal-500 hover:bg-teal-600" disabled={isLoading}>
                      {isLoading ? (
                        <div className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Creating your roadmap...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Generate roadmap
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {step === 1 && (
            <div className="mt-12 space-y-4 text-center">
              <h2 className="text-lg font-semibold text-gray-900">Popular learning paths</h2>
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    setTopic("Web Development")
                    setTimeframe("3-months")
                  }}
                >
                  Web Development
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    setTopic("Machine Learning")
                    setTimeframe("6-months")
                  }}
                >
                  Machine Learning
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    setTopic("UX Design")
                    setTimeframe("3-months")
                  }}
                >
                  UX Design
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    setTopic("Data Science")
                    setTimeframe("6-months")
                  }}
                >
                  Data Science
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="border-t bg-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">© 2023 LearnPath. All rights reserved.</div>
      </footer>
    </div>
  )
}
