const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old, and you are a {props.species}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div> 
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} species="Black Penguin"/>
      
    </div>
  )
}

export default App