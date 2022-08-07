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
exports.createUuId = exports.validatePassword = exports.encryptPassword = exports.User = void 0;
const database_1 = __importDefault(require("../database"));
const sequelize_1 = require("sequelize");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const uuid_1 = require("uuid");
const Role_1 = require("./Role");
exports.User = database_1.default.define("users", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        required: true,
        lowercase: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        required: true,
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        required: true,
        unique: true,
    },
    roles: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamp: true,
});
exports.User.belongsToMany(Role_1.Role, {
    through: "user_roles",
    as: "role",
    foreignKey: "userId",
});
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcryptjs_1.default.genSalt(10);
    return bcryptjs_1.default.hash(password, salt);
});
exports.encryptPassword = encryptPassword;
const validatePassword = function (passwordBd, passwordUser) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(passwordBd, passwordUser);
    });
};
exports.validatePassword = validatePassword;
const createUuId = function () {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, uuid_1.v4)();
    });
};
exports.createUuId = createUuId;
exports.default = exports.User;
