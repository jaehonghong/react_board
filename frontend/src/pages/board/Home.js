
import React, { useEffect, useState } from "react";
import Item from "../../components/item";

const Home = () =>{

    const [items, setitems]=useState([]);

    //함수 실행시 최초 한번 실행되는것
    useEffect(() => {
        fetch("http://localhost:8081/board").then(res=>res.json()).then(res=>{
            console.log(res);
            setitems(res);
        });//비동기 함수
    },[])


    return(
        <div>
            {items.map(board =>(
                <Item key={board.id} board={board}/>
            ))}
        </div>
    );
}
export default Home;