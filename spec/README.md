# mobiera.com content specification

This directory is the source of truth for the new mobiera.com. It holds the
copy for every page, the news items that ship at launch, the style rules, the
facts file, the redirect map and the design brief. The site is built from these
files; nothing appears on a page that is not here.

The plan behind it: https://claude.ai/code/artifact/9af747c2-9237-45b3-b686-78f4c73cfa65

## Layout

```text
spec/
  README.md          this file
  STYLE.md           voice and style rules for every page and news item
  facts.yaml         every number, date and name the site may state, with its source
  sitemap.md         navigation, footer, URL tree
  redirects.txt      old URL to new URL
  pages/             one Markdown file per page, front matter for title and description
  news/              one Markdown file per news item, dated
  design/            logo reuse, stack decision, the three design directions
```

## How to review

- Each page file opens with front matter (`title`, `description`, `url`) and
  ends with a `Sources` section naming where each fact comes from.
- Copy follows `STYLE.md`. In particular: no em-dashes, US spelling, no
  superlatives without a measure, no names of people, no email addresses except
  privacy@mobiera.com on the privacy page.
- Any fact not in `facts.yaml` must be added there before it is used on a page.
- Review by pull request. Comments on wording go on the page file; comments on
  facts go on `facts.yaml`.

## Status

Content drafted 9 September 2026 from the approved content plan. Decisions
taken that day are logged in `facts.yaml` under `decisions`. The site under
`app/` was built from these files the same day, on design direction A.
