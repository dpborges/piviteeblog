import React, { Component } from "react";
import Image from 'next/image';
import DropDownMenu from '../components/menus/DropDownMenu'
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";
import getAppConfigParm from '../config/AppConfig';
import { BurgerMenuIcon } from '../components/icons/BurgerMenuIcon';
// import BurgerMenu  from '../components/menus/BurgerMenu';
import NavToggle from '../components/formatting/NavToggle';
import ImgWithFallback from '../components/formatting/ImgWithFallback';

import styles from '../styles/page-header.module.scss';

// Function used to build the Navigation Links
const textNavElements = (siteUrl, resources, blogUrl, toggleSelected  ) => {
    return (
    <ul className={`${styles.topNavLinks} ${styles.ddFlexContainer}`}>
      <li className={styles.topNavLink} key="u11">
          <a href={`${siteUrl}`} className={styles.pageHeaderNavlink}>
              <div className={styles.linktextSize}>HOME</div>
          </a>
      </li>
      <li className={styles.topNavLinkAlt} key="u12">
          <div className={styles.dropdownContainer}>
              <DropDownMenu title="RESOURCES" list={resources} 
                  altHeaderClass="dropDownHeaderNb"  config={{displayHeader: false, upDownArrow: false}} 
              />
          </div>
      </li>
      <li className={styles.topNavLink} key="u13">
          <a href={`${blogUrl}`} className={styles.pageHeaderNavlink}>
              <div className={styles.linktextSize}>BLOG</div>
          </a>
      </li>
    </ul>
  )
}

const BurgerMenu = (props) => {
  function handleClick() {
    props.onClickHandler();
  }

  return (
    <div onClick={handleClick}>
      <BurgerMenuIcon />
    </div>
  )
}

class SSPageHeader extends Component {

    constructor(props) {
      super(props);
      this.state = { showBurgerMenu: false };
      this.handleBurgerMenuClick = this.handleBurgerMenuClick.bind(this);
    }

    componentDidMount() {
      let elem = document.getElementById("navbar");
      document.addEventListener("scroll", () => {
          // if (window.scrollY > 170) {
          /* window.scrollY returns number of pixels scrolled */
          if (window.scrollY > 106 ) {    /* if scrolled more than n pixels (height of navbar) */
              elem.classList.add("is-sticky");
          } else {
              elem.classList.remove("is-sticky");
          }
      });
      let scrollWithOffset = (el, offset) => {
          const elementPosition = el.offsetTop - offset;
          window.scroll({
              top: elementPosition,
              left: 0,
              behavior: "smooth"
          });
      };
      this.setState({ 
        scrollWithOffset
      });
    }

    handleBurgerMenuClick() {
      // console.log("Inside onClickhandler with SSHeader")
      this.setState({ showBurgerMenu: !this.state.showBurgerMenu })
    }

    render() {

        // let { isAuthenticated } = this.props.auth;
        // let isAuthenticated  = true;
        let siteUrl = getAppConfigParm("siteUrl");
        let blogUrl = getAppConfigParm("blogUrl");

        // Define resources used for DropDown Menu
        let resources =  [
            {key: 0, title: "RESOURCES",            selected: false, listname: "resources", path: ""},
            {key: 1, title: "Faq",                  selected: false, listname: "resources", path: `${siteUrl}/resources/faq`},
            {key: 2, title: "Features",             selected: false, listname: "resources", path: `${siteUrl}/resources/features`},
            {key: 3, title: "Type of Events",       selected: false, listname: "resources", path: `${siteUrl}/resources/type-of-events`},
            {key: 4, title: "Helping Hands List",   selected: false, listname: "resources", path: `${siteUrl}/resources/helping-hands`},
            {key: 5, title: "Contribution List",    selected: false, listname: "resources", path: `${siteUrl}/resources/contribution-list`},
            {key: 6, title: "How to Create Event",  selected: false, listname: "resources", path: `${siteUrl}/resources/how-to-create-event`},
            {key: 7, title: "How to Pitch In",      selected: false, listname: "resources", path: `${siteUrl}/resources/how-to-pitch-in`},
            {key: 8, title: "Event Planning Tools", selected: false, listname: "resources", path: `${siteUrl}/resources/event-planning-tools`},
            {key: 9, title: "About Us",             selected: false, listname: "resources", path: `${siteUrl}/resources/about-us`}
        ]
        
        // Construct NavLinks component using the textNavElements function
        const NavLinks = () => {
          return (
            <div>
              {textNavElements(siteUrl, resources, blogUrl)}
            </div>
          )
        }

        const BurgerMenuWithCb = () => <BurgerMenu onClickHandler={this.handleBurgerMenuClick} />

        return (
          <React.Fragment>
          <div className={styles.pageHeaderOutline} >
              <Navbar 
                  sticky="top"
                  id="navbar"
                  bg="light"
                  expand="lg"
                  className="navbar navbar-expand-lg navbar-lightXX bg-lightXX"
                  collapseOnSelect={true}
                  style={{backgroundColor: 'white !important', width: '100%'}}
              >
                  <Container style={{backgroundColor: 'white !important'}}>
                    <div className={styles.pageHeaderContainerWidth}>
                      <div className={styles.pageHeaderContainer}>
                        <a href={`${siteUrl}`}>
                            <div className={styles.logoAndTextWrapper}>
                              <div className={styles.logoContainer}>
                                <Image src="/images/pivitee-logo.png" alt="Pivitee Logo" width={65} height={50} />
                              </div>
                              <div className={styles.logoTextContainer}>
                                <p className={styles.pageHeaderTitle}>PIVITEE</p>
                              </div>
                            </div>
                        </a>

                        <NavToggle 
                          component1={BurgerMenuWithCb}
                          component2={NavLinks}
                        />
                      </div>

                      {this.state.showBurgerMenu && (
                        <div className={styles.pageHeaderMobileNavHide} >
                            <NavLinks />
                        </div>
                      )}
                    </div>
                  </Container>
              </Navbar>
              </div>
          </React.Fragment>
        );
    }
}

export default SSPageHeader;


