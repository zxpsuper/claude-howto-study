# Context Management

## Learning Objectives

Learn how to effectively manage conversation context for better results.

## Context Window

Claude has a context window limit—meaning it can only remember a certain number of recent tokens in the conversation.

## Context Management Techniques

### 1. Key Information Summary

When conversations get long, ask Claude to make a summary:

> "Please organize the key points we just discussed into a concise summary for future reference."

### 2. Phased Processing

Don't try to do everything in one conversation. Split big tasks into multiple conversations:
- Conversation 1: Requirements analysis
- Conversation 2: Solution design
- Conversation 3: Code implementation
- Conversation 4: Review and optimization

### 3. Use External Documents

For very large codebases or documents, consider:
- Only pasting relevant parts
- Using Claude Code's file reference feature
- Using Claude API for batch processing

### 4. Regular Reset

When you notice Claude starting to forget earlier content, you can start a new conversation and paste in the necessary context.

## Example Workflow

```
Conversation 1:
- Discuss project requirements
- Get Claude's suggestions
- Record key decisions

Conversation 2:
- Paste key decisions as context
- Start implementing feature A
- ...
```

## Practice

Look back at one of your recent long conversations and think about how you would better manage the context if you started over.
