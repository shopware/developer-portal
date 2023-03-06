# Shopware Docs, CLI and DevContainer

You can try dev env provided by [GitHub Codespaces](https://github.com/codespaces).

## Setup

Because we need to clone multiple repositories, you need to generate a new SSH key or use your existing one. Head to GitHub > Settings > [Codespaces](https://github.com/settings/codespaces) and add a new Codespace secret named `GH_SWAG_SSH_PRIVATE_KEY` and assign it to `shopware/developer-portal` repository. This will allow you to clone all docs-content repos using SSH.

## Post-install

Post-install script is triggered during the `postCreateCommand` lifecycle hook and:
 - installs (p)npm dependencies
 - builds Shopware Docs CLI
 - sets up SSH key provided during the setup step above
 - clones all docs-content repos