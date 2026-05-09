import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: "Claude Howto",
      description: "学会使用 Claude，从入门到精通",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '入门', link: '/getting-started/what-is-claude' },
          { text: '基础', link: '/basics/prompt-basics' },
          { text: '进阶', link: '/intermediate/' },
          { text: '高级', link: '/advanced/' },
          { text: '最佳实践', link: '/best-practices/' }
        ],
        sidebar: {
          '/': [
            {
              text: '入门篇',
              items: [
                { text: 'Claude 是什么', link: '/getting-started/what-is-claude' },
                { text: '为什么用 Claude', link: '/getting-started/why-claude' },
                { text: '如何访问 Claude', link: '/getting-started/how-to-access' },
                { text: '第一次对话', link: '/getting-started/first-conversation' }
              ]
            },
            {
              text: '基础篇',
              items: [
                { text: '提示词基础', link: '/basics/prompt-basics' },
                { text: '对话技巧', link: '/basics/conversation-tips' },
                { text: '能力边界', link: '/basics/limits' },
                { text: '常用示例', link: '/basics/examples' }
              ]
            },
            {
              text: '进阶篇',
              items: [
                { text: '结构化提示词', link: '/intermediate/structured-prompts' },
                { text: '上下文管理', link: '/intermediate/context-management' },
                { text: '多轮对话优化', link: '/intermediate/multi-turn-optimization' },
                { text: 'Claude Code 入门', link: '/intermediate/claude-code-intro' }
              ]
            },
            {
              text: '高级篇',
              items: [
                { text: '提示词工程', link: '/advanced/prompt-engineering' },
                { text: '任务分解', link: '/advanced/task-decomposition' },
                { text: '工具集成', link: '/advanced/tool-integration' },
                { text: 'API 基础', link: '/advanced/api-basics' }
              ]
            },
            {
              text: '最佳实践',
              items: [
                { text: '高效工作流', link: '/best-practices/workflows' },
                { text: '避坑指南', link: '/best-practices/pitfalls' },
                { text: '案例分析', link: '/best-practices/case-studies' },
                { text: '学习资源', link: '/best-practices/resources' }
              ]
            }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "Claude How-to",
      description: "Learn Claude from basics to advanced",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Getting Started', link: '/en/getting-started/what-is-claude' },
          { text: 'Basics', link: '/en/basics/prompt-basics' },
          { text: 'Intermediate', link: '/en/intermediate/' },
          { text: 'Advanced', link: '/en/advanced/' },
          { text: 'Best Practices', link: '/en/best-practices/' }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'What is Claude', link: '/en/getting-started/what-is-claude' },
                { text: 'Why Claude', link: '/en/getting-started/why-claude' },
                { text: 'How to Access', link: '/en/getting-started/how-to-access' },
                { text: 'First Conversation', link: '/en/getting-started/first-conversation' }
              ]
            },
            {
              text: 'Basics',
              items: [
                { text: 'Prompt Basics', link: '/en/basics/prompt-basics' },
                { text: 'Conversation Tips', link: '/en/basics/conversation-tips' },
                { text: 'Understanding Limits', link: '/en/basics/limits' },
                { text: 'Common Examples', link: '/en/basics/examples' }
              ]
            },
            {
              text: 'Intermediate',
              items: [
                { text: 'Structured Prompts', link: '/en/intermediate/structured-prompts' },
                { text: 'Context Management', link: '/en/intermediate/context-management' },
                { text: 'Multi-turn Optimization', link: '/en/intermediate/multi-turn-optimization' },
                { text: 'Claude Code Intro', link: '/en/intermediate/claude-code-intro' }
              ]
            },
            {
              text: 'Advanced',
              items: [
                { text: 'Prompt Engineering', link: '/en/advanced/prompt-engineering' },
                { text: 'Task Decomposition', link: '/en/advanced/task-decomposition' },
                { text: 'Tool Integration', link: '/en/advanced/tool-integration' },
                { text: 'API Basics', link: '/en/advanced/api-basics' }
              ]
            },
            {
              text: 'Best Practices',
              items: [
                { text: 'Effective Workflows', link: '/en/best-practices/workflows' },
                { text: 'Pitfalls to Avoid', link: '/en/best-practices/pitfalls' },
                { text: 'Case Studies', link: '/en/best-practices/case-studies' },
                { text: 'Learning Resources', link: '/en/best-practices/resources' }
              ]
            }
          ]
        }
      }
    }
  },
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
})
