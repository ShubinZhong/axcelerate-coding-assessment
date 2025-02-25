import React from "react";
import classes from "./SearchableList.module.css";
import { SearchBar } from "./SearchBar";
import { Section } from "./Section";
import { ListItemProps } from "./ListItem";

export type TSectionList = {
  sectionName: string;
  list: ListItemProps[];
  isActive: boolean;
};
export interface SearchableListProps {
  lists: TSectionList[];
}

export const SearchableList = ({ lists, ...props }: SearchableListProps) => {
  return (
    <div {...props}>
      <SearchBar placeholderText={"Search"} onChangeHandler={() => {}} />
      {lists.map((l) => {
        return (
          <Section
            sectionName={l.sectionName}
            listContent={l.list}
            isActive={l.isActive}
          />
        );
      })}
    </div>
  );
};
