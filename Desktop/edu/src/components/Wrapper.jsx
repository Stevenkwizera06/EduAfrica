import React from 'react'

const Wrapper = ({children, styles}) => {
  return (
    <div className={`max-w-[1080px] mx-auto ${styles}`}>
        {children}
    </div>
  )
}

export default Wrapper