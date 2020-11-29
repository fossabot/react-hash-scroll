import { promisify } from "util";
import { promises } from "fs";
import { join, parse } from "path";
import { exec } from "child_process";
import * as moment from "moment";

export const { readFile, writeFile, readdir: readDir } = promises;

export const execute = promisify(exec);

export { join, parse };

export const getChangedDirs = () => {
  return execute("git diff --dirstat=files,0 HEAD | sed -E 's/^[ 0-9.]+% //g'");
};

export const getChangedFiles = () => {
  return execute("git diff --name-only");
};

export const today = moment().format("YYYY-MM-DD");
export const PACKAGE_NAME = "react-hash-scroll";
export const PACKAGE_REPO_NAME = "react-hash-scroll";
export const PACKAGE_REPO_OWNER = "YashTotale";
export const ROOT_DIR = join(__dirname, "..");
