/**
 * Created by egret on 16/2/1.
 */
var fs = require("fs");
var msgFilePath = "./net/src/proto/msg/";

function clearFolder() {
    if (fs.existsSync(msgFilePath)) {
        files = fs.readdirSync(msgFilePath);
        files.forEach(function (file, index){
            var path = msgFilePath + file;
            fs.unlinkSync(path);
        });
    }
}

clearFolder();