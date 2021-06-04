// 是否为开发环境
let is_dev = null;
// this is a `hack` for check env
if (process.env["WEBPACK_SERVE"] === 'true') {
    console.info("\n\n\nrunning under yarn start  [in dev mode]...\n\n");
    is_dev = true;
} else {
    console.info("\n\n\nrunning in production mode\n\n");
    is_dev = false;
}

module.exports = is_dev;
