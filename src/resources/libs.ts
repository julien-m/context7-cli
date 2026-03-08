import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

interface SearchOpts {
  query: string;
  name: string;
  json?: boolean;
  format?: string;
  fields?: string;
}

async function searchLibs(opts: SearchOpts) {
  try {
    const data = await client.get("/v2/libs/search", {
      libraryName: opts.name,
      query: opts.query,
    });
    const fields = opts.fields?.split(",");
    output(data, { json: opts.json, format: opts.format, fields });
  } catch (err) {
    handleError(err, opts.json);
  }
}

export const libsResource = new Command("libs")
  .description("Search for libraries in the Context7 database")
  .requiredOption("--name <name>", "Library name to search for (e.g. react, nextjs)")
  .requiredOption("--query <query>", "Your question or task (used for relevance ranking)")
  .option("--fields <cols>", "Comma-separated columns to display")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .addHelpText(
    "after",
    '\nExamples:\n  context7-cli libs --name react --query "hooks" --json\n  context7-cli libs --name nextjs --query "app router"',
  )
  .action(async (opts: SearchOpts) => {
    await searchLibs(opts);
  });
