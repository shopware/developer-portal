#! /usr/bin/env bash
set -e

# custom branches
BRANCH_FRONTENDS=DX-202
BRANCH_ADMIN_EXTENSION_SDK=DX-223
BRANCH_METEOR_ICON_KIT=DX-223
ORG_METEOR_ICON_KIT=bojanrajh

echo "Cleanup previous scripts"
#rm -rf ./src/docs/frontends || true
#rm -rf ./src/docs/resources || true
rm -rf ./src/v || true

echo "\nCloning repositories"
sh ./.github/scripts/clone.sh git@github.com/shopware/frontends.git main apps/docs/src frontends
sh ./.github/scripts/clone.sh ${GITLAB_FRONTENDS_USERNAME}:${GITLAB_FRONTENDS_ACCESS_KEY}@gitlab.shopware.com/product/engineering/platform-group/pwa/frontends.git ${BRANCH_FRONTENDS} apps/docs/src frontends-gl
sh ./.github/scripts/clone.sh git@github.com/shopware/admin-extension-sdk.git ${BRANCH_ADMIN_EXTENSION_SDK} docs/docs/guide resources/admin-extension-sdk

#sh ./.github/scripts/clone.sh git@github.com/shopware/store-api-reference.git main docs docs/resources/store-api-reference
#sh ./.github/scripts/clone.sh git@github.com/shopware/admin-api-reference.git main docs docs/resources/admin-api-reference

echo "\nBuilding icons"
sh ./.github/scripts/clone.sh git@github.com/${ORG_METEOR_ICON_KIT}/meteor-icon-kit.git ${BRANCH_METEOR_ICON_KIT} docs resources/meteor-icon-kit

echo "\nClone versioned repositories"
#sh ./.github/scripts/clone.sh git@github.com/shopware/docs.git v6.4 . v/6.4/docs
#sh ./.github/scripts/clone.sh git@github.com/shopware/docs.git v6.3.0 . v/6.3/docs