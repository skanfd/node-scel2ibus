# node-scel2ibus

搜狗scel词库文件 ==> ibus智能拼音词库文件

这个程序的功能在于将搜狗scel词库文件转换为ibus智能拼音词库文件。

为简便起见，本程序的输出仅能输出到标准输出流。

使用方法1： scel2ibus ./example/物理.scel ./example/哲学.scel > dict.txt

使用方法2： find . -name *.scel -exec scel2ibus {} \\; > dict.txt
