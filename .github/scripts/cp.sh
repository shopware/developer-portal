#! /usr/bin/env bash
set -e

# run this script to COPY dir/docs/foo into ../developer-portal/demo/foo
# this also works for PROD build
# cp.sh [src] [dst]
# example: sh ../developer-portal/.github/scripts/cp.sh apps/docs/src frontends

# prepare variables
SRC="$PWD/$1"
DST="../developer-portal/src/$2"

# delete existent symlink
if [ -d $DST ]; then
  echo "Deleting dir $DST"
  rm -r $DST
else
  echo "Directory $DST does not exist"
fi

# create deep dir
echo "Creating deep dir $DST"
# mkdir -p ${DST}

# create a new symlink
echo "Copying $SRC to $DST"
cp -R ${SRC} ${DST}

# run dev preview
# echo "Building parent"
# npm run dev --prefix ../developer-documentation-vitepress
