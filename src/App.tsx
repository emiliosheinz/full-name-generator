import { useEffect, useState } from "react";

let renderCount = 0;

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const fullName = `${firstName} ${lastName}`.trim();
  // const [fullName, setFullName] = useState<string>("");

  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`.trim());
  // }, [firstName, lastName]);

  console.log("Render", ++renderCount);

  return (
    <div className="bg-gray-800 h-full min-h-screen flex flex-col items-center p-8 lg:p-24">
      <div className="w-full max-w-2xl space-y-10">
        <h1 className="text-3xl lg:text-6xl text-white text-center font-bold">
          Full Name Generator
        </h1>
        <input
          className="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-0 border-b-2 border-white text-2xl lg:text-4xl"
          type="text"
          placeholder="Type in your first name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          className="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-0 border-b-2 border-white text-2xl lg:text-4xl"
          type="text"
          placeholder="Type in your last name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <div className="flex w-full">
          <h2 className="text-2xl lg:text-4xl text-white text-center">
            Full Name: <span className="font-light">{fullName}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
