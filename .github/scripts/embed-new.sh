#! /usr/bin/env bash
set -e

# custom branches
BRANCH_FRONTENDS=DX-202
BRANCH_ADMIN_EXTENSION_SDK=DX-223
BRANCH_METEOR_ICON_KIT=DX-223
ORG_METEOR_ICON_KIT=bojanrajh

if [[ "$STR" != *"/developer-portal" ]]; then
  echo "DANGEROUS, WRONG PWD"
  exit 1
fi

# alias docs-cli="./cli/dist/docs-cli-linux"

./docs-cli clone \
 --repository git@github.com/shopware/frontends.git \
 --branch main \
 --src apps/docs/src \
 --dst frontends

./docs-cli clone \
 --repository gitlab.shopware.com/product/engineering/platform-group/pwa/frontends.git \
 --user ${GITLAB_FRONTENDS_USERNAME} \
 --pass ${GITLAB_FRONTENDS_ACCESS_KEY} \
 --branch ${BRANCH_FRONTENDS} \
 --src apps/docs/src \
 --dst frontends-gl \
 --git gitlab.shopware.com

./docs-cli clone \
 --repository git@github.com/shopware/admin-extension-sdk.git \
 --branch ${BRANCH_ADMIN_EXTENSION_SDK} \
 --src docs/docs/guide \
 --dst resources/admin-extension-sdk

# --repository git@github.com/${ORG_METEOR_ICON_KIT}/meteor-icon-kit.git \
./docs-cli clone \
 --repository git@github.com/shopware/meteor-icon-kit.git \
 --branch ${BRANCH_METEOR_ICON_KIT} \
 --src docs \
 --dst resources/meteor-icon-kit \
 --org ${ORG_METEOR_ICON_KIT}