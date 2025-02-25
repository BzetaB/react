import { useState } from 'react'
import './App.css'


interface Item{
  id: string,
  text: string
}

const INITIAL_ITEMS:Item[] = [
  {
    id: crypto.randomUUID(),
    text: "Mouse"
  },
  {
    id: crypto.randomUUID(),
    text: "Teclado"
  },
  {
    id: crypto.randomUUID(),
    text: "Screen"
  }
]


function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const {elements} = event.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if(!isInput || input == null) return


    const  newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value
    }

    setItems((prevItems) =>{
      return [...prevItems, newItem]
    })

    input.value = ""    
  }
  return (
    <main>
      <aside>
        <h1>Prueba</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input
              name="item"
              required
              type='Text'
              placeholder='Elemento'
            />
          </label>
          <button>Añadir elemento</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {
            items.map(item => {
              return (
                <li key={item.id}>
                  {item.text}
                </li>
              )
            } )
          }
        </ul>
      </section>
    </main>
  )
}

export default App
