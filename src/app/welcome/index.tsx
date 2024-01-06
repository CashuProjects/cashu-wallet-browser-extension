import React from 'react'
import { createRoot } from 'react-dom/client';

import '../../styles/style.css'
import CashuProjectsLogo from '/src/static/assets/logo-no-background-with-container.svg'
import {PasswordSetupForm} from "./modules/PasswordSetupForm"
import {LoginForm} from "./modules/Login"
import { hasSignedUp } from '../../util'

const welcomeContainer = 
document.getElementById('welcome-root');
const welcomeRoot = createRoot(welcomeContainer!)
welcomeRoot.render(
  <React.StrictMode>
    <img src={CashuProjectsLogo} alt='CashuProjects Logo' />
    <h5 className="">
        Set a password
    </h5>
    <p className="">
        This password will be used to encrypt your tokens.
    </p>
    {(await hasSignedUp()) ?
    <> <LoginForm/>
    <p  className="">Your password must be at least 8 characters long, include at least one capital letter, number, and symbol.</p>
    </> : <PasswordSetupForm/>}
  </React.StrictMode>
)
