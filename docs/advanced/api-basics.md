# API 基础

## 学习目标

了解 Anthropic API 的基础知识。

## 前置条件

你需要一个 Anthropic 账号和 API key。

## 快速开始

### 安装 SDK

```bash
npm install @anthropic-ai/sdk
```

### 简单示例

```typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: 'your-api-key-here'
});

async function main() {
  const message = await anthropic.messages.create({
    model: 'claude-3-opus-20240229',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: 'Hello, Claude!'
    }]
  });
  
  console.log(message.content);
}

main();
```

## 重要概念

### Models

- Claude Haiku - 最快，最便宜
- Claude Sonnet - 平衡之选
- Claude Opus - 最强大，最贵

### Messages API

- 对话式交互
- 包含消息历史
- 支持多轮对话

### Prompt Caching

对于重复使用的提示词部分，可以缓存以节省成本。

## 安全最佳实践

- 永远不要把 API key 提交到代码仓库
- 使用环境变量
- 考虑使用 API gateway 或代理
- 设置使用监控和告警

## 练习

如果你有 API key，尝试写一个简单的程序调用 Claude！
