ARG VARIANT="18-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
RUN su node -c "npm install -g pnpm"

WORKDIR /workspaces/developer-portal

RUN mkdir /workspaces/.docs-cli && chown node:node /workspaces/.docs-cli