#! /usr/bin/env bash
set -e

echo "Cleanup previous scripts"
#rm -rf ./src/docs/frontends || true
#rm -rf ./src/docs/resources || true
rm -rf ./src/v || true

echo "\nCloning repositories"
sh ./.github/scripts/clone.sh git@github.com/shopware/frontends.git main apps/docs/src frontends
#sh ./.github/scripts/clone.sh git@github.com/shopware/admin-extension-sdk.git main docs/docs/guide docs/resources/admin-extension-sdk
#sh ./.github/scripts/clone.sh git@github.com/shopware/store-api-reference.git main docs docs/resources/store-api-reference
#sh ./.github/scripts/clone.sh git@github.com/shopware/admin-api-reference.git main docs docs/resources/admin-api-reference
#sh ./.github/scripts/clone.sh git@github.com/shopware/meteor-icon-kit.git main docs resources/meteor-icon-kit

echo "\nClone versioned repositories"
#sh ./.github/scripts/clone.sh git@github.com/shopware/docs.git v6.4 . v/6.4/docs
#sh ./.github/scripts/clone.sh git@github.com/shopware/docs.git v6.3.0 . v/6.3/docs