package com.ge.healtheconomics.pojo;

public class User {

	private String username;
	private String password;
	private int count;
	private boolean feedback;
	private boolean termsandcondition;
	private String role;

	public User() {
		super();
	}

	public User(String username, String password, int count, boolean feedback, boolean termsandcondition,
			String role) {
		super();
		this.username = username;
		this.password = password;
		this.count = count;
		this.feedback = feedback;
		this.termsandcondition = termsandcondition;
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public boolean isFeedback() {
		return feedback;
	}

	public void setFeedback(boolean feedback) {
		this.feedback = feedback;
	}

	public boolean isTermsandcondition() {
		return termsandcondition;
	}

	public void setTermsandcondition(boolean termsandcondition) {
		this.termsandcondition = termsandcondition;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
}