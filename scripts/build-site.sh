#!/usr/bin/env bash
# Assembles the portfolio site: the page in docs/ plus the Neuroform
# standalone build that its opening animation loads.
#
#   scripts/build-site.sh <docs-dir> <output-dir> <neuroform-dir>
#
# <neuroform-dir> is an installed Neuroform package, for example
# node_modules/neuroform after
#   npm install --legacy-peer-deps "git+https://github.com/Skitionek/Neuroform.git#main"
# npm builds the package on install (its prepare script).
#
# The page loads the bundle from neuroform/ next to itself, so the same output
# works at the site root and in a pull request preview folder.
set -euo pipefail

docs_dir=${1:?usage: build-site.sh <docs-dir> <output-dir> <neuroform-dir>}
output_dir=${2:?usage: build-site.sh <docs-dir> <output-dir> <neuroform-dir>}
neuroform_dir=${3:?usage: build-site.sh <docs-dir> <output-dir> <neuroform-dir>}

bundle="$neuroform_dir/dist-lib/neuroform.standalone.js"
if [ ! -f "$bundle" ]; then
  echo "missing $bundle: install Neuroform from GitHub so that it builds" >&2
  exit 1
fi

mkdir -p "$output_dir/neuroform"
cp -R "$docs_dir/." "$output_dir/"

# The licence and the notice for the MNI ICBM152 brain template travel with
# the bundle, which contains both the code and data derived from it.
cp "$bundle" \
  "$neuroform_dir/LICENSE" \
  "$neuroform_dir/src/assets/brain-mni152.LICENSE.txt" \
  "$output_dir/neuroform/"
