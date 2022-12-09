import React, { Component } from 'react';
import Image from 'next/image';

import styles1 from "../styles/pvt-footer.module.scss";

const siteUrl = 'localhost:3000'

const topPortion = () => (
  <div className={styles1.topPortion}>
    <a href={`${siteUrl}`}>
      <div className={styles1.logoAndTextWrapper}>
        <div className={styles1.logoContainer}>
          <Image src="/images/pivitee-logo.png" alt="Pivitee Logo" width={55} height={40} />
        </div>
        <p className={styles1.piviteeText}>PIVITEE</p>
      </div>
    </a>
  </div>
);

const bottomPortion = () => (
  <div className={styles1.bottomPortion}>
    <div className={styles1.copyRightWrapper}>
      <p className={styles1.copyRightText}>
        {`Pivitee Software © ${new Date().getFullYear()} All Rights Reserved.`}
      </p>
    </div>
    <div className={styles1.contactLinkWrapper} >
      <a className={styles1.contactLink} href="#">Contact</a>
    </div>
  </div>
);

class PvtFooter extends Component {  // use destructing to obtain function prop

  componentDidMount = () => {
  }

  render() {
      return (
        <div>
          {topPortion()}
          {bottomPortion()}
        </div>
      )
  }
};

export default PvtFooter;