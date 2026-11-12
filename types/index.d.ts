export type Segment = {
  topic: string
  start: number
  end: number
  activeMs: number
  msgs: number
}

export type Ledger = {
  id: string
  title: string
  project: string
  lastAt: number
  lastMsg: string
  segments: Segment[]
}

export type TopicTotal = { name: string; minutes: number; msgs: number }

export type Row = {
  id: string
  title: string
  project: string
  lastAt: number
  lastMsg: string
  current: string
  totalMin: number
  topics: TopicTotal[]
}

export type Tab = 'recent' | 'volume'

declare module 'claude-code' {
  interface PluginState {
    'session-history': {
      rows: Shaped<Row[]>
      tab: Tab
      status: string
    }
  }
}
