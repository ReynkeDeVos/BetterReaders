import MaraudersMap from "./MaraudersMap";

function Landing() {
  return (
    <div className="border-double border-4 border-black rounded-md p-2 m-1 overflow-hidden shadow-2xl bg-gradient-to-r  from-cyan-600 to-yellow-400 object-cover mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <h1 className="text-2xl font-bold p-2">Welcome to our small library of horrors and treats!</h1>
      <p className="text-xl">Falling back on the classic Harry Potter trope:</p>
      <p className="text-xl font-bold p-3">The Marauders Map:</p>
      <MaraudersMap />
    </div>
  );
}

export default Landing;
