const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )

}

const Total = (props) => {
  let total = 0

  props.list.forEach(element => {
    total += element.exercises
  });

  return(
    <p>Number of exercises {total}</p>
  )
}

const Part = (props) =>{
  return(
    <p>
      {props.name} {props.number}
    </p>

  )
}

const Content = (props) => {
  // I was looking for some ways to do it with for or a map. But those stuff is not yet on the class. So I will
  // Do it step by step. Im not really sure about passing it like an dictionary but yeah, works.

  return(
    <div>
      <Part name={props.list[0].name} number={props.list[0].exercises}></Part>
      <Part name={props.list[1].name} number={props.list[1].exercises}></Part>
      <Part name={props.list[2].name} number={props.list[2].exercises}></Part>
      
      
    </div>
    
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}></Header>
      <Content list={course.parts}></Content>
      <Total list={course.parts}></Total>
    </div>
  )
}

export default App