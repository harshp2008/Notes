import { isCancel, outro } from "@clack/prompts"
import chalk from "chalk"
import { contentCacheFolder, cwd } from "./constants.js"
import { spawnSync } from "child_process"
import fs from "fs"
import path from "path"

export function escapePath(fp) {
  return fp
    .replace(/\\ /g, " ") // unescape spaces
    .replace(/^"(.*)"$/, "$1")
    .replace(/^'(.*)'$/, "$1")
    .trim()
}

export function exitIfCancel(val) {
  if (isCancel(val)) {
    outro(styleText("red", "Exiting"))
    process.exit(0)
  } else {
    return val
  }
}

export async function stashContentFolder(contentFolder) {
  const obsidianPath = path.join(contentFolder, ".obsidian")
  const tempObsidianPath = path.join(cwd, ".obsidian_temp")
  const hasObsidian = fs.existsSync(obsidianPath)

  if (hasObsidian) {
    await fs.promises.rename(obsidianPath, tempObsidianPath)
  }

  await fs.promises.rm(contentCacheFolder, { force: true, recursive: true })
  await fs.promises.cp(contentFolder, contentCacheFolder, {
    force: true,
    recursive: true,
    verbatimSymlinks: true,
    preserveTimestamps: true,
  })
  await fs.promises.rm(contentFolder, { force: true, recursive: true })

  if (hasObsidian) {
    await fs.promises.mkdir(contentFolder, { recursive: true })
    await fs.promises.rename(tempObsidianPath, obsidianPath)
  }
}

export function gitPull(origin, branch) {
  const flags = ["--no-rebase", "--autostash", "-s", "recursive", "-X", "ours", "--no-edit"]
  const out = spawnSync("git", ["pull", ...flags, origin, branch], { stdio: "inherit" })
  if (out.stderr) {
    throw new Error(styleText("red", `Error while pulling updates: ${out.stderr}`))
  } else if (out.status !== 0) {
    throw new Error(styleText("red", "Error while pulling updates"))
  }
}

export async function popContentFolder(contentFolder) {
  const obsidianPath = path.join(contentFolder, ".obsidian")
  const tempObsidianPath = path.join(cwd, ".obsidian_temp")
  const hasObsidian = fs.existsSync(obsidianPath)

  if (hasObsidian) {
    await fs.promises.rename(obsidianPath, tempObsidianPath)
  }

  await fs.promises.rm(contentFolder, { force: true, recursive: true })
  await fs.promises.cp(contentCacheFolder, contentFolder, {
    force: true,
    recursive: true,
    verbatimSymlinks: true,
    preserveTimestamps: true,
  })

  if (hasObsidian) {
    await fs.promises.rename(tempObsidianPath, obsidianPath)
  }

  await fs.promises.rm(contentCacheFolder, { force: true, recursive: true })
}
