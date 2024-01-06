import React from 'react'
import ReactDOM from 'react-dom'
import '../../styles/style.css'
import CashuProjectsLogo from '/src/static/assets/logo-no-background-with-container.svg'
import {PasswordSetupForm} from "./modules/PasswordSetupForm"
import {LoginForm} from "./modules/Login"
import { hasSignedUp } from '../../util'


ReactDOM.render(
  <React.StrictMode>
    <img src={CashuProjectsLogo} alt='CashuProjects Logo' />
    <h5 className="mb-4 text-3xl max-sm:text-xl text-white">
        Set a password
    </h5>
    <p className="text-[16px] text-[#C0C0C0] mb-8">
        This password will be used to encrypt your tokens.
    </p>
    {(await hasSignedUp()) ?<LoginForm/> :<PasswordSetupForm/>}
  </React.StrictMode>,
  document.getElementById('welcome-root')
)
