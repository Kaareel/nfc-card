import Eye from "./Icon/Eye";

function Image() {
  return (
    <div className="relative group">
      <img src="/NFC.jpg" alt="main" className="w-full h-auto group-hover:opacity-100 transition-opacity duration-300"/>
      <Eye />
    </div>
  );
}

export default Image;
