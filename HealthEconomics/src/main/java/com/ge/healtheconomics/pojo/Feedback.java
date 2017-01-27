package com.ge.healtheconomics.pojo;

/*
public class Feedback {

	@JsonProperty("name")
	private String name;
	@JsonProperty("phone")
	private String phone;
	@JsonProperty("email")
	private String email;
	@JsonProperty("question1")
	private String question1;
	@JsonProperty("question2")
	private String question2;
	@JsonProperty("experience")
	private String experience;
	@JsonProperty("comment")
	private String comment;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getQuestion1() {
		return question1;
	}

	public void setQuestion1(String question1) {
		this.question1 = question1;
	}

	public String getQuestion2() {
		return question2;
	}

	public void setQuestion2(String question2) {
		this.question2 = question2;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}*/
public class Feedback {
	private String name;
	private String phone;
	private String email_ID;
	private String question_1;
	private String question_2;
	private String experience;
	private String comment;

	public Feedback() {
		super();
	}

	public Feedback(String name, String phone, String email_ID, String question_1, String question_2, String experience,
			String comment) {
		super();
		this.name = name;
		this.phone = phone;
		this.email_ID = email_ID;
		this.question_1 = question_1;
		this.question_2 = question_2;
		this.experience = experience;
		this.comment = comment;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail_ID() {
		return email_ID;
	}

	public void setEmail_id(String email_id) {
		this.email_ID = email_id;
	}

	public String getQuestion_1() {
		return question_1;
	}

	public void setQuestion_1(String question_1) {
		this.question_1 = question_1;
	}

	public String getQuestion_2() {
		return question_2;
	}

	public void setQuestion_2(String question_2) {
		this.question_2 = question_2;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	
}