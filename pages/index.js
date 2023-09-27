import React, { Component } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import LinkButton1 from '../components/buttons/LinkButton1/index.js'
// import Script from 'next/script'
// import { GAinit, GAlogPageView } from '../common/GoogleAnalytics';
// import SSPageHeader from '../common/SSPageHeader.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faDatabase, faEthernet, faEye, faTags } from '@fortawesome/pro-regular-svg-icons';
import getAppConfigParm  from '../config/AppConfig';
import PvtFooter from '../common/PvtFooter.js';
// import BannerSection from '../../components/formatting/BannerSection';
import Header from  '../common/Header';

import styles0 from "../styles/tag-landingpage.module.scss";

const titleSection = () => (
  <div className={`${styles0["tagLpTitleContainer"]}`}>
    <div>
      <div className={styles0["tagLpTextBlock2"]}>
        <div className={styles0["tagLpTitleHr"]}>
        <h1 className={styles0["tagLpTitle"]}>Tagging As A Service</h1>
        </div>
        <h2 className={styles0["tagLpSubtitle"]}>A simple way to tag resources with existing applications</h2>
      </div>
    </div>
  </div>
);


/* This is benefits section.  */
const benefitsSection = () => (
    <div>
        {/* commented out Button 
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <a href={getAppConfigParm("siteUrl")} className={styles1.ssr-button features-signup-button  features-signup-button-mod">
             <p className={styles1.features-signup-button-text">More Info?</p>
        </a>
        </div>
        */}
        {/* Start of Benefits Section  ===========================================  */}
      <div className={styles0.tagLpBenefitsContainer}>
        <a href="#foo">&nbsp;</a>
        <div>
          <h2 className={styles0.tagLpSectionTitle}>Benefits of a Tagging as a Service</h2>
        </div>   
        <div>
          <div className={`${styles0.tagLpBenefitsRectanglePairContainer} ${styles0.tagLpBenefitsRectanglePairContainerReverse}`}>
            <div className={styles0.tagLpBenefitsRectangleContainer}>
              <div className={styles0.tagLpBenefitTitle}>
                Save Time and Resources
              </div>
              <div className={styles0.tagLpBenefitSubTitle}>
              Get the Benefits of Tagging Capability Without the Investment Required to Build Your Own Tagging System
              </div>
            </div>
            <div className={styles0.tagLpBenefitsRectangleContainer} style={{position: 'relative'}}>
              <Image src="/images/concept-website-underconstruction.jpg" 
                alt="image of website under construction"  layout="fill"
              />
            </div>
          </div>
        </div>

        <div className={styles0.tagLpBenefitsContainerXX}>
          <div className={styles0.tagLpBenefitsRectanglePairContainer}>
            <div className={styles0.tagLpBenefitsRectangleContainer} style={{position: 'relative'}}>
              <Image src="/images/pointing-to-folders.jpg" 
                alt="image of website under construction"  layout="fill"
              />
            </div>
            <div className={styles0.tagLpBenefitsRectangleContainer}>
              <div className={styles0.tagLpBenefitTitle}>
                Group and Organize Related Content
              </div>
              <div className={styles0.tagLpBenefitSubTitle}>
                Use Tags To group and organize related sets of content together.
              </div>
            </div>
          </div>
        </div>

        <div className={styles0.tagLpBenefitsContainerXX}>
          <div className={`${styles0.tagLpBenefitsRectanglePairContainer} ${styles0.tagLpBenefitsRectanglePairContainerReverse}`}>
            <div className={styles0.tagLpBenefitsRectangleContainer}>
              <div className={styles0.tagLpBenefitTitle}>
                Enhanced Findability
              </div>
              <div className={styles0.tagLpBenefitSubTitle}>
              Track and organize different items so you can find them when you need them
              </div>
            </div>
            <div className={styles0.tagLpBenefitsRectangleContainer} style={{position: 'relative'}}>
              <Image src="/images/illustration-of-data-mining-concept.jpg" 
                alt="image of website under construction"  layout="fill"
              />
            </div>
          </div>
        </div>

        <div className={styles0.tagLpBenefitsContainerXX}>
          <div className={styles0.tagLpBenefitsRectanglePairContainer}>
            <div className={styles0.tagLpBenefitsRectangleContainer} style={{position: 'relative'}}>
              <Image src="/images/example-of-tag-cloud.jpg" 
                alt="image of website under construction"  layout="fill"
              />
            </div>
            <div className={styles0.tagLpBenefitsRectangleContainer}>
              <div className={styles0.tagLpBenefitTitle}>
                Improve your SEO with a TagCloud
              </div>
              <div className={styles0.tagLpBenefitSubTitle}>
                Tag clouds can help to increase the relevancy of your content and thereby 
                improve the page's overall SEO ranking.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={`${styles0.tagLpBenefitsRectanglePairContainer} ${styles0.tagLpBenefitsRectanglePairContainerReverse}`}>
            <div className={styles0.tagLpBenefitsRectangleContainer}>
              <div className={styles0.tagLpBenefitTitle}>
                Improve Collaboration
              </div>
              <div className={styles0.tagLpBenefitSubTitle}>
                Improve collaboration around your content within your organization.
              </div>
            </div>
            <div className={styles0.tagLpBenefitsRectangleContainer} style={{position: 'relative'}}>
              <Image src="/images/collaboration-concept.jpg" 
                alt="image of website under construction"  layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End of Benefits Section  ===========================================  */}
      
      {/* Start of Technical Features Section  ===========================================  */}
        <div className={styles0.tagLpHorizSpacer1}>&nbsp;</div>
        <div>
            <h2 className={styles0.tagLpSectionTitle}>Key Technical Features  </h2>
        </div>
        <div className={styles0['process-box-container']}>
           <div className={styles0['process-box']}>
               <FontAwesomeIcon className={styles0['process-box__icon']} icon={faTags} />
               <p className={styles0['process-box__heading']}>Tag Components</p>
               <p className={styles0['process-box__text']}>
                Utilize Out-of-the-Box Tag components to Get Your Tagging Feature Up and Running Quickly
               </p>
           </div>
           <div className={styles0['process-box']}>
               <FontAwesomeIcon className={styles0['process-box__icon']} icon={faEthernet} />
               <p className={styles0['process-box__heading']}>Simple API</p>
               <p className={styles0['process-box__text']}>
                API to provide custom views of your tagged Resources to Suit your Requirements
               </p>
           </div>
           <div className={styles0['process-box']}>
               <FontAwesomeIcon className={styles0['process-box__icon']} icon={faEye} />
               <p className={styles0['process-box__heading']}>Secure</p>
               <p className={styles0['process-box__text']}>
                Simple Security Set Up and Secure Communication
               </p>
           </div>
           <div className={styles0['process-box']}>
               <FontAwesomeIcon className={styles0['process-box__icon']} icon={faDatabase} />
               <p className={styles0['process-box__heading']}>Data Exports</p>
               <p className={styles0['process-box__text']}>Data Exports on Request to Facilitate Data Migrations as Needed</p>
           </div>
        </div>
        <div className={styles0.techSectionModifierMb1}>&nbsp;</div>
        {/* End of Technical Features Section  ===========================================  */}
    </div>
);

/* This section provides list of application features */
const ctaBlock = () => (
    <div className={styles0["tagLpBannerContainer"]}>
      <h3 className={styles0.tagBannerCtaTitle}>Progress Updates</h3>
      <div className={styles0.tagLpBannerText}>
       The Tagging Solution is currently a work in progress. If interested 
       in a cost effective tagging solution for your application, feel free
       to drop us a note and we'll notify you about future updates. 
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        {/*<a href={getAppConfigParm("siteUrl")} className={styles3["cta-button"]}>
          <p className={styles3["cta-button-text"]}>Get Started Now</p>
       </a>*/}
        <LinkButton1 link={`${getAppConfigParm("siteUrl")}/pvt-notif-request`} linkText="I'm interested" />
      </div>
    </div>
);

//***********************************************************************************
// Features Page
//***********************************************************************************
class FeaturesPage extends Component {  // use destructing to obtain function prop

    componentDidMount = () => {
        let env = getAppConfigParm("env");
        // if (env === 'test' || env === 'prod') {
        //     if (!window.GA_INITIALIZED) {
        //         GAinit();
        //         window.GA_INITIALIZED = true;
        //     }
        //     GAlogPageView()
        // }
    }

    render() {
        return (
          <div>
                
            <Head>
              <title>Features - Pitch In Club</title>
              <meta property="og:title" content="Features - Pitch In Club" />
              <meta name="description" content="Features of Pitch In Club" />
              <meta name="keywords"    content="free,secure,contribution list,helping hands list,event search,  
                  automatic reminders,dashboard,event status,attendee status,rsvp status"   />
              {/* <script type="text/javascript" src="/static/modernizr.js"></script> */}
            </Head>
            {/* <SSPageHeader /> */}
            <Header />
            {titleSection()}
            {benefitsSection()}
            {/*nonfuncFeatureSection()*/}
            {/*featuresListSection()*/}
            {ctaBlock()}
            {/*<Footer style={{backgroundColor: 'grey'}} /> */}
            <PvtFooter /> 
          </div>
        )
    }
};

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// })
// export default connect(undefined, mapDispatchToProps)(LoginPage);

export default FeaturesPage;
