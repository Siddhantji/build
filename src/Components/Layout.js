import React from 'react';
import Header_Sidebar from './Header_Sidebar';

import Footer from './Footer';
const Layout = ({
    components:Components
}) => {
   
  return (
    <>
     <Header_Sidebar/>
     <Components/>
     
     {/* <Footer/> */}
    </>
  );
}

export default Layout;
