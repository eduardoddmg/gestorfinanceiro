const home = require('./home');

export default function RouterMain(app: any) {
    return app.use('/', home);
};