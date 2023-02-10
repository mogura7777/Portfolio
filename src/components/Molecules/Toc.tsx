/** @format */

import React, { useEffect } from "react";
import tocbot from "tocbot";

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

  return (
    <div className="">
      <h2>目次</h2>
      <div className="toc-body mt-1 mb-1"></div>
      <style jsx global>{`
        .toc {
          border-radius: 0.25rem;
          padding: 1rem;
          font-size: 1rem;
        }

        .toc-list .toc-list {
          padding-left: 1rem;
          padding-top: 0.5rem;
        }

        .toc-list-item {
          padding-bottom: 0.5rem;
        }

        .toc-list-item:last-child {
          padding-bottom: 0;
        }

        .toc-link {
          color: rgba(156, 163, 175, 0.7);
        }

        .is-active-link {
          color: #282828;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default Toc;
