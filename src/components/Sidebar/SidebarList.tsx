import { FC } from "react";
import List from "@mui/material/List";
import SidebarItem from './SidebarItem';
import { makeStyles } from "tss-react/mui";
import Divider from "@mui/material/Divider";

type OwnProps = {
    title: any,
    items: unknown[],
    sidebarLength: number,
    index: number,
}

const useStyles = makeStyles()((theme) => {
    return {
      sidebarItem: {
        color: '#7790b6',
        fontWeight: '400',
        textTransform: 'capitalize',
        fontSize: '14px'
      }
    };
  });

const Sidebar: FC<OwnProps> = ({
    title,
    items,
    sidebarLength,
    index
}) => {
    const { classes } = useStyles()

    return (
        <List>
            {title && (
                <SidebarItem 
                    key={index + '_' + title.name} 
                    text={title.name}
                    icon={title.icon} 
                />
            )}
            {Array.isArray(items) && items.map((item, itemIndex) => (
                <SidebarItem 
                    key={itemIndex + '_' + item.name} 
                    text={item.name} 
                    icon={item.icon}
                />
            ))}

            { sidebarLength !== index -1 && (
                <Divider />
            )}
        </List>
  );
}

export default Sidebar;
