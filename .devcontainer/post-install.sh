#! /usr/bin/env bash

echo "Installing (p)npm dependencies"
pnpm i

echo "Building CLI"
pnpm cli:build

echo "CLI"
./docs-cli || echo "1"

# doesn't work because of org access
# https://github.com/codespaces-contrib/codespaces-multi-repo
# Remove the default credential helper
# Add one that just uses secrets available in the Codespace
#echo "Changing git credentials"
#sudo sed -i -E 's/helper =.*//' /etc/gitconfig
#git config --global credential.helper '!f() { sleep 1; echo "username=${GITHUB_USER}"; echo "password=${GH_TOKEN}"; }; f'

echo "Set up SSH"
mkdir ~/.ssh/
echo $GH_SWAG_SSH_PRIVATE_KEY | base64 --decode > ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519 
ssh-keyscan github.com >> ~/.ssh/known_hosts

echo "Cloning repos to ./repos/"
./docs-cli git