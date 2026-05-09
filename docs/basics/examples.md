# 常用场景示例

## 学习目标

通过实际示例学习 Claude 在开发中的应用。

## 示例 1: 代码解释

&gt; **你：** 能帮我解释这段代码在做什么吗？
&gt; 我对其中的 reduce 用法不太理解。
&gt;
&gt; ```javascript
&gt; function groupBy(arr, key) {
&gt;   return arr.reduce((result, item) =&gt; {
&gt;     (result[item[key]] = result[item[key]] || []).push(item);
&gt;     return result;
&gt;   }, {});
&gt; }
&gt; ```

## 示例 2: 代码审查

&gt; **你：** 请审查这段 React 组件代码，找出潜在问题和改进建议：
&gt;
&gt; ```jsx
&gt; function UserList({ users }) {
&gt;   const list = [];
&gt;   for (let i = 0; i &lt; users.length; i++) {
&gt;     list.push(&lt;div key={i}&gt;{users[i].name}&lt;/div&gt;);
&gt;   }
&gt;   return &lt;div&gt;{list}&lt;/div&gt;;
&gt; }
&gt; ```

## 示例 3: 调试帮助

&gt; **你：** 我遇到这个错误，能帮我分析可能的原因吗？
&gt;
&gt; ```
&gt; Uncaught TypeError: Cannot read property 'map' of undefined
&gt;     at UserList (App.js:42)
&gt; ```
&gt;
&gt; 相关代码是这样的：
&gt; [粘贴相关代码]

## 示例 4: 重构建议

&gt; **你：** 这段代码可以工作，但感觉不够优雅。能帮我重构一下吗？
&gt; 希望更易读且保持功能不变。
&gt;
&gt; [粘贴代码]

## 示例 5: 技术选型讨论

&gt; **你：** 我正在为新项目选择状态管理方案。
&gt; 团队熟悉 React，项目是中等规模的 SaaS 应用。
&gt; 你觉得 Redux Toolkit、Zustand、Jotai 各有什么优缺点？
&gt; 我的场景下推荐哪个？

## 练习与思考

1. 从上面选一个示例，实际尝试一下
2. 根据你当前的工作，写一个你实际需要的提示词

---

**上一篇：** [能力边界](/zh/basics/limits) | **进入：** [进阶篇](/zh/intermediate/)
