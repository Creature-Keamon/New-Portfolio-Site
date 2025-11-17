interface Props {
  text: string;
}

function CustomHeader({ text }: Props) {
  return <h1 className="CustomHeader">{text}</h1>;
}

export default CustomHeader;
