/**
 * Build script for @andromeda/css-framework
 *
 * Resolves all @import statements and generates a single bundled CSS file.
 * Uses Bun's built-in bundler for CSS.
 *
 * Output:
 * - dist/andromeda.css (bundled, readable)
 * - dist/andromeda.min.css (bundled, minified)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

const ROOT = resolve(import.meta.dir, "..");
const SRC = resolve(ROOT, "src/index.css");
const DIST = resolve(ROOT, "dist");

// Ensure dist directory exists
if (!existsSync(DIST)) {
	mkdirSync(DIST, { recursive: true });
}

async function build() {
	console.log("📦 Building @andromeda/css-framework...");

	try {
		// Use Bun's bundler for CSS
		const result = await Bun.build({
			entrypoints: [SRC],
			outdir: DIST,
			naming: "andromeda.[ext]",
			minify: false,
		});

		if (!result.success) {
			console.error("❌ Build failed:");
			for (const log of result.logs) {
				console.error(log);
			}
			process.exit(1);
		}

		// Also create minified version
		const minResult = await Bun.build({
			entrypoints: [SRC],
			outdir: DIST,
			naming: "andromeda.min.[ext]",
			minify: true,
		});

		if (!minResult.success) {
			console.error("❌ Minified build failed:");
			for (const log of minResult.logs) {
				console.error(log);
			}
			process.exit(1);
		}

		// Report sizes
		const cssFile = Bun.file(resolve(DIST, "andromeda.css"));
		const minFile = Bun.file(resolve(DIST, "andromeda.min.css"));
		const cssSize = (cssFile.size / 1024).toFixed(1);
		const minSize = (minFile.size / 1024).toFixed(1);

		console.log(`✅ dist/andromeda.css     ${cssSize} KB`);
		console.log(`✅ dist/andromeda.min.css  ${minSize} KB`);
		console.log("🎉 Build complete!");
	} catch (error) {
		console.error("❌ Build error:", error);
		process.exit(1);
	}
}

build();
