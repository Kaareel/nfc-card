interface Props {
  title: string;
}

function Title(props: Props) {
  return (
    <h2>
      <a
        href="#"
        className="text-white font-bold focus:outline-none focus:border-dotted focus:border-2 focus:border-priceColor hover:text-priceColor text-2xl"
      >
        {props.title}
      </a>
    </h2>
  );
}

export default Title;
