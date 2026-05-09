# How to Access Claude

## Learning Objectives

Understand the various ways to access Claude.

## Main Access Methods

### 1. Web Version (Claude.ai)

The most direct way is to visit [claude.ai](https://claude.ai).

**Advantages:**
- Works out of the box
- User-friendly interface
- No configuration needed

### 2. Claude Code

Command-line tool, especially suitable for developers.

```bash
# Installation
npm install -g @anthropic-ai/claude-code
```

### 3. API

Integrate into your own applications via API.

```typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: 'your-api-key'
});
```

## Recommended Starting Point

For beginners, we recommend starting with the web version, then trying Claude Code once you're familiar.

## Exercises

1. Try visiting claude.ai and registering an account
2. Think about which usage method you prefer?

---

**Next:** [First Conversation](/en/getting-started/first-conversation)
