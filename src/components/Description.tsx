interface Props{
    description: string,
}

function Description(props: Props) {
  return (
    <p className="text-textColor my-4 text-lg  ">
      {props.description}
    </p>
  );
}

export default Description;
