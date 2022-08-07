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
exports.createUsuarios = exports.getUsuarios = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const EncriptPassword_1 = require("../utils/EncriptPassword");
const CreateUid_1 = require("../utils/CreateUid");
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield User_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsuarios = getUsuarios;
const createUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    //Guardando Nuevo Usuario
    const user = new User_1.default({ name, email, password });
    //Encriptar pws en MD5
    user.password = yield (0, EncriptPassword_1.encryptPassword)(password);
    //IdentificadorUsuario
    user.userId = yield (0, CreateUid_1.createUuId)();
    const newUsuario = yield User_1.default.create({
        name: user.name,
        email: user.email,
        password: user.password,
        userId: user.userId
    });
    //Token
    const token = jsonwebtoken_1.default.sign({ id: newUsuario.userId }, process.env.TOKEN_SECRET || 'tokentest');
    res.header('auth-token', token).json(newUsuario);
    //res.json({"msj":'Usuario creado correctamente!',"token":token });
});
exports.createUsuarios = createUsuarios;