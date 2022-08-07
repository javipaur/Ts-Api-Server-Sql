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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.singin = exports.singup = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ValidatePassword_1 = require("../utils/ValidatePassword");
const singup = (req, res) => {
    res.send('singup');
};
exports.singup = singup;
const singin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    //Buscamos por el mail 
    const user = yield User_1.default.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) {
        return res.status(400).json('Email or pasword is wrong');
    }
    const isPasswordValid = yield (0, ValidatePassword_1.validatePassword)(req.body.password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json('Invalid Password');
    }
    //Generamso token
    const token = jsonwebtoken_1.default.sign({ id: user.userId }, process.env.TOKEN_SECRET || 'tokentest', { expiresIn: 60 * 60 * 24 });
    res.header('auth-token', token).json(User_1.default);
});
exports.singin = singin;
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(req.userId, { pasword: 0 });
    if (!user)
        return res.status(404).json('No User found');
    res.json(user);
});
exports.profile = profile;
