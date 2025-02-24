import React, { useEffect } from 'react';
import fallbackAvatar from "../assets/default-avatar.jpeg";
import classes from "./ListItem.module.css";

export interface ListItemProps {
    showEmail: boolean;
    contactName: string;
    email: string;
    avatar: string;
    isActive: boolean;
    isEnabled: boolean;
}

export const ListItem = ({
    isActive = false,
    isEnabled = false,
    showEmail,
    contactName,
    email,
    avatar,
    ...props
}: ListItemProps) => {
    const imageSrc = avatar || fallbackAvatar;
    return (
    <div id="list-item" className={`${classes.listItemContainer} ${isActive ? classes.active : ""} ${isEnabled ? classes.enabled : ""}`} {...props}>
        <img src={imageSrc} alt="profile avatar" width={36} height={36} className={classes.avatar}/>
        <div className={classes.text}>
            <p className={`${classes.contactName} ${isEnabled && !showEmail ? classes.enabled : ""}`}>{contactName}</p>
            {showEmail && <p className={classes.email}>{email}</p>}
        </div>
    </div>
    );
};