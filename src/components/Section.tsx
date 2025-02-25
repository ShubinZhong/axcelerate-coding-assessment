import React, { useEffect, useState } from "react";
import classes from "./Section.module.css";
import arrow from "../assets/vector.svg";
import { ListItem, ListItemProps } from "./ListItem";

export interface SectionProps {
  sectionName: string;
  listContent: ListItemProps[];
  isActive: boolean;
}

export const Section = ({
  sectionName,
  listContent,
  isActive = false,
  ...props
}: SectionProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={classes.section} {...props}>
      {/* Header */}
      <div>
        <button
          className={`${classes.sectionHeader} ${
            isActive ? classes.active : ""
          }`}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <span>{sectionName}</span>
          <img
            src={arrow}
            alt={`${sectionName} section`}
            width={12}
            height={12}
            className={`${expanded ? classes.rotateIcon : classes.resetIcon}`}
          />
        </button>
      </div>
      {/* List */}
      {expanded && (
        <div className={classes.sectionListBox}>
          {listContent.length > 0 &&
            listContent.map((item) => (
              <ListItem
                key={item.email}
                showEmail={item.showEmail}
                contactName={item.contactName}
                email={item.email}
                avatar={item.avatar}
                isActive={item.isActive}
                isEnabled={item.isEnabled}
              />
            ))}
        </div>
      )}
    </div>
  );
};
