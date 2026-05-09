
# Claude How-to 学习网站设计文档

**日期：** 2026-05-09  
**作者：** Claude Code

## 项目概述

创建一个现代化的静态网站，教授有一定编程基础的人学习使用 Claude。网站使用 VitePress 构建，支持完全独立的中英文双语内容。

## 目标受众

有一定编程基础的开发者和技术人员。

## 技术选型

- **框架：** VitePress 1.x
- **语言：** Vue 3 + TypeScript
- **样式：** Tailwind CSS + 自定义组件
- **部署：** 静态构建（GitHub Pages / Vercel / Netlify）

## 目录结构

```
claude-howto-study/
├── docs/
│   ├── .vitepress/
│   │   ├── theme/          # 自定义主题
│   │   ├── config.ts       # 主配置
│   │   └── config.zh.ts    # 中文配置
│   ├── zh/                 # 中文内容
│   │   ├── index.md        # 中文首页
│   │   ├── getting-started/
│   │   ├── basics/
│   │   ├── intermediate/
│   │   ├── advanced/
│   │   └── best-practices/
│   ├── en/                 # 英文内容
│   │   ├── index.md        # 英文首页
│   │   ├── getting-started/
│   │   ├── basics/
│   │   ├── intermediate/
│   │   ├── advanced/
│   │   └── best-practices/
│   └── public/             # 静态资源
├── CLAUDE.md
└── package.json
```

## 内容结构

### 五阶段学习路径

1. **Getting Started（入门篇）**
   - Claude 是什么
   - 为什么用 Claude
   - 如何访问 Claude
   - 第一次对话

2. **Basics（基础篇）**
   - 提示词基础
   - 对话技巧
   - 理解 Claude 的能力边界
   - 常用场景示例

3. **Intermediate（进阶篇）**
   - 结构化提示词
   - 上下文管理
   - 多轮对话优化
   - Claude Code 入门

4. **Advanced（高级篇）**
   - 提示词工程深度
   - 复杂任务分解
   - 与工具结合使用
   - API 基础

5. **Best Practices（最佳实践）**
   - 高效工作流
   - 常见陷阱规避
   - 真实案例分析
   - 持续学习资源

### 文章模板

每篇文章包含：
- 清晰的学习目标
- 通俗易懂的讲解
- 实际可操作的示例
- 练习与思考题
- 扩展阅读链接

## 设计风格

### 视觉设计
- 现代简约风格，充足留白
- 深蓝/紫色主色调，搭配柔和渐变
- 卡片式布局，层次分明
- 流畅的交互动画

### 关键组件
1. 首页 Hero 区域
2. 可视化学习路径卡片
3. 美观的代码高亮
4. 提示/注意信息框
5. 学习进度指示器
6. 语言切换器

### 交互特性
- 响应式设计（移动端支持）
- 可折叠侧边栏导航
- 内置搜索功能
- 深色/浅色模式切换
- 平滑滚动

## 双语实现

- 完全独立的 `/zh/` 和 `/en/` 目录结构
- 导航栏提供语言切换按钮
- 每篇文章有对应的语言版本链接
