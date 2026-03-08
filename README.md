# context7-cli

CLI for the [Context7](https://context7.com) API — search libraries and retrieve up-to-date documentation context. Made with [api2cli.dev](https://api2cli.dev).

## Install

```bash
npx api2cli install Melvynx/context7-cli
```

This clones the repo, builds the CLI, links it to your PATH, and installs the AgentSkill to your coding agents.

## Install AgentSkill only

```bash
npx skills add Melvynx/context7-cli
```

## Usage

```bash
context7-cli auth set "your-ctx7sk-api-key"
context7-cli auth test
context7-cli --help
```

## Resources

### libs

| Command | Description |
|---------|-------------|
| `context7-cli libs --name react --query "hooks" --json` | Search for libraries by name |

### context

| Command | Description |
|---------|-------------|
| `context7-cli context get --library /facebook/react --query "useEffect" --json` | Get documentation snippets (JSON) |
| `context7-cli context get --library /vercel/next.js --query "app router" --type txt --raw` | Get docs as raw text |
| `context7-cli context get --library /vercel/next.js/v15.1.8 --query "middleware" --json` | Pin to specific version |

## Global Flags

All commands support: `--json`, `--format <text|json|csv|yaml>`, `--verbose`, `--no-color`, `--no-header`
