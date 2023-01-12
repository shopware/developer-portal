#! /usr/bin/env bash
set -e

echo "Running Docker Algolia crawler"
docker run -it \
  --env-file=./.algolia/.env \
  -e "CONFIG=$(cat ./.algolia/config.json | jq -r tostring)" \
  algolia/docsearch-scraper

echo "Docker Algolia crawler ran, exiting"
