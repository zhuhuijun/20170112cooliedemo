/**
 * Created by Administrator on 2017/1/11.
 */
var showwin = function () {

};
showwin.init = function () {
    console.info('init');
};
showwin.showlog = function () {
    console.info('log');
};
module.exports = function () {
    return showwin;
};