export type Segment = {
  topic: string
  start: number
  end: number
  activeMs: number
  msgs: number
  notes?: string[]
}

export type Ledger = {
  id: string
  title: string
  project: string
  lastAt: number
  lastMsg: string
  segments: Segment[]
  summary?: string
  summaryAtMsgs?: number
}

export type SessionOption = { id: string; title: string; lastAt: number }

export type Tab = 'timeline' | 'summary'

declare module 'claude-code' {
  interface PluginState {
    'session-history': {
      tab: Tab
      scope: string
      collapsed: Shaped<string[]>
      sessions: Shaped<SessionOption[]>
      view: Shaped<Ledger | null>
      busy: string
    }
  }
}
