#! /usr/bin/env bash

echo "POST-CREATE: Set up SSH"
mkdir ~/.ssh/
echo $GH_SWAG_SSH_PRIVATE_KEY | base64 --decode > ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519 
ssh-keyscan github.com >> ~/.ssh/known_hosts

echo "POST-CREATE: Cloning repos to ./repos/"
./docs-cli.cjs git

echo "POST-CREATE: Running dev server"
pnpm dev