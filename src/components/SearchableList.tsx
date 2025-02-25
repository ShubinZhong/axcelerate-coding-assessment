import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { Section } from "./Section";
import { User } from "./ListItem";

export type TSectionList = {
  /**
   * The name of the section.
   */
  sectionName: string;
  /**
   * The list of users in the section.
   */
  list: User[];
  /**
   * Indicates whether the section is currently active.
   */
  isActive: boolean;
};
export interface SearchableListProps {
  /**
   * An array of section lists to be displayed in the component.
   */
  lists: TSectionList[];
  /**
   * Determines whether to show user emails in the list.
   */
  showEmail: boolean;
}

export const SearchableList = ({
  lists,
  showEmail,
  ...props
}: SearchableListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentLists, setCurrentLists] = useState(lists);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = lists.map((l) => ({
        ...l,
        list: l.list.filter((p) =>
          p.contactName
            .toLocaleLowerCase()
            .startsWith(searchTerm.toLocaleLowerCase())
        ),
      }));
      setCurrentLists(results);
    } else {
      setCurrentLists(lists);
    }
  }, [searchTerm]);

  return (
    <div {...props}>
      <SearchBar
        placeholderText={"Search"}
        onChangeHandler={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {currentLists.map((l) => {
        return (
          <Section
            key={l.sectionName}
            sectionName={l.sectionName}
            listContent={l.list}
            isActive={l.isActive}
            showEmail={showEmail}
          />
        );
      })}
    </div>
  );
};
