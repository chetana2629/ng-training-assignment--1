package com.example.todo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Task {
	@Id
	@GeneratedValue
	private Long id;

	private String assignedTo;
	private String status;
	private String dueDate;
	private String priority;
	private String comments;
	public Task() {
		super();
	}
	
	
	public Task(Long id, String assignedTo, String status, String dueDate, String priority, String comments) {
		super();
		this.id = id;
		this.assignedTo = assignedTo;
		this.status = status;
		this.dueDate = dueDate;
		this.priority = priority;
		this.comments = comments;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getAssignedTo() {
		return assignedTo;
	}


	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getDueDate() {
		return dueDate;
	}


	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}


	public String getPriority() {
		return priority;
	}


	public void setPriority(String priority) {
		this.priority = priority;
	}


	public String getComments() {
		return comments;
	}


	public void setComments(String comments) {
		this.comments = comments;
	}


	@Override
	public String toString() {
		return "Task [id=" + id + ", assignedTo=" + assignedTo + ", status=" + status + ", dueDate=" + dueDate
				+ ", priority=" + priority + ", comments=" + comments + "]";
	}


}