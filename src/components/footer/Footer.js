import React from 'react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from 'material-ui/BottomNavigation';
import IconButton from 'material-ui/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';  
import LinkedInIcon from '@material-ui/icons/LinkedIn';  
import MailIcon from '@material-ui/icons/Mail';  
import InstagramIcon from '@material-ui/icons/Instagram';  
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter';  
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    
    root: {
        width: 500,
       
      },
      mainFooter: {
          textAlign: 'center'
      }
    
  }));

  function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (  
        <AppBar position="static" >
        <div className="footer" className={classes.mainFooter}> 
                <h2>Follow us on </h2>
                <div className="icons">

                    <Tooltip title="Twitter">
                    <BottomNavigationAction label="Recents" icon={<TwitterIcon />} />
                    </Tooltip>

                    <Tooltip title="YouTube" color="red">
                    <BottomNavigationAction label="Recents1" icon={< YouTubeIcon/>} />
                    </Tooltip>

                    <Tooltip title="Instagram">
                    <BottomNavigationAction label="Recents2" icon={< InstagramIcon/>} />
                    </Tooltip>

                    <Tooltip title="Mail">
                    <BottomNavigationAction label="Recent3" icon={<MailIcon/>} />

                    </Tooltip>

                    <Tooltip title="Linkedin">
                    <BottomNavigationAction label="Recent4" icon={< LinkedInIcon/>} />

                    </Tooltip>

                    <Tooltip title="Facebook">
                    <BottomNavigationAction label="Recent5" icon={<FacebookIcon />} />

                    </Tooltip>
                        
                </div>
               <p>
               copyright@2020
               </p>
            </div>
       
        </AppBar>
            
    );
}

export default Footer;
