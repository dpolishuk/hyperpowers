# Hyperpowers for OpenCode

## Project-local install
Copy `.opencode/` and `opencode.json` into your repo.

## Global install
Copy the OpenCode assets into your global config:
- `.opencode/skill/` -> `~/.config/opencode/skill/`
- `.opencode/command/` -> `~/.config/opencode/command/`
- `.opencode/agent/` -> `~/.config/opencode/agent/`
- `.opencode/plugin/` -> `~/.config/opencode/plugin/`
- `opencode.json` -> `~/.config/opencode/opencode.json` (optional)

## Combined install script
Run from the Hyperpowers repo root:

```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT="$(pwd)"
read -r -p "Install scope (local/global)? " SCOPE

case "${SCOPE}" in
  local|project|project-local)
    read -r -p "Target repo path (default: current dir)? " TARGET
    TARGET=${TARGET:-"${ROOT}"}
    mkdir -p "${TARGET}/.opencode"
    cp -R "${ROOT}/.opencode/"* "${TARGET}/.opencode/"
    cp "${ROOT}/opencode.json" "${TARGET}/opencode.json"
    ;;
  global)
    mkdir -p ~/.config/opencode/{skill,command,agent,plugin}
    cp -R "${ROOT}/.opencode/skill/"* ~/.config/opencode/skill/
    cp -R "${ROOT}/.opencode/command/"* ~/.config/opencode/command/
    cp -R "${ROOT}/.opencode/agent/"* ~/.config/opencode/agent/
    cp -R "${ROOT}/.opencode/plugin/"* ~/.config/opencode/plugin/
    cp "${ROOT}/opencode.json" ~/.config/opencode/opencode.json
    ;;
  *)
    echo "Unknown scope. Use 'local' or 'global'."
    exit 1
    ;;
esac
```

## Verify
- `/hp-brainstorm`
- `skill` shows Hyperpowers skills
- `@test-runner` runs tests
