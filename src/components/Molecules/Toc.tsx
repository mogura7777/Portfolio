/** @format */

import React, { useEffect, useState } from "react";
import tocbot from "tocbot";
import { isMobile } from "react-device-detect";
const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc-body",
      contentSelector: ".toc-content",
      headingSelector: "h1, h2, h3, h4",
      // hasInnerContainers: true,
    });
    return () => tocbot.destroy();
  });
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active);
  };
  return (
    <>
      {isMobile ? (
        <details className="toc__body">
          <summary
            className="selected toc__ttl toggle_title toggle_btn"
            onClick={classToggle}
          >
            目次
          </summary>
          <div className="toc-body mt-1 mb-1 answer"></div>
        </details>
      ) : (
        <details className="toc__body" open>
          <summary
            className="selected toc__ttl toggle_title toggle_btn"
            onClick={classToggle}
          >
            目次
          </summary>
          <div className="toc-body mt-1 mb-1 answer"></div>
        </details>
      )}
    </>
  );
};

export default Toc;
