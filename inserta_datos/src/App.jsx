const persona={
nombre: "Emelyn Rodriguez Lila",
edad: 21,
profesión: "Estudiante",
pasatiempos: [
  "Jugar",
  "Dormir",
  "Noviar"
],
hobbie: [
  "Mi Tilino",
  "Mi cielo"
],
signo: "Escorpio",
fechaN: "01/11/02",
lugarN: "Tuxtepec"
}

function App() {

  return (
    <div>
      <h1>
        Información Personal
      </h1>
      <hr />
      <ul>
        <li>Nombre: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Profesión: {persona.profesión}</li>
        <li>Pasatiempos:</li>
          <ul>
            <li>{persona.pasatiempos[0]}</li>
            <li>{persona.pasatiempos[1]}</li>
            <li>{persona.pasatiempos[2]}</li>
          </ul>
        <li>Hobbies:</li>
          <ul>
            <li>{persona.hobbie[0]}</li>
            <li>{persona.hobbie[0]}</li>
          </ul>
        <li>Fecha de naciemiento: {persona.fechaN}</li>
        <li>Lugar de naciemiento: {persona.lugarN}</li>
        <li>Signo Zodiacal:{persona.signo}</li>
      
      </ul>
    </div>
  )
}

export default App
