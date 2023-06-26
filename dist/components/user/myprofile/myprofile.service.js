"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPost = exports.getAllPost = exports.updateProfile = exports.getProfile = void 0;
const models_1 = require("../../../models/");
const getProfile = () => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        const cursor = yield models_1.USER.find({});
        data = {
            message: cursor,
            success: true,
        };
    }
    finally {
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.getProfile = getProfile;
const updateProfile = (id, { name, email, gender, phone, birthday, province, password }) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        console.log(id, name);
        const result = yield models_1.USER.updateOne({ _id: id }, {
            $set: {
                name: name,
                email: email,
                gender: gender,
                phone: phone,
                birthday: birthday,
                province: province,
                password: password
            }
        });
        data = {
            message: "Updated Succesfully",
            success: true,
        };
    }
    finally {
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.updateProfile = updateProfile;
const getAllPost = () => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        const result = yield models_1.POST.find({});
        data = {
            message: "Updated Succesfully",
            success: true,
            result: result
        };
    }
    finally {
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.getAllPost = getAllPost;
const getPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        console.log(id);
        const result = yield models_1.POST.findOne({ _id: id });
        console.log(result);
        data = {
            message: "Get Post By ID",
            success: true,
            result: result
        };
    }
    finally {
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.getPost = getPost;
