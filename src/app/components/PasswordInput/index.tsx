import { HiddenIcon, VisibleIcon } from '@bitcoin-design/bitcoin-icons-react/outline'
import React, { useEffect, useState } from "react";

interface PasswordInputType {
  labelText: string
  labelFor?: string
}

export default function PasswordInput(
  {/*className: string = '',*/ labelText, labelFor = 'password', ...props}: Partial<React.InputHTMLAttributes<HTMLInputElement>>& PasswordInputType) {
  const [hidden, setVisible] = useState(true);

  return (
      <div>
        <label
          htmlFor={labelFor}
          className=""
          >{labelText}
        </label>
        <input
          {...props}
          type={hidden ? "password" : "text"}
          className=""
          required={true}
        />
        <button onClick={()=> {setVisible(!hidden)}}>
          {hidden ? <HiddenIcon className="h-6 w-6"/> : <VisibleIcon className="h-6 w-6" />}
        </button>
      </div>
    );
}