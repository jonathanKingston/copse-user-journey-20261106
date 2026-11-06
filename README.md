# Copse synthetic user journey

A disposable fixture for testing review, signed commits, PRs and CI diagnosis through Copse. No real project data.

## Title slugs

`slug(title)` is intended to normalize whitespace-separated titles by trimming leading and trailing whitespace, lowercasing the text, and joining words with hyphens. For example, `"  Draft   status\tupdate  "` should become `"draft-status-update"`.
