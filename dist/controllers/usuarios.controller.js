"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const Employees_1 = __importDefault(require("../models/Employees"));
const User_1 = __importStar(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield Employees_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsuarios = getUsuarios;
const createUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    //Guardando Nuevo Usuario
    const user = new User_1.default({ name, email, password });
    //Encriptar pws en MD5
    user.password = yield (0, User_1.encryptPassword)(password);
    //IdentificadorUsuario
    user.identificadorUsuario = yield (0, User_1.createUuId)();
    const newUsuario = yield User_1.default.create({
        name: user.name,
        email: user.email,
        password: user.password,
        identificadorUsuario: user.identificadorUsuario
    });
    //Token
    const token = jsonwebtoken_1.default.sign({ id: newUsuario.identificadorUsuario }, process.env.TOKEN_SECRET || 'tokentest');
    res.header('auth-token', token).json(newUsuario);
    //res.json({"msj":'Usuario creado correctamente!',"token":token });
});
exports.createUsuarios = createUsuarios;
