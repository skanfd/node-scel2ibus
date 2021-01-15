import { readFileSync } from "fs";
import { argv, exit } from "process";
import ScelParser from "scel-parser";

// 这个程序的功能在于将搜狗scel词库文件转换为ibus智能拼音词库文件。
// 为简便起见，本程序的输出仅能输出到标准输出流。

// 使用方法1： scel2ibus ./example/物理.scel ./example/哲学.scel > dict.txt
// 使用方法2： find . -name *.scel -exec scel2ibus {} \; > dict.txt

// 至少指定一个scel文件，否则结束。
if (argv.length < 3) {
  console.error("错误：未指定scel文件。举例：scel2ibus ./example/物理.scel");
  exit(-1);
}

// 依次处理每一个文件
for (const pathto of argv.slice(2)) {
  const parser = new ScelParser(readFileSync(pathto));
  const items = parser.parseWords();
  console.error(`${pathto}: ${items.length}`); // 提示当前scel文件的路径和它包含的词典条目数量。
  for (const { word, pinyin, frequency } of items) {
    console.log(word, pinyin.join("'"), frequency); //将当前词典条目写入标准输出。
  }
}
