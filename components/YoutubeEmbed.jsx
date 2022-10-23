import React from "react";
import PropTypes from "prop-types";

import "../styles/YoutubeEmbed.module.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className="relative w-3/4 p-32 md:w-3/4 md:p-60 h-0">
    <iframe
      className="absolute
    top-0
    left-0
    w-full
    h-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
