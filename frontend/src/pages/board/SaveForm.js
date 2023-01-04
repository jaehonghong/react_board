import React, { useState } from "react";
import {Button, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const SaveForm = () =>{
    const navigate = useNavigate();
    const [board, setBoard] = useState({
        title:'',
        content:'',
    });

    const changeValue = (e) =>{
        setBoard({
            ...board,
            [e.target.name]:e.target.value
        });
    }

    const submitBoard = (e) =>{
        e.preventDefault();
        //submit이 action을 안타고 자기 할일을 그만함
        fetch("http://localhost:8081/board",{
            method:"POST",
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(board)
        })
        .then((res)=>{
            if(res.status === 200){
                return res.json();
            }else{
                return null;
            }
        })
        .then(res=>{
                navigate("/");
                console.log(res);
        });
    }

    return(
        <Form onSubmit={submitBoard}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="제목" onChange={changeValue}
        name="title"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" placeholder="내용" onChange={changeValue}
        name="content"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
}
export default SaveForm;