import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

interface GetContextOpts {
  query: string;
  library: string;
  type?: string;
  json?: boolean;
  format?: string;
  fields?: string;
  raw?: boolean;
}

export const contextResource = new Command("context")
  .description("Retrieve documentation context for a library");

contextResource
  .command("get")
  .description("Get documentation snippets for a library based on a query")
  .requiredOption("--library <id>", "Library ID from search (e.g. /facebook/react)")
  .requiredOption("--query <query>", "Your question or task")
  .option("--type <type>", "Response format: json or txt", "json")
  .option("--raw", "Output raw text (when --type txt)")
  .option("--fields <cols>", "Comma-separated columns to display")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .addHelpText(
    "after",
    '\nExamples:\n  context7-cli context get --library /facebook/react --query "useEffect" --json\n  context7-cli context get --library /vercel/next.js --query "app router" --type txt --raw\n  context7-cli context get --library /vercel/next.js/v15.1.8 --query "middleware" --json',
  )
  .action(async (opts: GetContextOpts) => {
    try {
      const params: Record<string, string> = {
        libraryId: opts.library,
        query: opts.query,
      };
      if (opts.type) params.type = opts.type;

      if (opts.raw && opts.type === "txt") {
        const url = `/v2/context?${new URLSearchParams(params).toString()}`;
        const data = await client.get("/v2/context", params);
        console.log(String(data));
        return;
      }

      const data = await client.get("/v2/context", params);
      output(data, { json: opts.json, format: opts.format, fields: opts.fields?.split(",") });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
