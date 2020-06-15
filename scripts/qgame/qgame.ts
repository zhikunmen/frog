import * as fs from 'fs';
import * as path from 'path';
export class MiqgamePlugin implements plugins.Command {

    private files: { url: string, buff: Buffer }[] = [];
    private readonly targetGame: RegExp;
    // 其他游戏过滤
    private readonly jsFilter: RegExp = /js\/games_.+\.min\.js$/i;
    private readonly assetsFilter: RegExp = /resource\/assets\/games\/game_.+/i;
    // pk游戏中的无用资源过滤
    private readonly otherFilters: RegExp[] = [
        /resource\/assets\/gameCenter/i,
        /resource\/assets\/rank/i,
        /resource\/assets\/sound_barrage/i,
        /resource\/assets\/sound\/.+\//i,
        /resource\/assets\/icon\/.+\.png/i,
        /resource\/assets\/roleHeads/i
    ];
    constructor() {
        //this.targetGame = new RegExp('findSomething'.toLocaleLowerCase());
        //this.targetGame = new RegExp('fiveinarow'.toLocaleLowerCase());
        //this.targetGame = new RegExp('dormitorywar'.toLocaleLowerCase());
        this.targetGame = new RegExp('animalchess'.toLocaleLowerCase());
        //this.targetGame = new RegExp('longJump'.toLocaleLowerCase());
        //this.targetGame = new RegExp('pigrun'.toLocaleLowerCase());
        //this.targetGame = new RegExp('bang'.toLocaleLowerCase());
    }
    async onFile(file: plugins.File) {
        const url = file.relative.split('\\').join('/');
        if (this.otherFilters.some(reg => reg.test(url))) {
            return null;
        }
        if (this.jsFilter.test(url) || this.assetsFilter.test(url)) {
            if (!this.targetGame.test(url.toLocaleLowerCase())) {
                return null;
            }
        }

        if (file.basename == 'default.thm.json') {
            const json = JSON.parse(file.contents.toString());
            json.exmls = json.exmls.filter(url => {
                return (!/games\/game_/.test(url)) || this.targetGame.test(url.toLocaleLowerCase());
            });
            file.contents = new Buffer(JSON.stringify(json, null, '\t'));
        }
        this.files.push({
            url,
            buff: file.contents
        });

        if (file.extname == '.js') {
            const filename = file.origin;
            if (filename == "libs/modules/promise/promise.js" || filename == 'libs/modules/promise/promise.min.js') {
                return null;
            }
            if (filename == 'libs/modules/egret/egret.js' || filename == 'libs/modules/egret/egret.min.js') {
                let content = file.contents.toString();
                content += `;window.egret = egret;`;
                content = content.replace(/definition = __global/, "definition = window");
                file.contents = new Buffer(content);
            }
            else {
                let content = file.contents.toString();
                if (
                    filename == "libs/modules/res/res.js" ||
                    filename == 'libs/modules/res/res.min.js' ||
                    filename == 'libs/modules/assetsmanager/assetsmanager.min.js' ||
                    filename == 'libs/modules/assetsmanager/assetsmanager.js'
                ) {
                    content += ";window.RES = RES;"
                }
                if (filename == "libs/modules/eui/eui.js" || filename == 'libs/modules/eui/eui.min.js') {
                    content += ";window.eui = eui;"
                    if (filename == "libs/modules/eui/eui.js") {
                        content = content.replace("function getRepeatedIds", "window.getRepeatedIds=function getRepeatedIds");
                        content = content.replace("function getIds", "window.getIds=function getIds");
                        content = content.replace("function toXMLString", "window.toXMLString=function toXMLString");
                        content = content.replace("function checkDeclarations", "window.checkDeclarations=function checkDeclarations");
                        content = content.replace("function getPropertyStr", "window.getPropertyStr=function getPropertyStr");
                    }
                }
                if (filename == 'libs/modules/dragonBones/dragonBones.js' || filename == 'libs/modules/dragonBones/dragonBones.min.js') {
                    content += ';window.dragonBones = dragonBones';
                }

                if (filename == 'librarys/egretpk/egretpk.js' || filename == 'librarys/egretpk/egretpk.min.js') {
                    content += ';window.EgretPK = EgretPK';
                }

                if (filename == 'librarys/extensionrec/extensionrec.js' || filename == 'librarys/extensionrec/extensionrec.min.js') {
                    content += ';window.ExtensionSDK = ExtensionSDK';
                }
                content = "var egret = window.egret;" + content;

                if (filename == 'main.js') {
                    content += "\n;window.Main = Main;"
                }
                file.contents = new Buffer(content);
            }
        }
        return file;
    }
    async onFinish(pluginContext: plugins.CommandContext) {
        //pluginContext.createFile(pluginContext.projectRoot + "/games/findSomething/bin/findSomething.js", new Buffer(fs.readFileSync(pluginContext.projectRoot + "/games/findSomething/bin/findSomething.js", "utf8")));
        //pluginContext.createFile(pluginContext.projectRoot + "/games/fiveinarow/bin/fiveinarow.js", new Buffer(fs.readFileSync(pluginContext.projectRoot + "/games/fiveinarow/bin/fiveinarow.js", "utf8")));
        //pluginContext.createFile(pluginContext.projectRoot + "/games/dormitorywar/bin/dormitorywar.js", new Buffer(fs.readFileSync(pluginContext.projectRoot + "/games/dormitorywar/bin/dormitorywar.js", "utf8")));
        pluginContext.createFile(pluginContext.projectRoot + "/games/animalchess/bin/animalchess.js", new Buffer(fs.readFileSync(pluginContext.projectRoot + "/games/animalchess/bin/animalchess.js", "utf8")));
        //pluginContext.createFile(pluginContext.projectRoot + "/games/longJump/bin/longJump.js", new Buffer(fs.readFileSync(pluginContext.projectRoot + "/games/longJump/bin/longJump.js", "utf8")));
        //pluginContext.createFile(pluginContext.projectRoot + "/games/pigrun/bin/pigrun.js", new Buffer(fs.readFileSync(pluginContext.projectRoot + "/games/pigrun/bin/pigrun.js", "utf8")));
        //pluginContext.createFile(pluginContext.projectRoot + "/games/bang/bin/bang.js", new Buffer(fs.readFileSync(pluginContext.projectRoot + "/games/bang/bin/bang.js", "utf8")));
        //同步 index.html 配置到 game.js

        const gameJSPath = path.join(pluginContext.outputDir, "main.js");
        if (!fs.existsSync(gameJSPath)) {
            console.log(`${gameJSPath}不存在，请先使用 Launcher 发布小米快游戏`);
            return;
        }
        let gameJSContent = fs.readFileSync(gameJSPath, { encoding: "utf8" });
        const projectConfig = pluginContext.buildConfig.projectConfig;
        const optionStr =
            `entryClassName: ${projectConfig.entryClassName},\n\t\t` +
            `orientation: ${projectConfig.orientation},\n\t\t` +
            `frameRate: ${projectConfig.frameRate},\n\t\t` +
            `scaleMode: ${projectConfig.scaleMode},\n\t\t` +
            `contentWidth: ${projectConfig.contentWidth},\n\t\t` +
            `contentHeight: ${projectConfig.contentHeight},\n\t\t` +
            `showFPS: ${projectConfig.showFPS},\n\t\t` +
            `fpsStyles: ${projectConfig.fpsStyles},\n\t\t` +
            `showLog: ${projectConfig.showLog},\n\t\t` +
            `maxTouches: ${projectConfig.maxTouches},`;
        const reg = /\/\/----auto option start----[\s\S]*\/\/----auto option end----/;
        const replaceStr = '\/\/----auto option start----\n\t\t' + optionStr + '\n\t\t\/\/----auto option end----';
        gameJSContent = gameJSContent.replace(reg, replaceStr);
        fs.writeFileSync(gameJSPath, gameJSContent);

        //修改横竖屏
        let orientation;
        if (projectConfig.orientation == '"landscape"') {
            orientation = "landscape";
        }
        else {
            orientation = "portrait";
        }
        const gameJSONPath = path.join(pluginContext.outputDir, "manifest.json");
        let gameJSONContent = JSON.parse(fs.readFileSync(gameJSONPath, { encoding: "utf8" }));
        gameJSONContent.orientation = orientation;
        fs.writeFileSync(gameJSONPath, JSON.stringify(gameJSONContent, null, "\t"));
    }
}
