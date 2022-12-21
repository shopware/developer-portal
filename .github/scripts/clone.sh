#! /usr/bin/env bash
set -e

# run this script in CI to CLONE a subfolder of a repository
# clone.sh [repo] [branch] [src] [dst]
# example: sh ./.github/scripts/clone.sh git@github.com/shopware/frontends.git v6.4 docs docs/v/6.4/frontends

# prepare variables
echo "\nCloning to $4 from $3 in $2@$1"
SRC="/tmp/mount-all/$3"
DST="./src/$4"
DST="../developer-portal/src/$4"

# delete existent dir
if [ -d $DST ]; then
  echo "Deleting dir $DST"
  rm -r $DST
else
  echo "Directory $DST does not exist"
fi

# cleanup previous checkout
if [ -d /tmp/mount-all ]; then
  echo "Cleaning up dir /tmp/mount-all"
  rm -rf /tmp/mount-all
fi

# clone into tmp dir
echo "Cloning branch $2 in repo $1"
git clone --depth 1 -b $2 https://$1 /tmp/mount-all

# special flows
if [ -f /tmp/mount-all/.github/scripts/docs-after-clone.sh ]; then
  echo "Running additional steps"
  sh /tmp/mount-all/.github/scripts/docs-after-clone.sh
fi

# create deep dir
echo "Creating deep dir $DST"
mkdir -p ${DST}

# tmp delete last dir
echo "Deleting last dir"
rm -r $DST

# create a new symlink
echo "Copying $SRC to $DST"
cp -R ${SRC} ${DST}

# cleanup tmp dir
echo "Cleaning up"
rm -rf /tmp/mount-all
