"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.singin = exports.singup = void 0;
function singup(req, res) {
    res.send('singup');
}
exports.singup = singup;
function singin(req, res) {
    res.send('singin');
}
exports.singin = singin;
function profile(req, res) {
    res.send('profile');
}
exports.profile = profile;