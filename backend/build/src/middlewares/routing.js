"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function middlewareRouter(req, res, next) {
    req.user = true;
    next();
}
exports.default = middlewareRouter;
