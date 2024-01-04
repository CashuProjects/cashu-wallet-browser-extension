import { HiddenIcon, VisibleIcon } from '@bitcoin-design/bitcoin-icons-react/outline'
import { useEffect, useState } from "react";

export default function PasswordInput(
  {/*className: string = '',*/, label: string = 'password', ID: string = 'password', placeholder: string =''}
  ) {
  const [hidden, setVisible] = useState(true);

  return (
      <div>
        <label
          for="password"
          className="mb-2 block text-sm font-medium text-white"
          >{label}
        </label>
        <input
          type={hidden ? "password" : "text"}
          id={ID}
          className="block w-full rounded-lg bg-black p-2.5 text-sm text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          placeholder=""
          required
        />
        <button onClick={()=> {setVisble(!hidden)}}>
          {hidden ? <HiddenIcon /> : <VisibleIcon />}
        </button>
      </div>
    );
}