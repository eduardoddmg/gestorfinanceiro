"use strict";
exports.__esModule = true;
var port = 3001;
function configServer(app) {
    app.listen(port, function () {
        console.log("Server is running on port ".concat(port));
    });
}
exports["default"] = configServer;
