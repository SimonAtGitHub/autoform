/**
 * Created by dubaoxing on 2017/4/5.
 */
var Request = require('superagent');

module.exports = function (api, component, callback) {
    Request
        .post(api)
        .withCredentials()
        .send(component)
        .set('Content-Type', 'application/json')
        .end(function (err, res) {
            callback(err, res);
        });
};
