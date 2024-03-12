/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
const React = require("react");

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });

  setHeadComponents([
    <script
      key="chatwoot-script"
      dangerouslySetInnerHTML={{
        __html: `
          window.chatwootSettings = {
            position: "right",
            type: "standard",
            launcherTitle: "Need Help? Chat with Us"
          };
          (function(d, t) {
            var BASE_URL = "https://app.chatwoot.com";
            var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
            g.src = BASE_URL + "/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g, s);
            g.onload = function() {
              window.chatwootSDK.run({
                websiteToken: 'U6bkTQmaHCzQ4LyC2dNe4qv8',
                baseUrl: BASE_URL
              });
            };
          })(document, "script");
        `,
      }}
    />,
  ]);
};
