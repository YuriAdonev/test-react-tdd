import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, LoginFooter, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="email" />
          <Input type="password" name="password" placeholder="password" />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Enter</button>
          <span className={Styles.link}>Create an account</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <LoginFooter />
    </div>
  )
}

export default Login
