import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  submitButton: {
    marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(2),
  },

  links: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },

  link: {
    [theme.breakpoints.down('460')]: {
      fontSize: '14px',
    },
  },
  checkboxLabel: {
    marginRight: 0,
    '& span': {
      [theme.breakpoints.down('460')]: {
        fontSize: '14px',
      },
    },
  },
}));
