import React, { ChangeEvent } from "react";
import classes from "./SearchBar.module.css";
import icon from "../assets/seach-icon.png";

export interface SearchBarProps {
  /** The placeholder text to display inside the input field. */
  placeholderText: string;
  /** Event handler triggered when the input value changes.
   * @param {ChangeEvent<HTMLInputElement>} e - The change event containing the updated input value.
   */
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
        data-testid="name-search"
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
