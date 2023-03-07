ARG VARIANT="18-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

WORKDIR /workspaces/developer-portal

RUN mkdir /workspaces/.docs-cli && chown node:node /workspaces/.docs-cli