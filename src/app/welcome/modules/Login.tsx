import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import { verifyPassword } from "../../../util"

const initFormData = {
    password: ''
};

const passwordErrors: Record<string, React.ReactNode> = {
  emptyPasswordInput: "<span> Enter a Password</span>",
  invalidPasswordMessage: "<span>You entered the wrong password! Try again </span>"
}

const formErrors: Record<string, boolean> = {
    emptyPasswordInputError: false,
    invalidPassword: false
}

export function LoginForm() {
  //const navigate = useNavigate();
  const [formData, setFormData] = useState(initFormData)
  const [errors, setErrors] = useState(formErrors);

  function onchange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === "password") {
        setFormData({
          [event.target.name]: event.target.value.trim(),
        });
      }
    }

    async function onsubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      try {
        let verified = await verifyPassword(formData.password);
        if (verified) {
          //navigate("");
        }
          else {
          // Display error to user
          setErrors({invalidPassword: true})
        }
      } catch (e) {
        if (e instanceof Error) {
        }
      }
    }

      return (
        <form onSubmit={onsubmit}>
          <div className="">
          <PasswordInput labelText='Enter Your Password' name='Password' onChange={onchange}/>
          {errors.invalidPassword && passwordErrors.emptyPasswordInput}
          </div>

          <div >
            <button
              type="submit"
              disabled={!formData.password}
              className=""
              >
                Next
              </button>
          </div>
        </form>
      )
}