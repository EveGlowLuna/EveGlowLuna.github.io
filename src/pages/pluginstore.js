import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './pluginstore.module.css';

const plugins = [
  {
    title: '自动战斗优化',
    description: '智能调整战斗策略，提升效率。',
    tags: ['战斗', '自动化'],
    downloads: 1200,
    author: 'SRA Team',
    version: '1.0.0',
  },
  {
    title: '资源收集助手',
    description: '自动规划最优资源收集路线。',
    tags: ['资源', '路线'],
    downloads: 800,
    author: 'SRA Team',
    version: '1.1.0',
  },
  {
    title: '模拟宇宙助手',
    description: '智能选择模拟宇宙事件选项。',
    tags: ['模拟宇宙', '决策'],
    downloads: 1500,
    author: 'SRA Team',
    version: '2.0.0',
  },
];

function PluginCard({plugin}) {
  return (
    <div className={styles.pluginCard}>
      <h3 className={styles.pluginTitle}>{plugin.title}</h3>
      <p className={styles.pluginDescription}>{plugin.description}</p>
      <div className={styles.pluginTags}>
        {plugin.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.pluginMeta}>
        <span>作者: {plugin.author}</span>
        <span>版本: {plugin.version}</span>
        <span>下载量: {plugin.downloads}</span>
      </div>
      <Link
        className="button button--primary button--lg"
        to="#">
        下载插件
      </Link>
    </div>
  );
}

export default function PluginStore() {
  return (
    <Layout
      title="插件市场"
      description="扩展 StarRailAssistant 的功能，满足更多个性化需求。">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>插件市场</h1>
          <p className={styles.heroSubtitle}>
            扩展 StarRailAssistant 的功能，满足更多个性化需求。
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.featuredPlugins}>
            <h2>热门插件</h2>
            <div className={styles.pluginGrid}>
              {plugins.map((plugin) => (
                <PluginCard key={plugin.title} plugin={plugin} />
              ))}
            </div>
          </section>

          <section className={styles.developerGuide}>
            <h2>插件开发指南</h2>
            <p>如果您是开发者，欢迎为 StarRailAssistant 贡献插件！</p>
            <Link
              className="button button--secondary button--lg"
              to="/docs/develop/plugin-development-guide">
              开始开发
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}