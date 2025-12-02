import React from 'react'
import '../styles.css'

export default function ScrollArrow() {
  return (
    <div className="scroll-arrow-container">
      <svg
        className="scroll-arrow-triangle scroll-arrow-1"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 24 L0 0 L32 0 Z"
          stroke="rgba(74, 158, 255, 0.9)"
          strokeWidth="3.5"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="scroll-arrow-triangle scroll-arrow-2"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 24 L0 0 L32 0 Z"
          stroke="rgba(74, 158, 255, 0.7)"
          strokeWidth="3.5"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="scroll-arrow-triangle scroll-arrow-3"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 24 L0 0 L32 0 Z"
          stroke="rgba(74, 158, 255, 0.5)"
          strokeWidth="3.5"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
