interface Props {
  children: string;
  Clickable: boolean;
  onClick: () => void;
}

function FilterButton({ children, onClick, Clickable }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-secondary"}
      //style="--btn-border-width: .25rm;"
      {...(Clickable && { onClick: onClick })}
    >
      {children}
    </button>
  );
}

export default FilterButton;
