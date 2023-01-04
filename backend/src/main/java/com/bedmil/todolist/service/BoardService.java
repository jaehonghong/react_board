package com.bedmil.todolist.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bedmil.todolist.domain.Board;
import com.bedmil.todolist.domain.BoardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService{
	
	private final BoardRepository boardRepository;
	
	@Transactional// 서비스 함수가 종료될때 커밋할지 롤백할지 트랜잭션 관리
	public Board 저장하기(Board board) {
		return boardRepository.save(board);
	}
	
	@Transactional(readOnly = true) 
	public Board 한건가져오기(Long id) {
		return boardRepository.findById(id)
		.orElseThrow(() -> new IllegalArgumentException("ID를 확인해주세요"));			
	}
	
	public List<Board> 모두가져오기(){
		return boardRepository.findAll();
	}
	
	@Transactional
	public Board 수정하기(Long id, Board board) {
		Board boardEntity = boardRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("id확인여망"));
		boardEntity.setTitle(board.getTitle());
		boardEntity.setContent(board.getContent());
		return boardEntity;
	}//함수 종료 => 트랜잭션 종료 => 영속화되어있는 데이터를 db로 갱신
	
	@Transactional
	public String 삭제하기(Long id) {
		boardRepository.deleteById(id);
		return "ok";
	}
	
}
