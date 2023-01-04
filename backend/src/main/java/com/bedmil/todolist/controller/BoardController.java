package com.bedmil.todolist.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bedmil.todolist.domain.Board;
import com.bedmil.todolist.service.BoardService;

import lombok.RequiredArgsConstructor;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class BoardController {

	private final BoardService boardService;
	
	    @GetMapping("/board")//목차
	    public ResponseEntity<?>findAll() {
	    	return new ResponseEntity<>(boardService.모두가져오기(),HttpStatus.OK);
	    }
	    
	    @PostMapping("/board")//글 저장
	    public ResponseEntity<?>save(@RequestBody Board board) {
	    	return new ResponseEntity<>(boardService.저장하기(board),HttpStatus.CREATED);
	    }
	    
	    @GetMapping("/board/{id}")//상세 페이지
	    public ResponseEntity<?>findById(@PathVariable Long id){
	    	return new ResponseEntity<>(boardService.한건가져오기(id),HttpStatus.OK);
	    }
	    
	    @PutMapping("/board/{id}")//수정
	    public ResponseEntity<?>update(@PathVariable Long id, @RequestBody Board board){
	    	return new ResponseEntity<>(boardService.수정하기(id, board),HttpStatus.OK);
	    }
	    
	    @DeleteMapping("/board/{id}")//삭제
	    public ResponseEntity<?>deleteById(@PathVariable Long id){
	    	return new ResponseEntity<>(boardService.삭제하기(id),HttpStatus.OK);
	    }
	    
	    
}
