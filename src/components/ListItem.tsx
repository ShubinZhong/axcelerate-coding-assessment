import React from "react";
import fallbackAvatar from "../assets/default-avatar.jpeg";
import classes from "./ListItem.module.css";

export interface User {
  /** The fullname of the User */
  contactName: string;
  /** The email address of the User */
  email: string;
  /** A profile image URL */
  avatar: string;
  /** Is the User in active state */
  isActive: boolean;
  /** Is the User in enabled state */
  isEnabled: boolean;
}
export interface ListItemProps extends User {
  /** To show or hide the email address */
  showEmail: boolean;
}

export const ListItem = ({
  isActive = false,
  isEnabled = false,
  showEmail = false,
  contactName = "",
  email = "",
  avatar = "",
  ...props
}: ListItemProps) => {
  // If no profile image provided, show default image
  const imageSrc = avatar || fallbackAvatar;

  return (
    <div
      id="list-item"
      className={`${classes.listItemContainer} ${
        isActive ? classes.active : ""
      } ${isEnabled ? classes.enabled : ""}`}
      {...props}
    >
      <img
        src={imageSrc}
        alt="profile avatar"
        width={36}
        height={36}
        className={classes.avatar}
      />
      <div className={classes.text}>
        <p
          className={`${classes.contactName} ${
            isEnabled && !showEmail ? classes.enabled : ""
          }`}
        >
          {contactName}
        </p>
        {showEmail && <p className={classes.email}>{email}</p>}
      </div>
    </div>
  );
};
