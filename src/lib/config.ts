/** Application name (replaced during api2cli create) */
export const APP_NAME = "context7";

/** CLI binary name (replaced during api2cli create) */
export const APP_CLI = "context7-cli";

/** API base URL (replaced during api2cli create) */
export const BASE_URL = "https://context7.com/api";

/** Auth type: bearer | api-key | basic | custom */
export const AUTH_TYPE = "bearer" as "bearer" | "api-key" | "basic";

/** Auth header name (e.g. Authorization, X-Api-Key) */
export const AUTH_HEADER = "Authorization";

/** Creds entry for token storage (e.g. global/dev/myapp) — used by creds CLI */
export const CREDS_ENTRY = "global/dev/context7";

/** Global state for output flags (set by root command) */
export const globalFlags = {
	json: false,
	format: "text" as "text" | "json" | "csv" | "yaml",
	verbose: false,
	noColor: false,
	noHeader: false,
};
