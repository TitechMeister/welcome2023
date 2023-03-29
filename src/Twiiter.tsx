import * as React from 'react';


let isLoadwidgets = false;
export default function Twitter() {
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
  return (
    <React.Fragment>
      <h2>Twitter</h2>
      <a
        className="twitter-timeline"
        data-theme="transparent"
        href="https://twitter.com/Meister_2023?ref_src=twsrc%5Etfw"
      ></a>
    </React.Fragment>
  );
};