import Course from "./components/course"
const App = () => {
  const course = [ {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ],
  },
  {
  id: 2,
    name: 'MBA engenharia de software',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ],
  },

]


  return (
    <div>
      <h1>
        Web development curriculum
      </h1>
      {
        course.map((course)=>{
          return (<Course key= {course.id} course={course} />)
        })
      }
    </div>
    
  )
}

export default App