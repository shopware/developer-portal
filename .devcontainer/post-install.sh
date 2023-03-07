#! /usr/bin/env bash

echo "POST-INSTALL: Installing (p)npm dependencies"
pnpm i

echo "POST-INSTALL: Building CLI"
pnpm cli:build

echo "POST-INSTALL: Showing CLI"
./docs-cli || echo ""

echo "POST-INSTALL: Set up SSH"
mkdir ~/.ssh/
echo $GH_SWAG_SSH_PRIVATE_KEY | base64 --decode > ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519 
ssh-keyscan github.com >> ~/.ssh/known_hosts

echo "POST-INSTALL: Cloning repos to ./repos/"
./docs-cli git

echo "POST-INSTALL: Running dev server"
pnpm dev