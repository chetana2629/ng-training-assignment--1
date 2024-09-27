package com.example.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

	List<Task> findByAssignedTo(String assignedTo);
}