import React from 'react';
import { withFirebase } from '../Firebase';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
const SignOutButton = ({ firebase }) => (
  <ExitToAppRoundedIcon onClick={firebase.doSignOut} />
);
export default withFirebase(SignOutButton);