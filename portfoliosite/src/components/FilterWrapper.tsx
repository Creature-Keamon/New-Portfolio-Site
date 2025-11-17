import FilterButton from "./FilterButton";
import { useState } from "react";

interface Props {
  filters: string[];
}

export default function FilterWrapper({ filters }: Props) {
  const [alertVisible, alertVisibility] = useState(false);
  return (
    <div className="filter-wrapper text">
      <h3 className="filter-header text header-text">FILTERS</h3>
      {filters.map((item) => (
        <FilterButton onClick={() => alertVisibility(true)}>
          {item}
        </FilterButton>
      ))}
    </div>
  );
}
