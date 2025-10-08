function Footer({setColor}) {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full flex justify-center gap-3 shadow-md bg-transparent px-2 py-2 rounded-t-2xl">
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white bg-green hover:bg-green-800"
        >
          Green
        </button>
        <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white bg-purple hover:bg-purple-800"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white bg-red hover:bg-red-800"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white bg-blue hover:bg-blue-900"
        >
          Coral
        </button>
      </div>
    </>
  );
}

export default Footer;
