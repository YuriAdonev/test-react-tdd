import React from 'react'
import Spinner from '@/presentation/components/spinner/spinner'
import Styles from './login-styles.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <div className={Styles.logo}>LOGO</div>
        <h1>Test project - react, typescript, TDD, clean architecture</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="e-mail" />
          <span className={Styles.status}></span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="password" />
          <span className={Styles.status}></span>
        </div>
        <button className={Styles.submit} type="submit">Enter</button>
        <span className={Styles.link}>Create an account</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <footer className={Styles.footer} />
    </div>
  )
}

export default Login
