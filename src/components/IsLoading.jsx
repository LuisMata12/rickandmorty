import React from 'react'

export default function IsLoading() {
  return (
    <div className="text-center" style={{marginTop:'500px'}}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
