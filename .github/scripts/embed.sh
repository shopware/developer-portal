#! /usr/bin/env bash
set -e

# custom branches
#BRANCH_FRONTENDS=main
#BRANCH_ADMIN_EXTENSION_SDK=DX-223
BRANCH_METEOR_ICON_KIT=test-branch
#BRANCH_METEOR_COMPONENT_LIBRARY=DX-231

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
 --ci \
 --repository shopware/frontends \
 --branch main \
 --src apps/docs/src \
 --dst frontends

./docs-cli clone \
 --ci \
 --repository gitlab.shopware.com/product/engineering/platform-group/pwa/frontends \
 --user ${GITLAB_FRONTENDS_USERNAME} \
 --pass ${GITLAB_FRONTENDS_ACCESS_KEY} \
 --branch ${BRANCH_FRONTENDS:-main} \
 --src apps/docs/src \
 --dst frontends-gl \
 --git gitlab.shopware.com

./docs-cli clone \
 --ci \
 --repository shopware/admin-extension-sdk \
 --branch ${BRANCH_ADMIN_EXTENSION_SDK:-main} \
 --src docs/docs/guide \
 --dst resources/admin-extension-sdk

./docs-cli clone \
 --ci \
 --repository shopware/meteor-icon-kit \
 --branch ${BRANCH_METEOR_ICON_KIT:-main} \
 --src docs \
 --dst resources/meteor-icon-kit \
 --org ${ORG_METEOR_ICON_KIT:-shopware}

./docs-cli clone \
 --ci \
 --repository shopware/meteor-component-library \
 --branch ${BRANCH_METEOR_COMPONENT_LIBRARY:-main} \
 --src docs \
 --dst resources/meteor-component-library \
 --org ${ORG_METEOR_COMPONENT_LIBRARY:-shopware}