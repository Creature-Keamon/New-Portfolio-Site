import FilterButton from "./FilterButton";

interface Props {
  filters: string[];
  filterItem: (filter: number) => void;
}

export default function FilterWrapper({ filters, filterItem }: Props) {
  return (
    <div className="filter-wrapper text">
      <h3 className="filter-header text header-text">FILTERS</h3>
      {filters.map((item, index) => (
        <FilterButton
          onClick={() => filterItem(index)}
          Clickable={true}
          key={index}
        >
          {item}
        </FilterButton>
      ))}
    </div>
  );
}
