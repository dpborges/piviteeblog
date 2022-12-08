// import "../../styles/button.scss";
import React, { Component } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import Script from 'next/script'
import { GAinit, GAlogPageView } from '../common/GoogleAnalytics';
// import SSPageHeader from '../common/SSPageHeader.js'
import SSPageHeader from '../common/SSPageHeader.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/pro-light-svg-icons';
import { faHandHoldingHeart} from '@fortawesome/pro-light-svg-icons';
import { faUsers } from '@fortawesome/pro-light-svg-icons';
import { faList } from '@fortawesome/pro-light-svg-icons';
import { faSmile } from '@fortawesome/pro-light-svg-icons';
import { faCloud, faDatabase, faEthernet, faEye, faTags } from '@fortawesome/pro-regular-svg-icons';
import getAppConfigParm  from '../config/AppConfig';
import Footer from '../common/Footer-Axolot.js'
import VictoryIcon  from '../components/icons/VictoryIcon.js';
// import BannerSection from '../../components/formatting/BannerSection';

import styles0 from "../styles/tag-landingpage.module.scss";
import styles1 from "../styles/features.module.scss";
import styles2 from "../styles/homepage-sections.module.scss";
import styles3 from "../styles/cta-button.module.scss";


const titleSection = () => (
  <div className={`${styles1["features-title-container"]}`}>
    <div>
      <div className={styles1["features-text-block2"]}>
        <div className={styles1["features-title-hr"]}>
        <h1 className={styles1["features-title"]}>Tagging As A Service</h1>
        {/*}hr className={styles1["hr-medium-features"]} />*/}
        </div>
        <h2 className={styles1["features-subtitle"]}>A simple way to tag resources with existing applications</h2>
        {/*<p className={styles1["features-subtext"]}>The Simple Event Planning Tool</p> */}
      </div>
    </div>
  </div>
);


/* This is process section. It explains the simple stepwise process */
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
              Get the Benefits of a Tagging Without the Investment Required to Build a Tagging System
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

        <div className={styles0.tagLpBenefitsContainerXX}>
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
        <div className={styles1.featuresHorizSpacer1} >&nbsp;</div>
        <div>
            <h2 className={styles0.tagLpSectionTitle}>Key Technical Features  </h2>
        </div>
        <div className={styles0['process-box-container']}>
           <div className={styles0['process-box']}>
               <FontAwesomeIcon className={styles2['process-box__icon']} icon={faTags} />
               <p className={styles0['process-box__heading']}>Tag Components</p>
               <p className={styles0['process-box__text']}>
                Utilize Out-of-the-Box Tag components to Get Your Tagging Feature Up and Running Quickly
               </p>
           </div>
           <div className={styles0['process-box']}>
               <FontAwesomeIcon className={styles2['process-box__icon']} icon={faEthernet} />
               <p className={styles0['process-box__heading']}>Tag API</p>
               <p className={styles0['process-box__text']}>
                API to provide custom views of your tagged Resources to Suit your Requirements
               </p>
           </div>
           <div className={styles0['process-box']}>
               <FontAwesomeIcon className={styles2['process-box__icon']} icon={faEye} />
               <p className={styles0['process-box__heading']}>Secure</p>
               <p className={styles0['process-box__text']}>
                Simple Security Set Up and Secure Communication
               </p>
           </div>
           <div className={styles0['process-box']}>
               <FontAwesomeIcon className={styles2['process-box__icon']} icon={faDatabase} />
               <p className={styles0['process-box__heading']}>Data Exports</p>
               <p className={styles0['process-box__text']}>Data Exports on Request to Facilitate Data Migrations as Needed</p>
           </div>
        </div>
        <div className={styles0.techSectionModifierMb1}>&nbsp;</div>
        {/* End of Technical Features Section  ===========================================  */}
    </div>
);

/* This is section that list the non-functional features (eg. security , subscription cost , mult-device support) */
const nonfuncFeatureSection = () => (
    <div style={{padding: '3rem 0'}}>
        <div>&nbsp;</div>
        <div>
            <h2 className={styles1.featuresSectionTitle}>Built-in Functionality you'd Appreciate</h2>
        </div>
        <div className={styles1.featuresNonfuncContainer}>
            <div className={styles1.featuresNonfuncLeftSide}>

                <div className={styles1.featuresNonfuncRowBlock}>
                    <div className={styles1.featuresNonfuncColBlock}>
                        <div className={styles1.featuresNonfuncLabel}>Free</div>
                        <p className={styles1.featuresNonfuncText}>No subscription plans / No credit cards</p>
                    </div>
                    <div>
                        <Image className={styles1.featuresCcardImage} width={112} height={112}
                             src="/images/no-credit-card-required-image.jpg" alt="no credit card required image" />
                    </div>
                </div>
            </div>

            <div className={styles1.featuresHorizSpacer1}>&nbsp;</div>

            <div className={styles1.featuresNonfuncRightSide}>
                <div className={styles1.featuresNonfuncRowBlock}>
                    <div className={styles1.featuresNonfuncColBlock}>
                        <div className={styles1.featuresNonfuncLabel}>Secure</div>
                        <p className={styles1.featuresNonfuncText}>Password Encryption and secure communication</p>
                    </div>
                    <div>
                      <Image className={styles1.featuresHttpsImage}
                          src="/images/https-image.jpg" alt="Https characters"
                          width={128} height={40} />
                    </div>
                </div>

                <div className={styles1.featuresHorizSpacer1}>&nbsp;</div>
                
                <div className={styles1.featuresNonfuncRowBlock} >
                <div className={styles1.featuresNonfuncColBlock} >
                    <div className={styles1.featuresNonfuncLabel} >Multi-Device Support</div>
                    <p className={styles1.featuresNonfuncText} >Support for multiple devices</p>
                </div>
                <div>
                    <Image className={styles1.featuresDeviceImage} src="/images/multi-device-support.jpg" alt="Mult-device-support image"
                             width={142} height={56} />
                </div>
            </div>
        </div>
    </div>
    <div className={styles1.featuresHorizSpacer5}>&nbsp;</div>
    </div>
)

/* This section provides list of application features */
const featuresListSection = () => (
    <div>
        <div className={styles1.featuresListContainer} >
                <div className={styles1.featuresHorizSpacer4} >&nbsp;</div>
                <h3 className={styles1.featuresSectionTitle} >Application Features to easily Create and Track Events</h3>
                <div className={styles1.featuresItemsContainer} >
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText} >Create Unlimited Events</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight}></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Schedule event with date, time, or date ranges</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText} >Simple Dashboard to track, attendees, contributions, and helping hands</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText} >Search Event by keyword</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Separate lists for contributions and helping hands</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Automatically sends reminders to all participants before event</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Ability to send invites to all participants or individuals</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Drag and drop list items for quick reordering</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Ability to change organizer name to a group or entity name</h2>
                    </div>
                </div>
                <div className={styles1.featuresHorizSpacer5}>&nbsp;</div>
                <div className={styles1.rcMb1}>&nbsp;</div>
        </div>
    </div>
)

/* This section provides list of application features */
const ctaBlock = () => (
    <div className={styles1["features-ctablock-container"]}>
      <h3 className={styles1.featuresSectionCtaTitle}>Interested?</h3>
      <div className={styles0.tagLpBannerText}>
       The Tagging Solution is currently a work in progress. If interested 
       in a cost effective tagging solution for your application, we can 
       notify you when its available. Just let us let us know your 
       requirements and contact info.
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <a href={getAppConfigParm("siteUrl")} className={styles3["cta-button"]}>
          <p className={styles3["cta-button-text"]}>Get Started Now</p>
        </a>
      </div>
    </div>
);

//***********************************************************************************
// Features Page
//***********************************************************************************
class FeaturesPage extends Component {  // use destructing to obtain function prop

    componentDidMount = () => {
        let env = getAppConfigParm("env");
        if (env === 'test' || env === 'prod') {
            if (!window.GA_INITIALIZED) {
                GAinit();
                window.GA_INITIALIZED = true;
            }
            GAlogPageView()
        }
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
            <SSPageHeader />
            {titleSection()}
            {benefitsSection()}
            {/*nonfuncFeatureSection()*/}
            {/*featuresListSection()*/}
            {ctaBlock()}
            <Footer style={{backgroundColor: 'grey'}} />
          </div>
        )
    }
};

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// })

// export default connect(undefined, mapDispatchToProps)(LoginPage);
export default FeaturesPage;



{/* <FontAwesomeIcon className={styles1.process-box__icon fal" icon={faSmile} />  */}