echo +----------------------------------------------------------+
echo + git commit                                               +
echo +----------------------------------------------------------+


yarn run build

git pull origin  master

git  add .
git commit -m 'deploy'

git push origin master

npm version  patch

npm publish

