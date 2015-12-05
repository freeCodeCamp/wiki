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

upstream="live-gatsby"

./clearPages.sh
git pull ${upstream} master
node create_structure.js
node convert_files.js
git checkout gh-pages
cd ..
gatsby build --prefix-links
cp -r public/docs/* docs/
cp public/bundle.js ./
cp public/index.html ./
cp public/bundle.js.map ./
git add docs
git add bundle.js.map
git add bundle.js
git add index.html
git commit -m "Page built on `date +"%d-%m-%Y %T"`"
git push ${upstream} gh-pages
git checkout master
git push live master
