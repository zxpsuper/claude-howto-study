# 如何访问 Claude

## 学习目标

了解访问 Claude 的各种方式。

## 主要访问方式

### 1. 网页版 (Claude.ai)

最直接的方式是访问 [claude.ai](https://claude.ai)。

**优点：**
- 开箱即用
- 界面友好
- 无需配置

### 2. Claude Code

命令行工具，特别适合开发者。

```bash
# 安装方式
npm install -g @anthropic-ai/claude-code
```

### 3. API

通过 API 集成到你自己的应用中。

```typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: 'your-api-key'
});
```

## 推荐起步方式

对于初学者，建议从网页版开始，熟悉后再尝试 Claude Code。

## 练习与思考

1. 尝试访问 claude.ai 并注册账号
2. 思考你更倾向于哪种使用方式？

---

**下一篇：** [第一次对话](/zh/getting-started/first-conversation)
