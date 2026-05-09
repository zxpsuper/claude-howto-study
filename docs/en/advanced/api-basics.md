# API Basics

## Learning Objectives

Understand the basics of the Anthropic API.

## Prerequisites

You need an Anthropic account and API key.

## Quick Start

### Install SDK

```bash
npm install @anthropic-ai/sdk
```

### Simple Example

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

## Important Concepts

### Models

- Claude Haiku - Fastest, cheapest
- Claude Sonnet - Balanced choice
- Claude Opus - Most powerful, most expensive

### Messages API

- Conversational interaction
- Includes message history
- Supports multi-turn conversations

### Prompt Caching

For frequently reused prompt parts, you can cache to save costs.

## Security Best Practices

- Never commit API keys to code repositories
- Use environment variables
- Consider using API gateway or proxy
- Set up usage monitoring and alerts

## Practice

If you have an API key, try writing a simple program to call Claude!
