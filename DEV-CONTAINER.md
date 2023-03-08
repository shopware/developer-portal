# Shopware Docs, CLI and DevContainer

You can try dev env provided by [GitHub Codespaces](https://github.com/codespaces).

## Setup

Because we need to clone multiple repositories, you need to generate a new SSH key or use your existing one. Head to GitHub > Settings > [Codespaces](https://github.com/settings/codespaces) and add a new Codespace secret named `GH_SWAG_SSH_PRIVATE_KEY` and assign it to `shopware/developer-portal` repository. This will allow you to clone all docs-content repos using SSH. As a value, enter base64 single-line encoded key.

```bash
$ base64 ~/.ssh/id_ed25519 -w 0
```

## Post-install

Post-install script is triggered during the `postCreateCommand` lifecycle hook and:
 - installs (p)npm dependencies
 - builds Shopware Docs CLI
 - sets up SSH key provided during the setup step above
 - clones and symlinks all docs-content repos
 - starts dev server

You can then edit contents from the `./src/` folder and commit from the `./repos/<repo>` folders.

# More resources

- [Using source control in your codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)
- [Using GitHub Codespaces in your JetBrains IDE](https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
- [Using GitHub Codespaces in Visual Studio Code](https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)