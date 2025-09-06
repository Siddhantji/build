import React from 'react';

const ContactUs = () => {
    return (
        <div className='card' style={{ marginTop: '5rem', marginLeft: "20rem", width: '1000px' }}>
            <div id="main-content">
                <div className="container-fluid">


                    <div id="page">
                        <div className="row-fluid">
                            <div className="span12">
                                <div className="widget">
                                    {/* <div className="widget-title">
                                        <h4><i className="icon-reorder"></i>Contact Us</h4>
                                        <span className="tools">
                                            <a href="javascript:;" className="icon-chevron-down"></a>
                                            <a href="javascript:;" className="icon-remove"></a>
                                        </span>
                                    </div> */}
                                    <div className="widget-body mt-1">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.767087860299!2d77.31861476447067!3d28.576755941610436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a34ad454f%3A0xc0fc954968f79ef8!2sM.tech+Mechanical+Engineering+%3A%3Awww.imtsinstitute.com!5e0!3m2!1sen!2sin!4v1426912627379"
                                            width="980"
                                            height="250"
                                            frameBorder="0"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                        ></iframe>
                                        <div className="space20"></div>

                                        <div className="contact-us" >
                                            <h3 className='text-center'>Our Contacts</h3>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-lg-8'>

                                                        <div className="span4">
                                                            <h4 style={{color:' #2badb6'}}>Location</h4>
                                                            <p>
                                                                G-38, 2nd floor,<br />
                                                                Sector - 3, Noida 201301 (U.P)<br />
                                                                Fees Enquiry & Online Support: +91-9999554351<br />
                                                                General Information: 0120-42076103<br />
                                                                Complaints, Grievances & Exam Related Enquiry: admin@imtsinstitute.com<br />
                                                            </p>
                                                        </div>





                                                    </div>
                                                    <div className='col-lg-3'>
                                                        <div className="span4">
                                                            <h4 style={{color:' #2badb6'}}>Social Network</h4>
                                                            <p>
                                                                <strong>Facebook: </strong> www.facebook.com/imtsnoida<br />
                                                                <strong>Twitter: </strong> www.twitter.com/imtsinstitute<br />
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="space20"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
