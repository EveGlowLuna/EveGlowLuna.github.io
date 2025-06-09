import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './faq.module.css';
import clsx from 'clsx';

export default function FAQ() {
  const {siteConfig} = useDocusaurusContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState({});
  const [notification, setNotification] = useState({ show: false, message: '' });

  // 复制邮件地址函数
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('yukikage@qq.com');
      setNotification({ show: true, message: '邮件地址已复制到剪贴板' });
      setTimeout(() => {
        setNotification({ show: false, message: '' });
      }, 3000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  // FAQ数据
  const faqData = [
    {
      id: 'general-1',
      category: 'general',
      question: 'SRA能支持Linux/Mac吗',
      answer: '不能，SRA使用了较多的Windows相关的操作，不能很好的适配其他的操作系统。'
    },
    {
      id: 'general-2',
      category: 'general',
      question: '挂后台会抢鼠标吗？/可以挂后台吗？',
      answer: '包抢的，SRA使用模拟操作技术，需要真实的控制你的鼠标去移动和点击。'
    },
    {
      id: 'general-3',
      category: 'general',
      question: '可以做一做绝区零的/有没有绝区零版本？',
      answer: '绝区零因抽不出角色导致退游，望周知。且市面上已有成熟的解决方案。'
    },
    {
      id: 'general-4',
      category: 'general',
      question: '國際版可以用嗎？',
      answer: 'SRA的识图素材基于简体中文制作，如果能将语言切换为简体中文理论上应该可用。或者您可以以自己的语言版本自行替换SRA的识图素材。'
    },
    {
      id: 'general-5',
      category: 'general',
      question: '和maa是一个作者吗/和maa是什么关系？',
      answer: 'SRA仅在命名和UI上部分借鉴MAA，除此之外与MAA并无联系。'
    },
    {
      id: 'general-6',
      category: 'general',
      question: '会封号吗挺担心的',
      answer: '<ul><li>从SRA立项到0.8.0版本的更新，作者一直使用本人的账号进行测试，目前暂未封号。</li><li>SRA依靠计算机图像识别和模拟操作运行，不会做出任何修改游戏文件、读写游戏内存等任何危害游戏本体的行为，理论上不会导致封号。但是使用脚本或者模拟操作仍然是米哈游的封号理由之一，既然使用SRA，就要承担可能存在的风险。</li><li>另：请不要在崩坏：星穹铁道及米哈游在各平台（包括但不限于：米游社、B 站、微博）的官方动态下讨论任何有关 SRA 的内容。</li></ul>'
    },
    {
      id: 'general-7',
      category: 'general',
      question: '能用异种分辨率吗（例如1600×900）/只能使用1920 * 1080吗？',
      answer: 'SRA理论支持全16:9的分辨率，但是在部分分辨率下可能会出现识别错误。效果较稳定的分辨率为1600 * 900，此时需调节设置中识图置信度为0.8。其他分辨率请自行尝试。'
    },
    {
      id: 'general-8',
      category: 'general',
      question: 'Win7可以用吗？',
      answer: '不知道，SRA的开发和测试环境为Win11，在Win10上也能够运行，缺少Win7的验证。'
    },
    {
      id: 'general-9',
      category: 'general',
      question: '网页云崩铁可以嘛/适配云游戏吗？',
      answer: '目前还在尝试中。'
    },
    {
      id: 'general-10',
      category: 'general',
      question: '下载好慢啊/下载慢',
      answer: 'SRA已接入Mirror酱，可以尝试使用。或先下载SRA更新器，再使用更新器下载SRA。'
    },
    {
      id: 'general-11',
      category: 'general',
      question: '会出手机版吗/手机平板能用吗？',
      answer: '不会，不同手机之间屏幕大小各不相同，实现难度较大。'
    },
    {
      id: 'general-12',
      category: 'general',
      question: '为什么下了点exe文件显示存在威胁，电脑自动删掉了，完全打不开?',
      answer: 'SRA请求了管理员权限，但是部分杀毒软件会误报，导致SRA无法正常运行。请放心，SRA不会对您的电脑造成任何损害。运行软件前，请将SRA的目录添加入 Windows Defender 排除项以及防病毒软件的信任区或开发者目录，避免被误杀。'
    },
    {
      id: 'general-13',
      category: 'general',
      question: '为什么限制配置方案的数量/如何提升配置方案的数量？',
      answer: '唉！蛋糕还是败给了蛋糕<br />蛋糕有人在蛋糕做蛋糕阴蛋糕，可能是蛋糕动了蛋糕的蛋糕<br />蛋糕，蛋糕赢了……<br />总之，普通用户的配置方案将被限制为3个，如果需要提升数量或解除限制，请联系作者。<br />这个过程不会很难。'
    },
    {
      id: 'general-14',
      category: 'general',
      question: 'SRA.exe不见了/SRA.exe会把自己删除？',
      answer: '我们确信SRA中不含有把自己删除的代码。<br />出现这种情况可能是杀毒软件误报，特别是 **Windows Defender。**<br />下面的步骤可以帮助您解决问题<br />[点击此处查看如何为软件添加信任](quickstart.html#trust)'
    },
    // 错误代码部分
    {
      id: 'error-all',
      category: 'error',
      question: '错误编号(1-20)',
      answer: '<h4>错误编号1</h4>在点击<b>生存索引</b>时遇到问题。此问题发生在执行<b>清开拓力</b>的任意一项子任务中。如果您遇到此问题，可能是由于以下原因造成的：<br /><b>星际和平指南</b>页面未正常打开——可能由于加载时间过长，或者您修改了打开它的按键<b>F4</b>。<br /><br /><h4>错误编号2</h4>在点击<b>饰品提取</b>或其他子任务时遇到问题。此问题发生在执行<b>清开拓力</b>的任意一项子任务中。如果您遇到此问题，可能是由于以下原因造成的：<br /><b>生存索引</b>页面未正常打开——可能由于加载时间过长，或者此前触发了错误编号1。<br /><br /><h4>错误编号3</h4>在点击<b>挑战</b>时遇到问题。此问题发生在执行<b>清开拓力</b>的任意一项子任务中。如果您遇到此问题，可能是由于以下原因造成的：<br />未正确传送到对应副本——可能由于加载时间过长，或者此前触发了错误编号2。<br /><br /><h4>错误编号4</h4>在点击<b>开始战斗</b>时遇到问题。此问题发生在执行<b>清开拓力</b>的任意一项子任务中。如果您遇到此问题，可能是由于以下原因造成的：<br />未正确传送到对应副本——可能由于加载时间过长，或者此前触发了错误编号3<br /><br /><h4>错误编号5</h4>在点击<b>再来一次</b>时遇到问题。此问题发生在执行<b>清开拓力</b>的任意一项子任务中。<br />此问题应极少发生，如果您遇到此问题，欢迎向我们反馈。<br /><br /><h4>错误编号6</h4>在点击<b>再次派遣</b>时遇到问题。此问题发生在执行<b>派遣</b>任务中。<br />此问题应极少发生，如果您遇到此问题，欢迎向我们反馈。<br /><br /><h4>错误编号7</h4>在点击无名勋礼的<b>一键领取</b>时遇到问题。此问题发生在执行<b>无名勋礼</b>任务中。如果您遇到此问题，可能是由于以下原因造成的：<br />无名勋礼有红点提示但是没有可领取的奖励。<br /><br /><h4>错误编号9</h4>在点击<b>进入游戏</b>时遇到问题。此问题发生在执行<b>自动登录</b>任务中。<br /><br /><h4>错误编号10</h4>在点击<b>账号密码</b>时遇到问题。此问题发生在执行<b>自动登录</b>任务中。<br /><br /><h4>错误编号11</h4>~~未检测到登录界面。此问题发生在执行<b>自动登录</b>任务中。~~在0.8.1+被移除。<br /><br /><h4>错误编号12</h4>在点击<b>退出关卡</b>时遇到问题。此问题发生在执行<b>清开拓力</b>的任意一项子任务中。<br /><br /><h4>错误编号13</h4>通过后备开拓力补充体力时遇到问题。此问题发生在执行<b>补充开拓力</b>任务中。如果您遇到此问题，可能是由于以下原因造成的：<br />没有后备开拓力<br /><br /><h4>错误编号14</h4>通过燃料补充体力时遇到问题。此问题发生在执行<b>补充开拓力</b>任务中。如果您遇到此问题，可能是由于以下原因造成的：<br />没有后备开拓力或没有燃料。<br /><br /><h4>错误编号15</h4>通过星琼补充体力时遇到问题。此问题发生在执行<b>补充开拓力</b>任务中。如果您遇到此问题，可能是由于以下原因造成的：<br />没有后备开拓力且没有燃料或没有星琼。<br /><br /><h4>错误编号16</h4>点击<b>兑换码</b>时遇到问题。此问题发生在执行<b>兑换码</b>任务中。如遇到此问题，可能是由于以下原因造成的：<br />菜单<b>ESC</b>界面未能正常打开。<br /><br /><h4>错误编号17</h4>点击菜单右上角三个点时遇到问题，此问题发生在执行<b>兑换码</b>任务中。如遇到此问题，可能是由于以下原因造成的：<br />菜单<b>ESC</b>界面未能正常打开。<br /><br /><h4>错误编号18</h4>点击开始游戏按钮（差分宇宙界面）时遇到问题。可能未处于正确的页面。<br /><br /><h4>错误编号19</h4>点击周期演算时遇到问题。可能未处于正确的页面。<br /><br /><h4>错误编号20</h4>点击<b>启动差分宇宙</b>时遇到问题。可能未处于正确的页面。'
    },
    // 超时编号部分
    {
      id: 'timeout-all',
      category: 'timeout',
      question: '超时编号(1-5)',
      answer: '<h4>超时编号1</h4>在20次检测时间（约50秒）内未能检测到<b>星际和平指南</b>（<b>F4</b>）界面。<br /><br /><h4>超时编号2</h4>在20次检测时间（约50秒）内未能检测到聊天框（Enter）。（也作为处于大世界场景的标志）<br /><br /><h4>超时编号3</h4>在20次检测时间（约54秒）内未能检测到bilibili服的登录按钮。<br /><br /><h4>超时编号4</h4>在40次检测时间（约100秒）内未能检测到挑战按钮。<br /><br /><h4>超时编号5</h4>在20次检测时间（约50秒）内未能检测到委托界面。'
    },
  ];

  // 分类数据
  const categories = [
    { id: 'all', name: '全部' },
    { id: 'general', name: '常见问题' },
    { id: 'error', name: '错误代码' },
    { id: 'timeout', name: '超时编号' }
  ];

  // 处理搜索
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // 处理分类切换
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // 处理问题展开/折叠
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 过滤FAQ项目
  const filteredFaqs = faqData.filter(faq => {
    // 分类过滤
    const categoryMatch = activeCategory === 'all' || faq.category === activeCategory;
    
    // 搜索过滤
    const searchMatch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <Layout
      title="常见问题解答"
      description="查找您在使用StarRailAssistant时可能遇到的问题及解决方案">
      <main>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h1>常见问题解答</h1>
            <p>查找您在使用StarRailAssistant时可能遇到的问题及解决方案</p>
          </div>

          {/* 搜索框 */}
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="搜索问题或关键词..."
              value={searchQuery}
              onChange={handleSearch}
              className={styles.searchInput}
            />
            <div className={styles.searchIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>

          {/* 分类标签 */}
          <div className={styles.categoryTabs}>
            {categories.map(category => (
              <button
                key={category.id}
                className={clsx(styles.categoryTab, {
                  [styles.activeTab]: activeCategory === category.id
                })}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ列表 */}
          <div className={styles.faqList}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map(faq => (
                <div 
                  key={faq.id} 
                  className={clsx(styles.faqItem, {
                    [styles.expanded]: expandedItems[faq.id]
                  })}
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className={styles.faqQuestion}>
                    <span>{faq.question}</span>
                    <span className={styles.expandIcon}>
                      {expandedItems[faq.id] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedItems[faq.id] && (
                    <div 
                      className={styles.faqAnswer}
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              ))
            ) : (
              <div className={styles.noResults}>没有找到匹配的问题，请尝试其他搜索词或分类</div>
            )}
          </div>

          {/* 联系方式 */}
          <div className={styles.contactSection}>
            <h2>未找到答案？提交您的问题</h2>
            <p>如果您在常见问题中未找到解决方案，请通过以下方式反馈，我们会尽快回复您。</p>
            <ul className={styles.contactList}>
            <li>提交<a href="https://github.com/Shasnow/StarRailAssistant/issues" style={{marginLeft:5}}> GitHub Issue</a></li>
                <li>电子邮件：发送邮件到<span 
                  onClick={copyEmail}
                  style={{
                    color: 'var(--ifm-color-primary)',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                  title="点击复制邮件地址"
                > yukikage@qq.com</span></li>
                <li>加入测试群：<a href="https://qm.qq.com/q/QnRw46sFWi">点击链接加入群聊【SRA测试群】</a></li>
                <li>补充： <a href="https://docs.qq.com/doc/DWUFOUmJDc2xLRk1B">SRA问题收集与解答互助文档</a></li>
            </ul>
          </div>
        </div>
        
        {/* 通知组件 */}
        {notification.show && (
          <div className={styles.notification}>
            {notification.message}
          </div>
        )}
      </main>
    </Layout>
  );
}