/**
 * Created by dubaoxing on 2017/3/30.
 */
var Publish = require('./push');
var Push = {};

Push.static = function (dir, bypass, callback) {
    var path = dir + 'static/**/*.*';
    var timer = null;
    if (!bypass) return callback();
    timer = setTimeout(function () {
        if (timer) {
            timer = null;
            callback(false);
        }
    }, 10000);
    Publish(path, {
        group: 'hfe',
        repoName: 'block',
        assetsPubType: 'assets:publish',
        htmlPubType: 'h5:publish',
        version: '',
        timeout: 2000
    }, function (status) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
            callback(status);
        }
    });
    return true;
};

module.exports = Push;
