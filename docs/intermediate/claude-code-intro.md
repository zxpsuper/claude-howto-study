# Claude Code 入门

## 学习目标

了解 Claude Code 是什么以及如何使用它。

## 什么是 Claude Code？

Claude Code 是 Anthropic 官方的命令行工具，专门为开发者设计。

## 安装

```bash
npm install -g @anthropic-ai/claude-code
```

## 基本使用

启动 Claude Code：
```bash
claude
```

## 主要功能

- **直接访问本地文件** - Claude 可以读取和编辑你的项目文件
- **理解项目上下文** - Claude 了解整个项目的结构
- **执行命令** - 可以运行构建、测试等命令
- **Git 集成** - 理解 git 状态，可以帮你提交代码

## 典型工作流

1. 在项目目录中启动 `claude`
2. 告诉 Claude 你想做什么
3. Claude 查看相关文件
4. Claude 做出修改
5. 你审查并批准

## 安全提示

- 注意 Claude 可能会执行命令
- 审查所有代码变更
- 不要在敏感目录中使用

## 练习

尝试安装 Claude Code 并在一个测试项目中使用它！
