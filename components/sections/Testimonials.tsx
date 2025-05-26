import Image from "next/image"

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background elements - matching FAQ.tsx */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-indigo-50/40"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/dark-grid.svg')] bg-center opacity-[0.03]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96 rounded-full bg-indigo-200/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96 rounded-full bg-purple-200/20 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-teal-600 shadow-sm mb-3 sm:mb-4">
            <span className="mr-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-500"></span>
            Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>
            Transforming learning <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">journeys</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-500 px-2 sm:px-0">
            Join thousands of learners who have achieved their goals with our personalized roadmaps
          </p>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 grid max-w-6xl gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg sm:shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Top background design */}
              <div className="absolute top-0 h-24 sm:h-32 lg:h-36 w-full bg-gradient-to-r from-teal-400 to-teal-500"></div>
              
              <div className="relative p-4 sm:p-6 lg:p-8">
                {/* Avatar - positioned higher */}
                <div className="mb-6 sm:mb-8 lg:mb-10 flex justify-center">
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 overflow-hidden rounded-full border-2 sm:border-3 lg:border-4 border-white shadow-md" style={{ marginTop: "-0.5rem" }}>
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Sarah Johnson"
                      className="h-full w-full object-cover"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>Sarah Johnson</h3>
                  <p className="text-sm sm:text-base text-teal-600">Web Developer</p>
                  
                  {/* Rating */}
                  <div className="mt-2 sm:mt-3 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400"
                      >
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mt-4 sm:mt-6">
                    <svg className="absolute -top-4 sm:-top-6 -left-1 sm:-left-2 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative text-sm sm:text-base lg:text-lg italic text-gray-600 leading-relaxed">
                      "I went from knowing nothing about web development to landing my first job in just 6 months! The daily breakdown made it easy to stay consistent even with my busy schedule."
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap justify-center gap-2">
                    <span className="rounded-full bg-teal-100 px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-teal-800">
                      Web Development
                    </span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-gray-800">
                      6 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg sm:shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Top background design */}
              <div className="absolute top-0 h-24 sm:h-32 lg:h-36 w-full bg-gradient-to-r from-purple-400 to-purple-500"></div>
              
              <div className="relative p-4 sm:p-6 lg:p-8">
                {/* Avatar - positioned higher */}
                <div className="mb-6 sm:mb-8 lg:mb-10 flex justify-center">
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 overflow-hidden rounded-full border-2 sm:border-3 lg:border-4 border-white shadow-md" style={{ marginTop: "-0.5rem" }}>
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Michael Chen"
                      className="h-full w-full object-cover"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>Michael Chen</h3>
                  <p className="text-sm sm:text-base text-purple-600">Data Scientist</p>
                  
                  {/* Rating */}
                  <div className="mt-2 sm:mt-3 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400"
                      >
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mt-4 sm:mt-6">
                    <svg className="absolute -top-4 sm:-top-6 -left-1 sm:-left-2 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative text-sm sm:text-base lg:text-lg italic text-gray-600 leading-relaxed">
                      "The personalized roadmap broke down complex topics into manageable chunks. I could only study 1 hour per day, but the focused approach helped me master machine learning in just 3 months."
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap justify-center gap-2">
                    <span className="rounded-full bg-purple-100 px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-purple-800">
                      Machine Learning
                    </span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-gray-800">
                      3 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group sm:col-span-2 lg:col-span-1">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg sm:shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              {/* Top background design */}
              <div className="absolute top-0 h-24 sm:h-32 lg:h-36 w-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
              
              <div className="relative p-4 sm:p-6 lg:p-8">
                {/* Avatar - positioned higher */}
                <div className="mb-6 sm:mb-8 lg:mb-10 flex justify-center">
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 overflow-hidden rounded-full border-2 sm:border-3 lg:border-4 border-white shadow-md" style={{ marginTop: "-0.5rem" }}>
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Emily Rodriguez"
                      className="h-full w-full object-cover"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>Emily Rodriguez</h3>
                  <p className="text-sm sm:text-base text-blue-600">UX Designer</p>
                  
                  {/* Rating */}
                  <div className="mt-2 sm:mt-3 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400"
                      >
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mt-4 sm:mt-6">
                    <svg className="absolute -top-4 sm:-top-6 -left-1 sm:-left-2 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative text-sm sm:text-base lg:text-lg italic text-gray-600 leading-relaxed">
                      "As a busy mom, I could only dedicate weekends to learning. The weekly plan option was perfect for me, and I was able to transition to a UX design career while balancing family life."
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap justify-center gap-2">
                    <span className="rounded-full bg-blue-100 px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-blue-800">
                      UX Design
                    </span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-gray-800">
                      6 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-6xl rounded-xl sm:rounded-2xl bg-white shadow-lg sm:shadow-xl">
          <div className="bg-gradient-to-b from-gray-50 to-white p-6 sm:p-8 lg:p-12">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-teal-600 shadow-sm mb-4 sm:mb-6">
                  <span className="mr-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-500"></span>
                  Success Metrics
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>Our learners achieve their goals</h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                  We've helped thousands of people master new skills and advance their careers through structured,
                  personalized learning paths.
                </p>

                <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 lg:p-6 shadow-md sm:shadow-lg transition-all hover:shadow-xl">
                    <div className="absolute -right-2 -top-2 sm:-right-3 sm:-top-3 lg:-right-4 lg:-top-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full bg-teal-500/10"></div>
                    <div className="relative">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>94%</div>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Completion rate for learners who follow our roadmaps</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 lg:p-6 shadow-md sm:shadow-lg transition-all hover:shadow-xl">
                    <div className="absolute -right-2 -top-2 sm:-right-3 sm:-top-3 lg:-right-4 lg:-top-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full bg-purple-500/10"></div>
                    <div className="relative">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>78%</div>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Users who report career advancement after completing a roadmap</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 lg:p-6 shadow-md sm:shadow-lg transition-all hover:shadow-xl">
                    <div className="absolute -right-2 -top-2 sm:-right-3 sm:-top-3 lg:-right-4 lg:-top-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full bg-blue-500/10"></div>
                    <div className="relative">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>3x</div>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Faster learning compared to unstructured approaches</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 lg:p-6 shadow-md sm:shadow-lg transition-all hover:shadow-xl">
                    <div className="absolute -right-2 -top-2 sm:-right-3 sm:-top-3 lg:-right-4 lg:-top-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full bg-amber-500/10"></div>
                    <div className="relative">
                      <div className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>5k+</div>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Active learners using our platform daily</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-2xl w-full max-w-sm lg:max-w-none">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
                  
                  <div className="relative space-y-4 sm:space-y-6 lg:space-y-8">
                    <div className="text-center">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900" style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}>Your potential growth</h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600">Based on consistent daily learning</p>
                    </div>

                    <div className="h-[200px] sm:h-[220px] lg:h-[250px] w-full px-2 sm:px-0">
                      <div className="relative h-full w-full">
                        <div className="absolute bottom-0 left-[8%] sm:left-[5%] h-[30%] w-[10%] sm:w-[12%] rounded-t-md bg-gradient-to-t from-teal-500 to-teal-400"></div>
                        <div className="absolute bottom-0 left-[22%] sm:left-[20%] h-[45%] w-[10%] sm:w-[12%] rounded-t-md bg-gradient-to-t from-teal-500 to-teal-400"></div>
                        <div className="absolute bottom-0 left-[36%] sm:left-[35%] h-[60%] w-[10%] sm:w-[12%] rounded-t-md bg-gradient-to-t from-teal-600 to-teal-500"></div>
                        <div className="absolute bottom-0 left-[50%] h-[75%] w-[10%] sm:w-[12%] rounded-t-md bg-gradient-to-t from-teal-600 to-teal-500"></div>
                        <div className="absolute bottom-0 left-[64%] sm:left-[65%] h-[90%] w-[10%] sm:w-[12%] rounded-t-md bg-gradient-to-t from-teal-700 to-teal-600"></div>
                        <div className="absolute bottom-0 left-[78%] sm:left-[80%] h-[100%] w-[10%] sm:w-[12%] rounded-t-md bg-gradient-to-t from-teal-700 to-teal-600"></div>

                        <div className="absolute bottom-[-30px] left-[8%] text-xs font-medium text-gray-600 hidden sm:block">Week 1</div>
                        <div className="absolute bottom-[-30px] left-[23%] text-xs font-medium text-gray-600 hidden sm:block">Week 2</div>
                        <div className="absolute bottom-[-30px] left-[38%] text-xs font-medium text-gray-600 hidden sm:block">Week 4</div>
                        <div className="absolute bottom-[-30px] left-[53%] text-xs font-medium text-gray-600 hidden sm:block">Week 8</div>
                        <div className="absolute bottom-[-30px] left-[68%] text-xs font-medium text-gray-600 hidden sm:block">Week 12</div>
                        <div className="absolute bottom-[-30px] left-[83%] text-xs font-medium text-gray-600 hidden sm:block">Week 16</div>
                        
                        {/* Horizontal lines */}
                        <div className="absolute left-0 top-0 w-full border-t border-dashed border-gray-200"></div>
                        <div className="absolute left-0 top-[25%] w-full border-t border-dashed border-gray-200"></div>
                        <div className="absolute left-0 top-[50%] w-full border-t border-dashed border-gray-200"></div>
                        <div className="absolute left-0 top-[75%] w-full border-t border-dashed border-gray-200"></div>
                        <div className="absolute left-0 bottom-0 w-full border-t border-gray-300"></div>
                        
                        {/* Y-axis labels */}
                        <div className="absolute left-[-25px] sm:left-[-20px] top-[-8px] text-[9px] sm:text-xs font-medium text-gray-500">100%</div>
                        <div className="absolute left-[-25px] sm:left-[-20px] top-[25%] -translate-y-1/2 text-[9px] sm:text-xs font-medium text-gray-500">75%</div>
                        <div className="absolute left-[-25px] sm:left-[-20px] top-[50%] -translate-y-1/2 text-[9px] sm:text-xs font-medium text-gray-500">50%</div>
                        <div className="absolute left-[-25px] sm:left-[-20px] top-[75%] -translate-y-1/2 text-[9px] sm:text-xs font-medium text-gray-500">25%</div>
                        <div className="absolute bottom-[-8px] left-[-25px] sm:left-[-20px] text-[9px] sm:text-xs font-medium text-gray-500">0%</div>
                      </div>
                    </div>

                    <div className="mt-8 sm:mt-8 lg:mt-10 flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-teal-50 p-3 sm:p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 flex-shrink-0">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <p className="text-xs sm:text-sm text-gray-800">
                        <span className="font-semibold" style={{ fontFamily: "'Onest', sans-serif" }}>Start today</span> - consistent practice leads to exponential growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}