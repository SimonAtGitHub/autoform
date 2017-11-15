echo +----------------------------------------------------------+
echo + git commit                                               +
echo +----------------------------------------------------------+


yarn run build

git  add .
git commit -m 'deploy'

git push origin master

npm version  patch

npm publish

