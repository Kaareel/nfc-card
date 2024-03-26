
import CreatorCard from "./components/CreatorCard";
import Description from "./components/Description";
import Image from "./components/Image";
import List from "./components/List";
import Title from "./components/Title";


function App() {
  return (
    <div className="bg-bgColor h-screen flex justify-center items-center">
      <div className="max-w-xs flex flex-col justify-center items-center p-6 bg-bgCard rounded-2xl shadow-3xl  ">
        <a href="/NFC.jpg" >
          <Image/>
        </a>
        <div className="pt-6 font-light leading-relaxed font-Outfit">
          <Title title="Equilibrium #3429"/>
          <Description description="Our Equilibrium collection promotes balance and calm."/>
          <List prices={0.041} time={3} date="days left"/>
          <CreatorCard name="Shimuelo"/>
        </div>
      </div>
    </div>
  );
}

export default App;
