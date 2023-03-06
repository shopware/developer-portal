#! /usr/bin/env bash

echo "Installing (p)npm dependencies"
pnpm i

echo "Building CLI"
pnpm cli:build

echo "CLI"
./docs-cli || echo "1"

echo "Set up SSH"
ssh-keyscan github.com >> ~/.ssh/known_hosts

echo "Cloning repos to ./repos/"
./docs-cli git