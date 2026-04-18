#!/bin/bash
# Pre-commit hook: guards against committing secrets and build artifacts

set -e

echo "Running pre-commit checks..."

# 1. Block .env.local from being staged
if git diff --cached --name-only | grep -q "\.env\.local"; then
  echo "ERROR: Attempted to commit .env.local — secrets must never be committed."
  exit 1
fi

# 2. Block .env (non-example)
if git diff --cached --name-only | grep -qE "^\.env$"; then
  echo "ERROR: Attempted to commit .env — use .env.example instead."
  exit 1
fi

# 3. Warn on hardcoded API key patterns
if git diff --cached | grep -qE "(sk-|pk_test_|whsec_|re_[a-zA-Z0-9]{32}|AIza)"; then
  echo "WARNING: Possible API key detected in staged changes. Review before committing."
  exit 1
fi

echo "Pre-commit checks passed."
exit 0
