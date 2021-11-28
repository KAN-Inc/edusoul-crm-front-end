import { useState } from "react";

import * as Styled from "./style";
import { SearchIcon } from "../../constants/icons";

const Search = ({ globalFilter, setGlobalFilter, searchPlaceholder }) => {
  return (
    <Styled._>
      <SearchIcon width={20} height={20} fill={"#8B83BA"} />
      <Styled.Search
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder={searchPlaceholder}
      />
    </Styled._>
  );
};

export default Search;
