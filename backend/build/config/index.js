"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const port = 3001;
function configServer(app) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
exports.default = configServer;
