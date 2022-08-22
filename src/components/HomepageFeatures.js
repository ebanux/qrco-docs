import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'QR Customization',
    Svg: require('../../static/img/Cenit_IO_Routing_&_orchestrations.svg').default,
    description: (
      <>
        Capability of customizing your QR code and frame in an easy way
      </>
    ),
  },
  {
    title: 'Export to PDF',
    Svg: require('../../static/img/Cenit_IO_The_platform.svg').default,
    description: (
      <>
        The QR code can be exported as a pdf file which is also customizable. This is the most suitable format when you need to print multiple copies of the QR code
      </>
    ),
  },  
  {
    title: 'Short URL',
    Svg: require('../../static/img/Cenit_IO_Cloud_or_local.svg').default,
    description: (
      <>
        When the QR code is connected with a short URL, it becomes a Dynamic QR Code, where you can change the associated content at any time.
      </>
    ),
  },

];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
