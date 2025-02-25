import { execSync } from "child_process";

export function remarkModifiedTime() {
  // @ts-ignore
  return function (tree, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    file.data.astro.frontmatter.updateDate = result.toString();
  };
}
