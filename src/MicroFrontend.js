import React, { useEffect, useState } from 'react';

const MicroFrontend = (props) => {

  const [ running, setRunning ] = useState(true);
  
  useEffect(() => {

    const { name, host, document } = props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest['files']['main.js']}`;
        script.onload = renderMicroFrontend;
        document.head.appendChild(script);
        setRunning(true);
      }).catch(err => {
        setRunning(false);
      })

    return () => {
      const { name, window } = props;
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };

  });

  const renderMicroFrontend = () => {
    const { name, window } = props;
    window[`render${name}`] && window[`render${name}`](`${name}-container`, props);
  }

  if(!running) {
    return <div>This front-end is not running</div>
  }

  return <main id={`${props.name}-container`} />;

}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;