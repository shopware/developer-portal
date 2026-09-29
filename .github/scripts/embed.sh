#! /usr/bin/env bash
set -e

# custom config
BRANCH_DOCS=main
BRANCH_DOCS_66=v6.6
BRANCH_DOCS_65=v6.5
BRANCH_FRONTENDS=main
BRANCH_ADMIN_EXTENSION_SDK=main
BRANCH_METEOR_COMPONENT_LIBRARY=DX-231
#BRANCH_ADMIN_API=main
#BRANCH_STORE_API=main
BRANCH_RELEASE_NOTES=main

# custom orgs
ORG_DOCS=shopware
ORG_DOCS_67=shopware
ORG_DOCS_65=shopware
ORG_FRONTENDS=shopware
ORG_ADMIN_EXTENSION_SDK=shopware
ORG_METEOR_COMPONENT_LIBRARY=bojanrajh
#ORG_ADMIN_API=shopware
#ORG_STORE_API=shopware
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
 --branch ${BRANCH_DOCS_66:-main} \
 --src . \
 --dst docs/v6.6 \
 --org ${ORG_DOCS_66:-shopware}

./docs-cli.cjs clone \
 --ci \
 --repository shopware/docs \
 --branch ${BRANCH_DOCS_65:-main} \
 --src . \
 --dst docs/v6.5 \
 --org ${ORG_DOCS_65:-shopware}

./docs-cli.cjs clone \
 --ci \
 --keep \
 --repository shopware/frontends \
 --branch ${BRANCH_FRONTENDS:-main} \
 --src apps/docs/src \
 --dst frontends \
 --org ${ORG_FRONTENDS:-shopware}

./docs-cli.cjs clone \
 --ci \
 --repository shopware/meteor \
 --branch ${BRANCH_ADMIN_EXTENSION_SDK:-main} \
 --src docs/admin-sdk \
 --dst resources/admin-extension-sdk \
 --org ${ORG_ADMIN_EXTENSION_SDK:-shopware}

#./docs-cli.cjs clone \
# --ci \
# --repository shopware/meteor-component-library \
# --branch ${BRANCH_METEOR_COMPONENT_LIBRARY:-main} \
# --src docs \
# --dst resources/meteor-component-library \
# --org ${ORG_METEOR_COMPONENT_LIBRARY:-shopware}

#./docs-cli.cjs clone \
# --ci \
# --repository shopware/admin-api-reference \
# --branch ${BRANCH_ADMIN_API:-main} \
# --src docs \
# --dst resources/admin-api \
# --org ${ORG_ADMIN_API:-shopware}

#./docs-cli.cjs clone \
# --ci \
# --repository shopware/store-api-reference \
# --branch ${BRANCH_STORE_API:-main} \
# --src docs \
# --dst resources/store-api \
# --org ${ORG_STORE_API:-shopware}

./docs-cli.cjs clone \
 --ci \
 --repository shopware/release-notes \
 --branch ${BRANCH_RELEASE_NOTES:-main} \
 --src src \
 --dst release-notes \
 --org ${ORG_RELEASE_NOTES:-shopware}
