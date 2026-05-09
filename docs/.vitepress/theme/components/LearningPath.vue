<template>
  <section class="learning-path">
    <h2 class="section-title">学习路径</h2>
    <div class="path-grid">
      <div v-for="(item, index) in pathItems" :key="index" class="path-card">
        <div class="path-number">{{ index + 1 }}</div>
        <h3 class="path-title">{{ item.title }}</h3>
        <p class="path-description">{{ item.description }}</p>
        <ul class="path-topics">
          <li v-for="topic in item.topics" :key="topic">{{ topic }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pathItems = [
  {
    title: '入门篇',
    description: '了解 Claude 基础',
    topics: ['Claude 是什么', '为什么用 Claude', '如何访问', '第一次对话']
  },
  {
    title: '基础篇',
    description: '掌握核心技能',
    topics: ['提示词基础', '对话技巧', '能力边界', '常用示例']
  },
  {
    title: '进阶篇',
    description: '提升使用效率',
    topics: ['结构化提示词', '上下文管理', '多轮对话优化', 'Claude Code']
  },
  {
    title: '高级篇',
    description: '深入技术细节',
    topics: ['提示词工程', '任务分解', '工具集成', 'API 使用']
  },
  {
    title: '最佳实践',
    description: '实战经验总结',
    topics: ['工作流', '避坑指南', '案例分析', '学习资源']
  }
]
</script>

<style scoped>
.learning-path {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
}

.path-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.path-card {
  background: var(--vp-c-bg-soft);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.path-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
}

.path-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.path-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 1rem;
}

.path-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.path-description {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.path-topics {
  list-style: none;
  padding: 0;
  margin: 0;
}

.path-topics li {
  padding: 0.25rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>