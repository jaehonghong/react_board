import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Detail = (props) =>{
    console.log(1,props);
    const propsParam = useParams();
    const id = propsParam.id;
    const navigate = useNavigate();

    const[board,setBoard] = useState({
       id:"",
       title:"",
       content:"", 
    });

    useEffect(() => {
        fetch('http://localhost:8081/board/'+id)
        .then((res)=>res.json())
        .then((res)=>{
        setBoard(res);
        });
    },[])

    const deleteBoard = () => {
        fetch('http://localhost:8081/board/'+id,{
            method:'DELETE',
        })
        .then((res)=>res.text())
        .then((res)=>{
            if(res === 'ok'){
                navigate("/");
            }else{
                alert("삭제실패");
            }
        });
    };

    const updateBoard = () =>{
        navigate("/updateForm/"+id);
    }

    return(
        <div>
            <h1>상세보기</h1>
            <Button variant="outline-info" onClick={updateBoard}>수정</Button>
            {' '}
            <Button variant="outline-info" onClick={deleteBoard}>삭제</Button>
            <hr/>
            <h3>{board.title}</h3>
            <h3>{board.content}</h3>
        </div>
    );
}
export default Detail;