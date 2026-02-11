import react from "react";

interface todolistprops{
    title :string,
}

const Todolist : react.FC<todolistprops> = (props)=>{
    return (
        <div>
            <li>{props.title}</li>
        </div>
    )
}

export default Todolist;

//props are things send from parent to childern
// in interface title is complusory so if we want to do it optional we shud put ? ..eg:title?:string 