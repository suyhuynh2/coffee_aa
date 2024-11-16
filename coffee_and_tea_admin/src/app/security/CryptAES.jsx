/* eslint-disable no-unused-vars */
import CryptoJS from "crypto-js";

export const encryptAES = (data, key) => {
    return CryptoJS.AES.encrypt(data, key).toString();
}

export const decryptAES = (data, key) => {
    return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
}

const randomAESKey = () => {
    return CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
};
