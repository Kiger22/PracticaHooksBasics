import React from 'react'

function nameList() {
  const names = ['Juan', 'María', 'Pedro', 'Isabel'];

  return (
    <div>
      <h2>Lista de Nombres</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default nameList