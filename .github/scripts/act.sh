#! /usr/bin/env bash
set -e

echo "Running act"
./bin/act workflow_dispatch \
 --artifact-server-path=/tmp/artifacts \
 --secret-file=.act.env