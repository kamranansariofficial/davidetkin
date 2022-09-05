import React from 'react'
import Appbar from './appbar'

export default function Layout({children}) {
  return (
    <div>
        <Appbar />
        {
            children
        }
    </div>
  )
}
