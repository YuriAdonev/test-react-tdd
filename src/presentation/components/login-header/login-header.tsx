import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
import { Logo } from '@/presentation/components'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo className={Styles.logo} />
      <h1>Test project - react, typescript, TDD, clean architecture</h1>
    </header>
  )
}

export default memo(LoginHeader)
