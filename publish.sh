echo +----------------------------------------------------------+
echo + 1. 打包                                                   +
echo + 2. git commit                                            +
echo + 3. 发npm package                                         +
echo +----------------------------------------------------------+


read _command # request host



if [[ $_command = "1"  ]]; then
        yarn run build
fi
if [[ $_command = "2"  ]]; then
        git commit -am 'deploy'
        git push orign master
fi
if [[ $_command = "3" ]]; then
        npm version patch
        npm publish
fi