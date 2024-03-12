/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { RecoilRoot } from "recoil";
import AOS from "aos";
import ChatwootWidget from "../Contact/ChatwootWidget"; // Ensure you've created this component as shown before


const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <RecoilRoot>
        <ChatwootWidget /> {/* This line adds the Chatwoot chat widget to every page using this layout */}
        <main>{children}</main>
      </RecoilRoot>
    </>
  );
};

export default Layout;
