import React, { useEffect, useState } from "react";
import {Button, Form} from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
const UpdateForm = () =>{
    const navigate = useNavigate();
    const propsParam = useParams();
    const id = propsParam.id;

    const [boards, setBoard] = useState({
        title:'',
        content:'',
    });

    useEffect(() => {
        fetch('http://localhost:8081/board/'+id)
        .then((res)=>res.json())
        .then((res)=>{
        setBoard(res);
        });
    },[])

    const changeValue = (e) =>{
        setBoard({
            ...boards,
            [e.target.name]:e.target.value
        })
    }

    const submitBoard = (e) =>{
        e.preventDefault();
        //submit이 action을 안타고 자기 할일을 그만함
        fetch("http://localhost:8081/board/"+id,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(boards)
        })
        .then((res)=>{
            if(res.status === 200){
                return res.json();
            }else{
                return null;
            }
        })
        .then(res=>{
            if(res !== null){
                navigate("/board/"+id);
            }else{
                alert("등록 실패");
            }
            
        });
    };

    return(
        <Form onSubmit={submitBoard}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="제목" onChange={changeValue}
        name="title"value={boards.title}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" placeholder="내용" onChange={changeValue}
        name="content" value={boards.content}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
}
export default UpdateForm;