import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';



export default function SocialFollow() {

  return (
    <div>
      <ul>
        <Icon> <GitHubIcon /> </Icon>
        <Icon> <LinkedInIcon /> </Icon>
        <Icon> <TwitterIcon /> </Icon>
      </ul>
    </div>
  );
}
