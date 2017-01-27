package com.ge.healtheconomics.pojo;

public class ContactUs {
	private String firstName;
	private String lastName;
	private String email;
	private String phonenumber;
	private String job;
	private String company;
	private String question;

	public ContactUs() {
		super();
	}

	
	public ContactUs(String firstName, String lastName, String email, String phonenumber, String job, String company,
			String question) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phonenumber = phonenumber;
		this.job = job;
		this.company = company;
		this.question = question;
	}


	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	
}
