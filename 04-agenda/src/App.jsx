import ListItem from "./ListItem"

const personas = [ //esto es un objeto
  {
    nombre: 'Emelyn',
    apellidos: 'Lila',
    email: 'eme@si.com',
    telefono: '2871484783'
  },
  {
    nombre: 'David',
    apellidos: 'Quiroz',
    email: 'davi@qu.com',
    telefono: '2871553508'
  },
  {
    nombre: 'Miryam',
    apellidos: 'Baranda',
    email: 'yani@zi.com',
    telefono: '20350252'
  }
]

function App() {

  return (
    <div>
      <h1>Agenda</h1>
      <hr/>
      <ul>
        {personas.map((persona)=> (
        <ListItem
          key={persona.email}
          persona={persona}
        />
        
        ))}




      </ul>
    </div>
  )
}

export default App
