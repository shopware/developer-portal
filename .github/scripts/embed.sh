#! /usr/bin/env bash
set -e

# custom branches
export BRANCH_FRONTENDS=DX-202
export BRANCH_ADMIN_EXTENSION_SDK=DX-223

export BRANCH_METEOR_ICON_KIT=DX-223
export ORG_METEOR_ICON_KIT=bojanrajh

export BRANCH_METEOR_COMPONENT_LIBRARY=DX-231
export ORG_METEOR_COMPONENT_LIBRARY=bojanrajh

if [[ "$PWD" != *"/developer-portal" ]]; then
  echo "DANGEROUS, WRONG PWD"
  echo $PWD
  exit 1
fi

#alias docs-cli="./cli/dist/docs-cli-linux"

./docs-cli clone \
 --repository shopware/frontends \
 --branch main \
 --src apps/docs/src \
 --dst frontends

./docs-cli clone \
 --repository gitlab.shopware.com/product/engineering/platform-group/pwa/frontends \
 --user ${GITLAB_FRONTENDS_USERNAME} \
 --pass ${GITLAB_FRONTENDS_ACCESS_KEY} \
 --branch ${BRANCH_FRONTENDS} \
 --src apps/docs/src \
 --dst frontends-gl \
 --git gitlab.shopware.com

./docs-cli clone \
 --repository shopware/admin-extension-sdk \
 --branch ${BRANCH_ADMIN_EXTENSION_SDK} \
 --src docs/docs/guide \
 --dst resources/admin-extension-sdk

./docs-cli clone \
 --repository shopware/meteor-icon-kit \
 --branch ${BRANCH_METEOR_ICON_KIT} \
 --src docs \
 --dst resources/meteor-icon-kit \
 --org ${ORG_METEOR_ICON_KIT}

./docs-cli clone \
 --repository shopware/meteor-component-library \
 --branch ${BRANCH_METEOR_COMPONENT_LIBRARY} \
 --src docs \
 --dst resources/meteor-component-library \
 --org ${ORG_METEOR_COMPONENT_LIBRARY}