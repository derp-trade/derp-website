"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  size: number
  top: number
  left: number
  speed: number
  delay: number
  opacity: number
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate random stars
    const newStars: Star[] = []
    const starCount = Math.floor(window.innerWidth / 15) // Responsive star count

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        size: Math.floor(Math.random() * 3) + 1,
        top: Math.floor(Math.random() * 100),
        left: Math.floor(Math.random() * 100),
        speed: Math.floor(Math.random() * 20) + 10,
        delay: Math.floor(Math.random() * 10),
        opacity: Math.random() * 0.7 + 0.3,
      })
    }

    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute pixelated animate-float"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            backgroundColor: "#ffffff",
            opacity: star.opacity,
            animationDuration: `${star.speed}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
