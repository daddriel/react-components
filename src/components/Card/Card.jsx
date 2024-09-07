import { Button } from "../Button/Button"
import { Description } from "../Description/Description"
import { List } from "../List/List"
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur alias impedit dolorum asperiores dicta voluptas adipisci delectus saepe inventore, rem excepturi molestiae necessitatibus reiciendis quasi libero eaque velit ratione!"

const hobbies = ["✡️ Read Holy Bible ", "🎮 Play Super Mario Bros", "👨🏻‍🍳 Cook"]
const experiences = ["💛 JavaScript", "💙TypeScript", "💚 Vue", "❤️Angular", "☕Java"]
export const Card = ()=>{
 
  return (
    <>
        <div className="card">
          <h1>David Adriazola</h1>
           <Description description={description}></Description>
           <List title={"Hobbies"} items= {hobbies}></List> 
           <List title={"Experience"} items={experiences}> </List>
           <Button isClosed= {true} content={"Cerrar"}></Button>
           <Button isClosed= {false} content={"Aceptar"}></Button>
        </div>
    </>

  )
} 