"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 mx-auto max-w-6xl pt-3 sm:pt-4">
      <header 
        className={`rounded-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/98 shadow-[0_4px_20px_rgba(0,0,0,0.1)]" 
            : "bg-white shadow-[0_2px_15px_rgba(0,0,0,0.07)] border border-gray-100"
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex h-12 sm:h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900"
              >
                <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                <path d="M21 8V5a2 2 0 0 0-2-2H8" />
                <path d="M3 16v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3" />
                <path d="M16 3v12a2 2 0 0 1-2 2H3" />
              </svg>
              <span className="text-sm sm:text-base font-medium text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>
                LearnPath
              </span>
            </Link>
            
         
            <nav className="hidden items-center md:flex">
              <div className="flex mr-2 space-x-7">
                <Link 
                  href="#how-it-works" 
                  className="text-[15px] text-gray-700 hover:text-gray-900 font-medium"
                >
                  Features
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-[15px] text-gray-700 hover:text-gray-900 font-medium"
                >
                  Pricing
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-[15px] h-9 px-5 text-gray-700 hover:bg-gray-50"
                >
                  Sign in
                </Button>
                <Button 
                  size="sm" 
                  className="text-[15px] h-9 px-5 bg-black hover:bg-gray-800 rounded-full"
                >
                  Get Started
                </Button>
              </div>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-1 text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
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
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
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
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mt-1 sm:mt-2 rounded-xl overflow-hidden shadow-lg md:hidden">
          <div className="p-3 sm:p-4 space-y-1 sm:space-y-2 bg-white">
            <Link 
              href="#features" 
              className="block px-3 py-2 text-sm sm:text-[15px] text-gray-700 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="block px-3 py-2 text-sm sm:text-[15px] text-gray-700 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col space-y-1 sm:space-y-2 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100">
              <Link 
                href="/signin"
                className="block px-3 py-2 text-sm sm:text-[15px] text-gray-700 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link 
                href="/get-started"
                className="block px-3 py-2 text-sm sm:text-[15px] font-medium text-white bg-black rounded-lg hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}