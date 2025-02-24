import React, { ChangeEvent } from "react";
import classes from "./SearchBar.module.css";
import icon from "../assets/seach-icon.png";

export interface SearchBarProps {
  placeholderText: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({
  placeholderText = "Search",
  onChangeHandler,
  ...props
}: SearchBarProps) => {
  return (
    <div className={classes.searchBar} {...props}>
      <img src={icon} alt="seach bar" width={20} height={20} />
      <input
        type="search"
        id="name-search"
        placeholder={placeholderText}
        className={classes.searchInput}
        onChange={(e) => {
          console.log(e.target.value);
          onChangeHandler(e);
        }}
      ></input>
    </div>
  );
};
