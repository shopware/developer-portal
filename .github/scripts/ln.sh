#! /usr/bin/env bash
set -e

# run this script to SYMLINK dir/docs/foo into ../developer-portal/demo/foo
# this only works for DEV preview
# ln.sh [src] [dst]
# example: sh ../developer-portal/.github/scripts/ln.sh apps/docs/src frontends

# prepare variables
SRC="$PWD/$1"
DST="../developer-portal/demo/$2"

# delete existent symlink
if [ -L $DST ]; then
  echo "Deleting symlink $DST"
  rm $DST
else
  echo "Symlink $DST does not exist"
fi

#sleep 3

# create a new symlink
echo "Mounting $SRC to $DST"
ln -s ${SRC} ${DST}

# bugfix?
BUG=$DST"/src"
if [ -L $BUG ]; then
  echo "Deleting bugged symlink"
  rm $BUG
fi

# run dev preview
echo "Building parent"
npm run dev --prefix ../developer-portal
