# Prompt Engineering

## Learning Objectives

Learn advanced prompt engineering techniques.

## Chain-of-Thought

Have Claude show its thinking process:

> "Please think through solving this problem step by step, then give the answer."

## Few-Shot Learning

Give Claude a few examples to learn the pattern:

```markdown
Task: Convert descriptions to emojis

Examples:
"Happy" → 😊
"Sad" → 😢
"Surprised" → 😲

Now convert: "Celebration"
```

## Self-Consistency

Have Claude answer the same question multiple times, then choose the most consistent answer.

## Role Prompting

Giving Claude a specific identity can significantly change the output:

- "You are a senior Stack Overflow answerer"
- "You are a patient programming mentor"
- "You are a rigorous code auditor"

## Prompt Iteration

Prompts are rarely perfect on the first try. Iterate and improve:
1. Write initial prompt
2. Test and observe issues
3. Adjust prompt
4. Repeat

## Practice

Find a question that Claude doesn't answer very well and try using these techniques to improve the prompt.
