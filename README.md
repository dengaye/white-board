> ESLint + Prettier 规范 react + TS 项目

# 概述

- [EditorConfig](https://editorconfig.org/): 不同编译器之间维护统一的风格，.editorconfig
- [ESLint](https://github.com/eslint/eslint): 代码检测工具，.eslintrc.json
- [prettier](https://prettier.io/docs/en/): 一个 Opinionated 的代码格式化工具，.prettierrc

## EditorConfig

可以帮助开发者在不同的编辑器和 IDE 之间定义和维护一致的代码风格。

## ESLint

### 初始化

使用 `eslintrc.json` 配置文件进行 lint 规则配置。

官方所有三种：

- JavaScript (eslintrc.js)
- YAML (eslintrc.yaml)
- JSON (eslintrc.json)

### 参数配置

[](https://cn.eslint.org/docs/user-guide/configuring)

**root**

指定根目录

```
root: true
```

**parser 解析器**

三种：espima（默认）、babel-eslint、@typescript-eslint/parse

```
parser: @typescript-eslint/parse
```

**plugins 插件**

官方提供很多插件，但是只能检测标准。如果项目中使用 JSX 或 Vue，ESLint 就无法检测了.

ESLint 插件有固定的格式，以 `eslint-plugin-` 开头，使用时可以忽略

```
plugins: [],
```

插件主要是为 ESLint 新增一些检查规则，开启这些规则还需要在 `rules` 中配置。

**extends**

使用已经写好一套 ESLint 规则，如果不喜欢里面的规则，可以在 rules 中重新配置。

plugins + rules 是 ESLint 的基础配置， extends 可以看作是去集成配置的最佳实践

[eslint:recommended 的规则](https://cn.eslint.org/docs/rules/)

[](https://juejin.im/post/6859291468138774535)

**globals 全局变量**

在执行期间访问的额外的全局变量

```
// true / "writeable',
// false / "readonly"

globals: {
	"window": "readonly",
  "require": "readonly"
}
```

**env 环境**

指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。每个环境都不会互斥，可以定义多个。
如：browser 下 window ； node 下 global ；ES6 环境下有 Set 等新特性全局变量。

ESLint 中可选的环境有很多，预设值可在[这个文件](https://github.com/eslint/eslint/blob/v6.0.1/conf/environments.js)中查看。

```
env: {
	es6: true, // 默认会设置 ecmaVersion 为 6，自动启动 ES6 语法
}
```

[](https://segmentfault.com/a/1190000020835739)

**parserOptions**

设置解析器选项能帮助 ESLint 确定什么是解析错误。

指定你想要支持的 JavaScript 语言选项，默认情况下， ESLint 支持 ECMAScript 语法，也可以覆盖他，以启用对 ECMAScript 其他版本或 JSX 的支持。

支持 JSX 不代表支持 React ,最好使用 eslint-plugin-react 。
同样支持 ES6 语法，不代表支持 ES6 新全局变量（如 Set ），需要在 `env` 中设置

```
{
	// 可以使用数字 5，6，7， 8， 9 或 10 来设置需要使用 ECMAScript 版本；
	// 也可以使用年份 2015 （同 6 ），2016，2017、2018、2019
	ecmaVersion: 2018


	sourceType: "module"  // 默认为 script ，module 表示你的代码是 ECMAScript 模块

	ecmaFeatures: {
		jsx: true， //启动 jsx
	}
}
```

**overrides**

外置的 rules 一般都是全局生效，通过 `overrides`，可以针对一些文件覆盖一些规则
