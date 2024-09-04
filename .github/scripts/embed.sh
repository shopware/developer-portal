#! /usr/bin/env bash
set -e

# custom config
BRANCH_DOCS=main
BRANCH_DOCS_67=next-6.7
BRANCH_DOCS_65=v6.5
BRANCH_DOCS_64=v6.4
BRANCH_FRONTENDS=DX-devhub
BRANCH_ADMIN_EXTENSION_SDK=dx-devhub-admin-sdk
BRANCH_METEOR_ICON_KIT=dx/devhub-icon-kit
BRANCH_METEOR_COMPONENT_LIBRARY=DX-231
BRANCH_RELEASE_NOTES=main

# custom orgs
ORG_DOCS=shopware
ORG_DOCS_67=shopware
ORG_DOCS_65=shopware
ORG_DOCS_64=shopware
ORG_FRONTENDS=shopware
ORG_ADMIN_EXTENSION_SDK=shopware
ORG_METEOR_ICON_KIT=shopware
ORG_METEOR_COMPONENT_LIBRARY=bojanrajh
ORG_RELEASE_NOTES=shopware

if [[ "$PWD" != *"/developer-portal" ]]; then
  echo "DANGEROUS, WRONG PWD"
  echo $PWD
  exit 1
fi

#alias docs-cli="./cli/dist/docs-cli-linux"

./docs-cli.cjs clone \
 --ci \
 --repository shopware/docs \
 --branch ${BRANCH_DOCS:-main} \
 --src . \
 --dst docs \
 --org ${ORG_DOCS:-shopware}

./docs-cli.cjs clone \
 --ci \
 --repository shopware/docs \
 --branch ${BRANCH_DOCS_67:-main} \
 --src . \
 --dst docs/v6.7 \
 --org ${ORG_DOCS_67:-shopware}

./docs-cli.cjs clone \
 --ci \
 --repository shopware/docs \
 --branch ${BRANCH_DOCS_65:-main} \
 --src . \
 --dst docs/v6.5 \
 --org ${ORG_DOCS_65:-shopware}

./docs-cli.cjs clone \
 --ci \
 --repository shopware/docs \
 --branch ${BRANCH_DOCS_64:-main} \
 --src . \
 --dst docs/v6.4 \
 --org ${ORG_DOCS_64:-shopware}

./docs-cli.cjs clone \
 --ci \
 --keep \
 --repository shopware/frontends \
 --branch ${BRANCH_FRONTENDS:-main} \
 --src apps/docs/src \
 --dst frontends \
 --org ${ORG_FRONTENDS:-shopware}

#./docs-cli.cjs clone \
# --ci \
# --repository gitlab.shopware.com/product/engineering/platform-group/pwa/frontends \
# --user ${GITLAB_FRONTENDS_USERNAME} \
# --pass ${GITLAB_FRONTENDS_ACCESS_KEY} \
# --branch ${BRANCH_FRONTENDS:-main} \
# --src apps/docs/src \
# --dst frontends-gl \
# --git gitlab.shopware.com

./docs-cli.cjs clone \
 --ci \
 --repository shopware/meteor \
 --branch ${BRANCH_ADMIN_EXTENSION_SDK:-main} \
 --src packages/admin-sdk/docs \
 --dst resources/admin-extension-sdk \
 --org ${ORG_ADMIN_EXTENSION_SDK:-shopware}

./docs-cli.cjs clone \
 --ci \
 --repository shopware/meteor \
 --branch ${BRANCH_METEOR_ICON_KIT:-main} \
 --src packages/icon-kit/docs \
 --dst resources/meteor-icon-kit \
 --org ${ORG_METEOR_ICON_KIT:-shopware} \
 --root ../..

#./docs-cli.cjs clone \
# --ci \
# --repository shopware/meteor-component-library \
# --branch ${BRANCH_METEOR_COMPONENT_LIBRARY:-main} \
# --src docs \
# --dst resources/meteor-component-library \
# --org ${ORG_METEOR_COMPONENT_LIBRARY:-shopware}

./docs-cli.cjs clone \
 --ci \
 --repository shopware/release-notes \
 --branch ${BRANCH_RELEASE_NOTES:-main} \
 --src src \
 --dst release-notes \
 --org ${ORG_RELEASE_NOTES:-shopware}
