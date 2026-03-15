# context7-cli

CLI for the [Context7](https://context7.com) API - search libraries and retrieve up-to-date documentation context. Made with [api2cli.dev](https://api2cli.dev).

## Install

```bash
npx api2cli install Melvynx/context7-cli
```

This clones the repo, builds the CLI, links it to your PATH, and installs the AgentSkill to your coding agents.

## Install AgentSkill only

```bash
npx skills add Melvynx/context7-cli
```

## Auth

```bash
context7-cli auth set <token>     # Save your API token
context7-cli auth show            # Display current token (masked)
context7-cli auth show --raw      # Display full unmasked token
context7-cli auth test            # Verify your token works
context7-cli auth remove          # Delete the saved token
```

## Resources

### libs

Search for libraries in the Context7 database.

```bash
# Search by name
context7-cli libs --name react

# Search with a relevance query
context7-cli libs --name react --query "hooks"

# JSON output
context7-cli libs --name nextjs --query "app router" --json

# Select specific columns
context7-cli libs --name react --fields "name,id"
```

| Flag | Description |
|------|-------------|
| `--name <name>` | Library name to search for (e.g. react, nextjs) |
| `--query <query>` | Your question or task (used for relevance ranking) |
| `--fields <cols>` | Comma-separated columns to display |

### context get

Get documentation snippets for a library based on a query.

```bash
# Get docs as JSON
context7-cli context get --library /facebook/react --query "useEffect" --json

# Get docs as raw text
context7-cli context get --library /vercel/next.js --query "app router" --type txt --raw

# Pin to a specific version
context7-cli context get --library /vercel/next.js/v15.1.8 --query "middleware" --json

# Select specific columns
context7-cli context get --library /facebook/react --query "hooks" --fields "title,content"
```

| Flag | Description |
|------|-------------|
| `--library <id>` | Library ID from search (e.g. /facebook/react) |
| `--query <query>` | Your question or task |
| `--type <type>` | Response format: `json` or `txt` (default: json) |
| `--raw` | Output raw text (when `--type txt`) |
| `--fields <cols>` | Comma-separated columns to display |

## Global Flags

All commands support: `--json`, `--format <text|json|csv|yaml>`, `--verbose`, `--no-color`, `--no-header`
