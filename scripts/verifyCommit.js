const fs = require('fs')
const msg = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf-8').trim()

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
const mergeRe = /^(Merge pull request|Merge branch)/
if (!commitRE.test(msg)) {
  if(!mergeRe.test(msg)){
    console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式`)
    process.exit(1)
  }
}
