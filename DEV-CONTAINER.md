# Shopware Docs, CLI and DevContainer

You can try dev env provided by [GitHub Codespaces](https://github.com/codespaces) or [GitPod](https://gitpod.io).

## Setup

Because we need to clone multiple repositories, you need to generate a new SSH key or use your existing one. If you don't have a `ed25519` key, you can generate it by running a command below:

```bash
$ ssh-keygen -t ed25519 -C "your.name@shopware.com"
```

Generate single-line base64 encoded value of your private key:

```bash
$ base64 ~/.ssh/id_ed25519 -w 0
```

This will allow you to clone all docs-content repos using SSH, and later commit changes to them.

__GitHub:__ head to GitHub > Settings > [Codespaces](https://github.com/settings/codespaces) and add a new Codespace secret named `GH_SWAG_SSH_PRIVATE_KEY` and assign it to `shopware/developer-portal` repository.

__GitPod:__ Head to User Settings > [Variables](https://gitpod.io/user/variables) and add a new variable named `GH_SWAG_SSH_PRIVATE_KEY` and assign it to `shopware/developer-portal` repository.

Make sure to also add the key to the GitHub > Settings > [SSH and GPG keys](https://github.com/settings/keys).

```bash
$ cat ~/.ssh/id_ed25519
```

## Post-install

Post-install script is triggered during the `postCreateCommand` lifecycle hook and:
 - installs (p)npm dependencies
 - builds Shopware Docs CLI
 - sets up SSH key provided during the setup step above
 - clones and symlinks all docs-content repos
 - starts dev server

You can then edit contents from the `./src/` folder and commit from the `./repos/<repo>-<branch>` folders.

# More resources

- [Using source control in your codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)
- [Using GitHub Codespaces in your JetBrains IDE](https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
- [Using GitHub Codespaces in Visual Studio Code](https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
- [Dev Container metadata reference](https://containers.dev/implementors/json_reference/)