"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorLogin = (e) => {
    console.log('err' + e);
    return {
        message: 'Gagal Login',
        status: 500,
        Error: 'error : ' + e,
    };
};
exports.default = ErrorLogin;
