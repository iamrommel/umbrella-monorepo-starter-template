import React from 'react'
import { useChatWindow } from '../hooks/useChatWindow'

export const ContactUsButton = ({ buttonProps, text = 'Contact Us' } = {}) => {
  const { toggleShow } = useChatWindow({ init: false })
  const onClick = (e) => {
    e?.preventDefault()

    toggleShow()
  }

  return (
    <a href="#" className="btn btn-light" {...buttonProps} onClick={onClick}>
      <i className="fas fa-envelope" /> <span className="text">{text}</span>
    </a>
  )
}
