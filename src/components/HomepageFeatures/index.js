import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '基于PC版本',
    description: (
      <>
        SRA使用PC端游戏进行模拟操作，无需额外下载内容。
      </>
    ),
  },
  {
    title: '多配置操作',
    description: (
      <>
        在0.8.0以上版本，SRA支持多账号配置操作，进行逐一处理。
      </>
    ),
  },
  {
    title: '可拓展性',
    description: (
      <>
        在0.8.1以上版本，可以使用插件来拓展SRA的功能。
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-vert--md">
          <Heading as="h2">特性介绍</Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
