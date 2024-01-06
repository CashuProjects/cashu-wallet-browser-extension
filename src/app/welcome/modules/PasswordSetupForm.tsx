import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import { updatePassword } from "../../../util"

interface Props {
  children?: React.ReactNode;
};
  
const passwordErrors: Record<string, React.ReactNode> = {
    emptyPasswordInput: "<span> Enter a Password</span>",
    passwordErrorMessage: 
    "<span class=\'font-medium\'>Try a combo stronger than Goku!</span> Password must be at least 8 characters long, include at least one capital letter, number, and symbol.",
    passwordConfirmationErrorMessage: "<span class=\'font-medium\'>Matte Kudasai!</span> Your passwords are like apples and oranges – Please make sure they match!'",
};

const initFormData = {
  password: '',
  passwordConfirmation: ''
};

const formErrors: Record<string, boolean> = {
  emptyPasswordInputError: false,
  PasswordErrors: false,
  confirmPasswordErrors:  false
}

export function PasswordSetupForm({}: Props) {
  //const navigate = useNavigate();
  const [formData, setFormData] = useState(initFormData)
  const [errors, setErrors] = useState(formErrors);

  function onchange(event: React.ChangeEvent<HTMLInputElement>) {
    if (
      event.target.name === "password" ||
      event.target.name === "confirm-password"
    ) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value.trim(),
        });
      }
    }

    function validate() {
      const regex = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

      if (!formData.password) setErrors({...errors, emptyPasswordInputError: true});
      if (formData.password !== formData.passwordConfirmation) {
        setErrors({...errors, confirmPasswordErrors: true})
      } else if (!regex.test(formData.password)) {
        setErrors({...errors, PasswordErrors: true});
      }
    }

    async function onsubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      try {
        var hash = await updatePassword(formData.password);
        //navigate("");
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
          // Display error to user and exit
        }
      }
    }

    return (
      <form onSubmit={onsubmit}>
        <div className="">
        <PasswordInput labelText='Password' name='Password' onChange={onchange} onBlur={validate} />
        {errors.emptyPasswordInputError && passwordErrors.emptyPasswordInput}
        {errors.PasswordErrors && passwordErrors.passwordErrorMessage}
        </div>
        <div className="">
        <PasswordInput labelText='Confirm Password' name='confirm-password' onChange={onchange} onBlur={validate} />
        {errors.confirmPasswordErrors && passwordErrors.passwordConfirmationErrorMessage}
        </div>
        <div className="">
          <button
            type="submit"
            disabled={
              !formData.password ||
              formData.password !== formData.passwordConfirmation
            }
            className=""
            >
            Next
            </button>
        </div>
      </form>
    )
}