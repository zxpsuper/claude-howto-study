# Structured Prompts

## Learning Objectives

Master how to use structured prompts to get more accurate and consistent outputs.

## Why Structure?

When tasks become complex, simple conversational prompts may not be effective enough. Structured prompts can:
- Clarify Claude's role
- Provide clear steps
- Ensure consistent output format
- Reduce misunderstandings

## Markdown Structuring

Use Markdown headings and lists to organize your prompts:

```markdown
# Role

You are a senior TypeScript development expert.

# Task

Please help me refactor this code to better follow TypeScript best practices.

# Input Code

[paste your code]

# Requirements

1. Add type annotations
2. Use more modern syntax
3. Add necessary comments
4. Keep original functionality unchanged

# Output Format

Please output in the following format:

## Original Code Issues Analysis

[list identified issues]

## Refactored Code

```typescript
[code]
```

## Improvement Explanation

[explain what improvements were made]
```

## XML-style Structuring

For more complex tasks, you can use XML tags:

```xml
<system>
You are a code review expert. When reviewing, focus on:
- Code quality
- Potential bugs
- Performance issues
- Security
</system>

<context>
This is a React project using TypeScript.
</context>

<code>
[code]
</code>

<instruction>
Please provide a detailed code review report in Markdown format.
</instruction>
```

## Practice

Try using structured prompts to have Claude help you complete a relatively complex task.
