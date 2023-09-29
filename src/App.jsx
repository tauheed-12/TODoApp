import React,{useState} from "react";
function App(){
    const[count,setCount]=useState(1);
    const[items,setItems]=useState([{
        id:count,
        isChec:false,
        value:"",
    }])
   
    const [item,changeItem]=useState("");
    function addItem(event){
        changeItem(event.target.value); 
    }
    function AddList(event){
        event.preventDefault()
        if (item.trim() === "") return;
        setItems(preValue=>{
            return[
                ...preValue,
                {
                    id:count,
                    isChec:false,
                    value:item
                }
            ]
        })
       setCount(count+1);
       changeItem("");
    }
    function TextDeco(itemsId){
          setItems((prevItems)=>
            prevItems.map((item)=>
                item.id===itemsId?{...item,isChec:!item.isChec}:item
            )
          )
    }
    function deletetask(x){
        const newItems=items.filter((y)=>y.id!==x);
        setItems(newItems);
    }

    return(
        <div className="ToDoContent">
            <div className="heading">To Do List</div>
            <div className="Input">
                <input type="text" onChange={addItem} placeholder="Enter Your Task" name="Enter" value={item}/>
                <button type="submit" className="Add" onClick={AddList}>+</button>
            </div>
            <div className="Content">
                <ul>
                 {items.map(todoitem=> todoitem.value!==""&&<div className="List"><input type="checkbox" onChange={()=>TextDeco(todoitem.id)} checked={todoitem.isChec}/> <li style={{textDecoration:todoitem.isChec?"line-through":"none"}}>{todoitem.value}</li><div className="del" onClick={()=>deletetask(todoitem.id)}></div></div>)}
                </ul>
            </div>
        </div>
    )
}
export default App;