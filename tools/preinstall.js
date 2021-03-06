const fs = require("fs");
const path = require("path");

console.log("preinstall script running...");

const tslintConfig = "tslint.json";
console.log(`creating ${tslintConfig} to enable linting...`);
copyConfig(tslintConfig);

function copyConfig(configFilename) {
    const oldPath = path.join(__dirname, configFilename);
    const newPath = path.join(getAppRootFolder(), configFilename);
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function getAppRootFolder() {
    return path.join("..", "..", "..");
}
