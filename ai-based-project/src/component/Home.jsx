import React from 'react'

const Home = () => {
  return (
    <div className='bg-white/5 min-h-screen w-full fixed top-0 left-0 '>
          <div className='hero-wrapper w-full bg-transparent text-white px-20 py-24 flex items-center justify-between gap-12'>
                <div className="max-w-xl">
                <div className="mb-4">
                  <span className="inline-block bg-white/10 text-white text-sm font-medium px-4 py-1 rounded-full backdrop-blur-sm">
                    🤖 Ai Based Mock Interview 🚀
                  </span>
                </div>
                <h1 className="text-5xl font-bold leading-tight">
                  Accelerate <br />
                  Your <br />
                  <span className="text-purple-400">Interview</span><span className="animate-pulse">|</span>
                </h1>
                <p className="mt-6 text-lg text-white/80">
                  Prepare like a pro with intelligent mock interviews, adaptive questioning, and actionable insights — everything you need to stand out and get hired.
                </p>
              </div>
          </div>
          
    </div>
  )
}

export default Home