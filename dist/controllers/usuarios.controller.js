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
exports.getUsuarios = void 0;
const Employees_1 = __importDefault(require("../interfaces/Employees"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const conn=await connect();
    // const usuarios =await conn.query('SELECT * FROM employees');
    // res.json(usuarios[0]);
    const usuarios = yield Employees_1.default.findAll();
    res.json({ usuarios });
    res.json({ usuarios });
});
exports.getUsuarios = getUsuarios;
