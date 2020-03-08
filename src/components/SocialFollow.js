import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://github.com/irenekmac" target='_blank' rel="noopener noreferrer"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a
        href="https://www.linkedin.com/irenekmac" target='_blank' rel="noopener noreferrer"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a href="https://www.twitter.com/irenemac4" target='_blank' rel="noopener noreferrer" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>

    </div>
  );
}
