import { useState, useEffect, useRef } from 'react'

/**
 * Animates a number from 0 to `target` over `duration` ms.
 * Starts when the element enters the viewport (via IntersectionObserver).
 */
export function useCounter(target, duration = 1800, delay = 0) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          setTimeout(() => {
            const start = performance.now()
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1)
              const ease = 1 - Math.pow(1 - p, 3) // ease-out cubic
              setValue(Math.round(ease * target))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }, delay)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, delay])

  return { value, ref }
}
