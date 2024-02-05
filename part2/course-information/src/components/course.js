import Header from "./header"
import Content from "./content"
const Course = ({course})=> {
    return(
    <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
    </div>
    )
    
}

export default Course
