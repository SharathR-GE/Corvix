package com.ge.healtheconomics.pojo;


public class DiseaseLayer {
	private String disZipCode;
	private String disease;
	private String gender;
	private String age;
	private String forcast5year;
	private String forcast10year;
	private String total;

	public DiseaseLayer() {
		super();
	}

	public DiseaseLayer(String disZipCode, String disease, String gender, String age, String forcast5year,
			String forcast10year, String total) {
		super();
		this.disZipCode = disZipCode;
		this.disease = disease;
		this.gender = gender;
		this.age = age;
		this.forcast5year = forcast5year;
		this.forcast10year = forcast10year;
		this.total = total;
	}

	public String getDisZipCode() {
		return disZipCode;
	}

	public void setDisZipCode(String disZipCode) {
		this.disZipCode = disZipCode;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getForcast5year() {
		return forcast5year;
	}

	public void setForcast5year(String forcast5year) {
		this.forcast5year = forcast5year;
	}

	public String getForcast10year() {
		return forcast10year;
	}

	public void setForcast10year(String forcast10year) {
		this.forcast10year = forcast10year;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

}
