import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: "Claude How-to",
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
