# session-history

A Claude Code mod that keeps a topic ledger for every session and shows it in a side pane.

- Every message you send is tagged with a topic (a quick Haiku call; short follow-ups stay on the current topic).
- Each session writes `~/.claude/session-topics/<session-id>.md`: topic runs with start, end, active minutes (gaps capped at 15 min) and message counts, plus totals and your last message.
- `/history` opens the pane: **Recent** (sessions newest first, current topic, last message) and **By volume** (topic split per session and across all sessions).
- `/topic <name>` marks a topic switch by hand.

## Install

```
/plugin install session-history --marketplace stardust111111/claude-session-history
```

Answer `y` to add the marketplace, then pick a scope. In the Claude desktop app: click **+** next to the prompt, **Add plugins**, **Add marketplace**, **Add from a repository**, enter `stardust111111/claude-session-history`, then add **session-history**. Run `/reload-plugins` in sessions that were already open.
