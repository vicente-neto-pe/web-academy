"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const productsRouter = (0, express_1.Router)({ mergeParams: true });
productsRouter.get('/', product_controller_1.default.readAll);
productsRouter.get('/:id', product_controller_1.default.readOne);
productsRouter.post('/', product_controller_1.default.create);
productsRouter.delete('/:id', product_controller_1.default.remove);
productsRouter.put('/:id', product_controller_1.default.update);
exports.default = productsRouter;
