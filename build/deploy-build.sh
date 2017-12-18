npm run build

git add .
git commit -m 'publish'

cd autoform/dist
npm version patch
npm publish

cd ../..
git add .
git commit -m 'publish'
git push