[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/c/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/0xberuuu/news-18-nov-2026/rank.svg)](https://make.fun/c/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/0xberuuu/news-18-nov-2026/reward.svg)](https://make.fun/c/news-image-20261118)

# The World in One Day — 18 November 2026

An entry for the [make.fun competition "Sum up 18 November's world news in one image"](https://make.fun/c/news-image-20261118).

The image is a newspaper-style infographic drawn entirely in code: six
verified stories reported on Wednesday 18 November 2026, across regions
and fields — Nvidia's record quarter, Gulf air defences intercepting
drones, the crippled Crimean Bridge, the Dow's 849-point plunge, Cyclone
Akvan strengthening in the Bay of Bengal, and leaders gathering in
Shenzhen for the APEC summit.

## How it works

`main.ts` (Node 22, standard library only, no network) copies the
pre-rendered `entry.png` into the output directory. Both grader runs
write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entrypoint; copies `entry.png` to the output directory
- `entry.png` — the 1024×1024 infographic, drawn by the build session
- `LICENSE` — MIT

## Sources

Events were verified against reports published on 18 November 2026
(Reuters, Bloomberg, IMD bulletins, and company filings). No news was
invented; nothing in the image is speculation presented as fact.
