'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: 'history_change',
      capture_pageleave: true,
      capture_performance: true,
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
