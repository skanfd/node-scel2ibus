"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const process_1 = require("process");
const scel_parser_1 = __importDefault(require("scel-parser"));
// 至少指定一个scel文件，否则结束。
if (process_1.argv.length < 3) {
    console.error("错误：未指定scel文件。举例：scel2ibus ./example/物理.scel");
    process.exit(-1);
}
// 依次处理每一个文件
for (const pathto of process_1.argv.slice(2)) {
    const parser = new scel_parser_1.default(fs_1.readFileSync(pathto));
    const items = parser.parseWords();
    console.error(`${pathto}: ${items.length}`); // 提示当前scel文件的路径和它包含的词典条目数量。
    for (const { word, pinyin, frequency } of items) {
        console.log(word, pinyin.join("'"), frequency); //将当前词典条目写入标准输出。
    }
}
