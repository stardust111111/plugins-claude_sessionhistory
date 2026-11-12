# session-history

A Claude Code mod that keeps a topic ledger for every session and shows it in a side pane.

- Every message you send is tagged with a topic and a short subtopic note (a quick Haiku call; short follow-ups stay on the current topic).
- Each session writes `~/.claude/session-topics/<session-id>.md`: topic runs with start, end, active minutes (gaps capped at 15 min) and message counts, plus totals and your last message.
- `/history` opens the pane for the session you call it from (a dropdown switches to any other session):
  - **Timeline**: each topic run as a collapsible row with duration, time range, message count and a bar; expand a row for its subtopic notes; collapse or expand all.
  - **Summary**: the session's main topics by share of active time, with notes, plus a short written summary on demand.
- `/topic <name>` marks a topic switch by hand.

## Install

```
/plugin install session-history --marketplace stardust111111/plugins-claude_sessionhistory
```

Answer `y` to add the marketplace, then pick a scope. In the Claude desktop app: click **+** next to the prompt, **Add plugins**, **Add marketplace**, **Add from a repository**, enter `stardust111111/plugins-claude_sessionhistory`, then add **session-history**. Run `/reload-plugins` in sessions that were already open.
