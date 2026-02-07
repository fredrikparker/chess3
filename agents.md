# Agent Rules & Conventions

## Persistence & Task Management
- **Single Source of Truth**: All ACTIVE tasks related to this project MUST be tracked in `tasks.md`.
- **Project Log**: Move completed items to `log.md`.
- **Log Format**: 
  - Separate entries date-wise with `---`.
  - Header Timestamp: `YYYYMMDDTTTT-IST` (e.g. `20260208T0020-IST`).
  - Details: Include failure reasons, screenshots, or link to `incidents/REPORT_NAME.md` for complex issues.
- **Log Everything**: Append entries to `log.md` for significant actions.
- **Context Management**: Use `working_docs.md` to identify relevant files.

## Formatting & Style
- **Conventions**: Follow existing formatting in `brand.md` and `Architecture.md`.
- **Append-Only Policy**: When updating logs, **APPEND** new information. **DO NOT EDIT** existing historical records.
- **Instruction**: Always read `tasks.md` and `working_docs.md` before starting work.

## Documentation Structure
- `agents.md`: This file. Rules for agents.
- `tasks.md`: Active tasks and roadmap.
- `log.md`: Chronological log of completed work and decisions.
- `working_docs.md`: Index of relevant documentation.
- `stack.md`: Tech stack definition.
- `partner_docs.md`: Integration references.

## Interaction
- When a user approves a new `.md` file, add it to `working_docs.md`.
