interface Props {
  text: string;
}

function CustomHeader({ text }: Props) {
  return <h1 className="custom-header text header-text">{text}</h1>;
}

export default CustomHeader;
