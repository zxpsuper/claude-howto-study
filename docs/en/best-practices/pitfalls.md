# Pitfalls to Avoid

## Learning Objectives

Understand common pitfalls when using Claude and how to avoid them.

## Common Pitfalls

### 1. Blindly Trusting Code Output

❌ Wrong approach: Directly use Claude's code in production

✅ Correct approach:
- Read every line carefully
- Understand what the code does
- Run tests
- Check edge cases
- Security review

### 2. Providing Too Little Context

❌ "Help me fix this bug"

✅ "I'm working on feature X, and I get error Z when running command Y. Here's the relevant code: [code], here's the error message: [error]"

### 3. Trying to Do Too Much at Once

❌ "Help me rewrite the entire app, adding user auth, payments, admin dashboard..."

✅ Split into small tasks, one at a time

### 4. Ignoring Claude's Errors

If Claude is clearly talking nonsense:
- Stop and reassess
- May need to rephrase the question
- Or switch tasks
- Sometimes starting a new conversation helps

### 5. Prompts Are Too Vague

❌ "Write a good website"

✅ "Write a blog homepage with React + TypeScript, with hero section, article list, footer. Use Tailwind CSS."

## Red Flag Warning Signs

Watch for these signals:
- Claude gets increasingly verbose but says nothing substantial
- Claude repeats itself
- Claude makes obvious factual errors
- Claude apologizes but keeps making the same mistake

When these happen, it's time to readjust your strategy.

## Practice

Think about pitfalls you've encountered when using Claude—how would you avoid them?
