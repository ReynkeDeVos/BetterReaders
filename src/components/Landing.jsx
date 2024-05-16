import MaraudersMap from "./MaraudersMap";

function Landing() {
  return (
    <div className="m-1 mx-auto max-w-7xl overflow-hidden rounded-md border-4 border-double border-black bg-gradient-to-r  from-cyan-600 to-yellow-400 object-cover p-2 px-2 shadow-2xl sm:px-6 lg:px-8 ">
      <h1 className="p-2 text-2xl font-bold">
        Welcome to our small library of horrors and treats!
      </h1>
      <p className="text-xl">Falling back on the classic Harry Potter trope:</p>
      <p className="p-3 text-xl font-bold">The Marauders Map:</p>
      <MaraudersMap />
    </div>
  );
}

export default Landing;
