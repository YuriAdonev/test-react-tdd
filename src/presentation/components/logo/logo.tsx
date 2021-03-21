import React from 'react'
import Styles from './logo-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

const Logo: React.FC<Props> = (props: Props) => {
  return (
    <div {...props} className={[Styles.logo, props.className].join(' ')}>LOGO</div>
  )
}

export default Logo
