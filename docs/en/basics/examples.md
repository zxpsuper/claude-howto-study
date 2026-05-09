# Common Scenario Examples

## Learning Objectives

Learn Claude's applications in development through practical examples.

## Example 1: Code Explanation

> **You:** Can you help explain what this code does?
> I don't understand the reduce usage well.
>
> ```javascript
> function groupBy(arr, key) {
>   return arr.reduce((result, item) => {
>     (result[item[key]] = result[item[key]] || []).push(item);
>     return result;
>   }, {});
> }
> ```

## Example 2: Code Review

> **You:** Please review this React component code, identify potential issues and improvement suggestions:
>
> ```jsx
> function UserList({ users }) {
>   const list = [];
>   for (let i = 0; i < users.length; i++) {
>     list.push(<div key={i}>{users[i].name}</div>);
>   }
>   return <div>{list}</div>;
> }
> ```

## Example 3: Debugging Help

> **You:** I'm getting this error, can you help analyze possible reasons?
>
> ```
> Uncaught TypeError: Cannot read property 'map' of undefined
>     at UserList (App.js:42)
> ```
>
> Here's the relevant code:
> [Paste relevant code]

## Example 4: Refactoring Suggestions

> **You:** This code works, but doesn't feel elegant. Can you help me refactor it?
> Want it more readable while maintaining functionality.
>
> [Paste code]

## Example 5: Technology Selection Discussion

> **You:** I'm choosing a state management solution for a new project.
> Team is familiar with React, project is medium-size SaaS app.
> What are the pros and cons of Redux Toolkit, Zustand, Jotai?
> Which do you recommend for my scenario?

## Exercises

1. Choose one example above and actually try it
2. Based on your current work, write a prompt you actually need

---

**Previous:** [Understanding Limits](/en/basics/limits) | **Next:** [Intermediate](/en/intermediate/)
