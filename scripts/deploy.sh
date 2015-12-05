#!/bin/bash

# Automate Deployment -- bash script
# - run clearPages.sh
# - run
# - git checkout master
# - Pull down the Wiki
# - Run Conversion  (See above)
# - Run Cleanup (See above)
# - Run Gatsby Build Operation
# - git checkout gh-pages
# - Copy files to `gh-pages`
# - Commit files to that branch
# - Git push

./clearPages.sh
node create_structure.js
node convert_files.js
git checkout gh-pages
cd ..
gatsby build
cd public
cp docs ../
cp bundle.js ../
cp index.html ../
cp bundle.js.map ../
