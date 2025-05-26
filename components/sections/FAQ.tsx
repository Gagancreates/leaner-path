"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
  index: number
}

const FAQItem = ({ question, answer, isOpen, toggleOpen, index }: FAQItemProps) => {
  return (
    <div className={`border-b border-indigo-100/80 last:border-none transition-all duration-300 ${isOpen ? "bg-indigo-50/30" : ""}`}>
      <button
        className="flex w-full items-center justify-between py-6 px-6 text-left focus:outline-none group"
        onClick={toggleOpen}
      >
        <div className="flex items-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-medium mr-4 transition-colors group-hover:bg-indigo-200">
            {index + 1}
          </span>
          <span className="font-medium text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">{question}</span>
        </div>
        <span className="ml-6 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white border border-indigo-100 shadow-sm transition-all duration-200 group-hover:bg-indigo-500 group-hover:border-indigo-500">
          {isOpen ? (
            <Minus className="h-4 w-4 text-indigo-600 group-hover:text-white" />
          ) : (
            <Plus className="h-4 w-4 text-indigo-600 group-hover:text-white" />
          )}
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pl-[4.5rem]">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqItems = [
    {
      question: "How does LearnPath create personalized learning roadmaps?",
      answer: "LearnPath uses AI to analyze your learning goals, available time, and preferences to create a step-by-step roadmap tailored specifically to you. Our algorithms break down complex topics into manageable daily or weekly plans, ensuring you learn efficiently and effectively without feeling overwhelmed."
    },
    {
      question: "How much time do I need to commit to my learning roadmap?",
      answer: "You decide your own commitment level! During setup, you'll specify how many hours per day and days per week you can dedicate to learning. LearnPath then builds your roadmap around your schedule, whether that's 30 minutes a day or several hours. You can always adjust your learning pace as you go."
    },
    {
      question: "Can I track my progress and adjust my learning roadmap?",
      answer: "Absolutely! LearnPath provides detailed progress tracking with visual indicators showing how far you've come. If you need to adjust your pace or change direction, you can modify your roadmap at any time. Our adaptive system recalibrates to keep you on track toward your learning goals."
    },
    {
      question: "Is LearnPath suitable for all types of learning?",
      answer: "Yes! Whether you want to learn programming, languages, academic subjects, music, or professional skills, LearnPath can create a structured learning plan. Our platform works for beginners starting from scratch or advanced learners looking to build specific expertise in their field."
    },
    {
      question: "Do I need to pay for the learning materials in my roadmap?",
      answer: "LearnPath itself is a roadmap creation and progress tracking tool. While we recommend many free resources, some suggested materials in your roadmap might require separate purchases or subscriptions. We clearly indicate which resources are free and which might have associated costs."
    },
    {
      question: "How is LearnPath different from other learning platforms?",
      answer: "Unlike standard courses or tutorials, LearnPath doesn't just provide content—it creates a comprehensive strategy for mastering any subject. We combine AI-powered planning with progress tracking and personalized pacing, focusing on your unique learning journey rather than one-size-fits-all education."
    }
  ]

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-indigo-50/40"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center opacity-[0.03]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20 text-center">
          <div className="inline-flex items-center rounded-full border border-indigo-200 bg-white px-4 py-1.5 shadow-sm mb-5">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
            <span className="text-sm font-medium text-indigo-700">Frequently Asked Questions</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl md:text-5xl" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>
            Everything you need to know about <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">LearnPath</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600">
            Find answers to common questions about our personalized learning roadmap platform
          </p>
        </div>

        <div className="relative mx-auto">
          {/* Card with glass effect */}
          <div className="rounded-2xl border border-indigo-100/80 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
            <div className="p-0.5 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50"></div>
            <div className="divide-y divide-indigo-100/80">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={index === openIndex}
                  toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
              ))}
            </div>
            <div className="p-0.5 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full border border-indigo-200 bg-indigo-50 shadow-md hidden sm:block"></div>
          <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full border border-indigo-200 bg-indigo-50 shadow-md hidden sm:block"></div>
        </div>
      </div>
    </section>
  )
} 