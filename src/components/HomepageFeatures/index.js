import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI-Driven Solutions for Global Challenges',
    img: '/img/global.png',
    description: (
      <>
Harness the potential of cutting-edge AI agents to tackle pressing issues like poverty alleviation, health, and environmental sustainability.
Discover innovative solutions and optimize resource allocation for maximum impact.
      </>
    ),
  },
  {
    title: 'Community-Driven Initiatives and Collaboration',
    img: '/img/community.png',
    description: (
      <>
Become a part of a dedicated community working together to create positive change.
Collaborate with nonprofits, experts, and passionate individuals from around the globe.
      </>
    ),
  },
  {
    title: 'Cryptocurrency Donations for Transparent Giving',
    img: '/img/donations.png',
    description: (
      <>
        Contribute to meaningful projects with the ease and security of cryptocurrencies. Leverage blockchain technology for a transparent and efficient donation process, maximizing the impact of every contribution.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
