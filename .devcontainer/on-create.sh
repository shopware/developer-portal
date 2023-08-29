#! /usr/bin/env bash

echo "ON-CREATE: Installing (p)npm dependencies"
pnpm i

echo "ON-CREATE: Building CLI"
pnpm cli:build

echo "ON-CREATE: Showing CLI"
./docs-cli.cjs || echo ""