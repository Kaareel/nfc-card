interface Props {
    name: string,
}

function CreatorCard(props: Props) {
  return (
    <div className="mt-3 flex justify-start items-center ">
      <img
        src="/gato-dios.jpg"
        alt="El todo poderoso gatito negro con zeus"
        className="rounded-full max-w-8 max-h-8 border"
      />
      <p className="px-3 text-textColor text-lg font-light leading-relaxed font-outfit">Creation of 
        <a 
        href="#"
        className="text-white focus:outline-none focus:border-dotted focus:border-2 focus:border-priceColor hover:text-priceColor text-xl "
        > {props.name}</a>
      </p>
    </div>
  );
}

export default CreatorCard;
