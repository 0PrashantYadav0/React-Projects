import React, { useCallback, useEffect, useState ,useRef} from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz";
    let num = "1234567890";
    let special = "!@#$%^&*()_+-={}|[]:;'<>?,./~`";

    if (isNumber) str += num;
    if (isSpecial) str +=special;
    for (let i = 0; i < length; i++) {
      let chr = Math.floor(Math.random() * str.length )
      pass += str[chr];
    }
    setPassword(pass)
  }, [length, setPassword, isNumber, isSpecial]);

  useEffect(()=>generatePassword(),[length,  isNumber, isSpecial, setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])


  return (
    <div className="w-screen h-screen flex justify-center items-center text-orange-400">
      <div className="p-10 bg-gray-700 inline-block ">
        <h1 className="text-center text-4xl font-semibold p-4">
          Password Generator
        </h1>
        <input className="rounded-l-md p-2 text-black text-xl w-96" placeholder="Password" value={password} readOnly ref={passwordRef}/>
        <button className="bg-blue-600 p-2 rounded-r-md text-xl mb-5 shrink-0 outline-none hover:bg-blue-800 text-white" onClick={()=> copyPassword()}>
          Copy
        </button>
        <div className="m-2">
          <input type="range" className="px-2 cursor-pointer" min={6} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="length" className="px-3">
            Length({length})
          </label>
          <input type="checkbox" onChange={()=>setIsNumber((prev) => !prev)}/>
          <label htmlFor="number" className="px-2">
            Number
          </label>
          <input type="checkbox" onChange={()=>setIsSpecial((prev) => !prev)}/>
          <label htmlFor="Special" className="px-2">
            Special
          </label>
        </div>
      </div>
    </div>
  );
}
