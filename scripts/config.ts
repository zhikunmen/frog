/// 阅读 api.d.ts 查看文档
///<reference path="api.d.ts"/>

import { UglifyPlugin, IncrementCompilePlugin, CompilePlugin, ManifestPlugin, ExmlPlugin } from 'built-in';


import { CustomPlugin ,CustomPlugin2} from './myplugin';
import { ZipCreator } from './ZipCreatorPlugin'

const config: ResourceManagerConfig = {
    buildConfig: (params) => {
        const target = params.target;
        const command = params.command;
        const projectName = params.projectName;

        if (params.command == 'build') {
            const outputDir = '.';
            return {
                outputDir,
                commands: [
                    new ExmlPlugin('debug'),
                    new IncrementCompilePlugin(),
                ]
            }
        }
        else if (params.command == 'publish') {
            const outputDir = `bin-release/`;
            let data = {
                outputDir,
                commands: [
                    new CustomPlugin(),
                    new ExmlPlugin('commonjs2'),
                    new CompilePlugin({ libraryType: "release" }),
                    new UglifyPlugin([{
                        sources: [
                            "libs/modules/egret/egret.min.js",
                            "libs/modules/egret/egret.web.min.js",
                            "libs/modules/res/res.min.js",
                            "libs/modules/eui/eui.min.js",
                            "libs/modules/game/game.min.js",
                            "libs/modules/tween/tween.min.js",
                            "libs/modules/socket/socket.min.js",
                            "libs/modules/promise/promise.min.js",
                            "libs/modules/dragonBones/dragonBones.min.js",
                            "libs/seedrandom/seedrandom.min.js",
                            "core/bin/core.min.js",
                            "common/bin/common.min.js",
                            "net/bin/net.min.js",
                            "resource/default.thm.js",
                            "main.js"],
                        target: "main.min.js"
                    }]),
                    new ManifestPlugin({ output: 'manifest.json' }),
                    new CustomPlugin2(),
                ]
            };
            return data;
        }
        else {
            throw `unknown command : ${params.command}`
        }
    },

    mergeSelector: (path) => {
        if (path.indexOf("assets/bitmap/") >= 0) {
            return "assets/bitmap/sheet.sheet"
        }
        else if (path.indexOf("armature") >= 0 && path.indexOf(".json") >= 0) {
            return "assets/armature/1.zip";
        }
    },

    typeSelector: (path) => {
        const ext = path.substr(path.lastIndexOf(".") + 1);
        const typeMap = {
            "jpg": "image",
            "png": "image",
            "webp": "image",
            "json": "json",
            "fnt": "font",
            "pvr": "pvr",
            "mp3": "sound",
            "zip": "zip",
            "sheet": "sheet",
            "exml": "text"
        }
        let type = typeMap[ext];
        if (type == "json") {
            if (path.indexOf("sheet") >= 0) {
                type = "sheet";
            } else if (path.indexOf("movieclip") >= 0) {
                type = "movieclip";
            };
        }
        return type;
    }
}


export = config;
