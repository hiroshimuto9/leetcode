/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
function simplifyPath(path: string): string {
  const pathArray = path.split('/')
  const canonicalPathArray: string[] = []

  for (const path of pathArray) {
    if (path === "." || path === "") continue
    if (path === "..") {
      canonicalPathArray.pop()
      continue
    }
    canonicalPathArray.push(path)
  }
  return `/${canonicalPathArray.join('/')}`
};
// @lc code=end

