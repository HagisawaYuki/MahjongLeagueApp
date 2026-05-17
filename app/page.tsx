'use client'

import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')

  const addPlayer = async () => {
    await fetch('/api/player', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, userId: "cmp9gllyp0000ijeh6hw9x6my" }),
    })
  }

  return (
    <div className="p-10">
      <input
        className="border"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="border ml-2 px-2"
        onClick={addPlayer}
      >
        追加
      </button>
    </div>
  )
}