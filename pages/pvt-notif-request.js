import React from 'react';
import Head from 'next/head';
import SSPageHeader from '../common/SSPageHeader.js'
import PvtFooter from '../common/PvtFooter.js';
import { PvtNotifRequestForm }  from '../components/forms/PvtNotifRequestForm.js';

// CtaSection is the first section ; this is the Call To Action section
export const PvtNotifRequestPage  = (props) =>  (  // use destructing to obtain function prop
    <div>
        <Head>
            <title>Contact form - Pitch In Club</title>
            <meta name="description" content="Contact form  - Pitch In Club" />
        </Head>
        
        <SSPageHeader />
        
        <PvtNotifRequestForm />
        
{/*
        <div style={{display: "flex", justifyContent: "center"}}>
                <Link smooth to="/" className="small-text-link" >Home</Link>
        </div>
*/} 
        <PvtFooter />
               
    </div>
);

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// })

// export default connect(undefined, mapDispatchToProps)(LoginPage);
// export default connect()(ContactFormPage);
export default PvtNotifRequestPage;

