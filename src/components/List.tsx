import Clock from "./Icon/Clock";
import NFC from "./Icon/NFC"

interface Props{
    prices: number
    time: number
    date: string

}

function List(props: Props) {
  return (
    <ul className="flex justify-between w-full border-b-2 border-b-colorBorder pb-3 text-lg">
      <li>
        <p className="font-medium text-priceColor flex justify-center items-center">
          <NFC/> {props.prices }
          <abbr title="Ethereum (cryptocurrency)" className="no-underline pl-1">
            ETH
          </abbr>
        </p>
      </li>
      <li>
        <p className="text-textColor flex justify-center items-center"><Clock/> {props.time} {props.date}</p>
      </li>
    </ul>
  );
}

export default List;
