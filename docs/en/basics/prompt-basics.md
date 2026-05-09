# Prompt Basics

## Learning Objectives

Master the basic principles of writing effective prompts.

## What is a Prompt?

A prompt is the instruction or question you send to Claude. Better prompts get better answers.

## Four Elements of a Good Prompt

### 1. Role

Tell Claude what role to play:

> "As a senior frontend architect..."

### 2. Context

Provide relevant background information:

> "...I'm refactoring a Vue 2 project to Vue 3..."

### 3. Task

Specify what to do:

> "...Please help me review this component's code and provide improvement suggestions..."

### 4. Format

Specify the output format:

> "...Please answer in this format: Problem, Reason, Suggested Code."

## Complete Example

```
As a code review expert (Role),
I'm establishing code standards for my team (Context),
Please help me write a JavaScript code style guide (Task),
Content should include: Naming conventions, Comment standards, Best practices, output in Markdown format (Format).
```

## Exercises

1. Rewrite "Help me write a function" into a better prompt
2. Use the four-element method to write a prompt asking Claude to explain an algorithm

---

**Next:** [Conversation Tips](/en/basics/conversation-tips)
