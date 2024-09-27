package com.example.todo.service;

import com.example.todo.entity.Task;
import com.example.todo.repository.TaskRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class TaskService {
    
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        Optional<Task> taskOptional = taskRepository.findById(id);
        return taskOptional.orElseThrow();
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task task) {
        Task existingTask = getTaskById(id);
        existingTask.setAssignedTo(task.getAssignedTo());
        existingTask.setStatus(task.getStatus());
        existingTask.setDueDate(task.getDueDate());
        existingTask.setPriority(task.getPriority());
        existingTask.setComments(task.getComments());
        return taskRepository.save(existingTask);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}