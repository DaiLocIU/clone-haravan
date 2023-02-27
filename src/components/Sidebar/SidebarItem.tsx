import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "tss-react/mui";
import buildClassName from "../../util/buildClassName";
import { Typography } from "@mui/material";

type OwnProps = {
    text: string,
    icon: string,
}

const useStyles = makeStyles()((theme) => {
    return {
      sidebarItem: {
        color: '#7790b6',
        fontWeight: '400',
        textTransform: 'capitalize',
        fontSize: '14px',
        height: '44px',
      },
      button: {
        height: '100%',
        padding: '5px 8px 5px 12px',
      },
      icon: {
        fontSize: '24px',
        marginRight: '1rem'
      },
      text: {
        fontSize: '14px',
      }
    };
  });

const Sidebar: FC<OwnProps> = ({
    text,
    icon
}) => {
    const { classes } = useStyles()
    
    return (
        <ListItem className={classes.sidebarItem} key={text} disablePadding>
            <ListItemButton className={classes.button}>
                <i className={buildClassName(
                    icon,
                    classes.icon,
                )}></i>
                <Typography className={classes.text}>{text}</Typography>
            </ListItemButton>
      </ListItem>
  );
}

export default Sidebar;
