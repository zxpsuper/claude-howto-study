import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Claude How-to",
  description: "学会使用 Claude，从入门到精通",
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '入门', link: '/zh/getting-started/what-is-claude' },
      { text: '基础', link: '/zh/basics/prompt-basics' },
      { text: '进阶', link: '/zh/intermediate/' },
      { text: '高级', link: '/zh/advanced/' },
      { text: '最佳实践', link: '/zh/best-practices/' }
    ],

    sidebar: {
      '/zh/': [
        {
          text: '入门篇',
          items: [
            { text: 'Claude 是什么', link: '/zh/getting-started/what-is-claude' },
            { text: '为什么用 Claude', link: '/zh/getting-started/why-claude' },
            { text: '如何访问 Claude', link: '/zh/getting-started/how-to-access' },
            { text: '第一次对话', link: '/zh/getting-started/first-conversation' }
          ]
        },
        {
          text: '基础篇',
          items: [
            { text: '提示词基础', link: '/zh/basics/prompt-basics' },
            { text: '对话技巧', link: '/zh/basics/conversation-tips' },
            { text: '能力边界', link: '/zh/basics/limits' },
            { text: '常用示例', link: '/zh/basics/examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/claude-howto-study' }
    ]
  }
})
