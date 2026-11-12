#!/usr/bin/env bash
set -euo pipefail

base_path=$(node -e 'import("./src/config.ts").then(({ config }) => console.log(new URL(config.siteUrl).pathname))')
rm -rf .lighthouseci/site
mkdir -p ".lighthouseci/site${base_path}"
cp -r dist/. ".lighthouseci/site${base_path}"

lhci autorun
