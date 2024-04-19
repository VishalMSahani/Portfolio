import React from 'react';

const EmbeddedResume = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingTop: '141.4286%',
    paddingBottom: 0,
    boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
    marginTop: '1.6em',
    marginBottom: '0.9em',
    overflow: 'hidden',
    borderRadius: '8px',
    willChange: 'transform',
    marginLeft: '0.5em', 
  
  };

  const iframeStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    border: 'none',
    padding: 0,
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <iframe
        title="Resume"
        loading="lazy"
        style={iframeStyle}
        src="https://www.canva.com/design/DAGC1YEq3AE/VZ2tiQVNdNONzPlx2m6iPQ/view?embed"
        allowFullScreen
        allow="fullscreen"
      ></iframe>
      <a
        href="https://www.canva.com/design/DAGC1YEq3AE/VZ2tiQVNdNONzPlx2m6iPQ/view?utm_content=DAGC1YEq3AE&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume - Website
      </a>{' '}
      by Vishal Sahani
    </div>
  );
};

export default EmbeddedResume;
