import FilterButton from "./FilterButton";

interface Props {
  filterItem: (filter: string) => void;
}

export default function FilterWrapper({ filterItem }: Props) {
  const filters = [
    "Programming",
    "Web Development",
    "3D Art",
    "Game Design",
    "Video Editing",
    "Filmmaking",
    "All",
  ];
  return (
    <div className="filter-wrapper text">
      <h3 className="filter-header text header-text">FILTERS</h3>
      {filters.map((item, index) => (
        <FilterButton
          onClick={() => filterItem(item)}
          Clickable={true}
          key={index}
        >
          {item}
        </FilterButton>
      ))}
    </div>
  );
}
