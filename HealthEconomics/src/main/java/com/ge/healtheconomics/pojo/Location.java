package com.ge.healtheconomics.pojo;


public class Location {

	private String zipcode;
	private String state;
	private String city;
	private String abbreviation;
	private int x_axis;
	private int y_axis;
	private int scale;
	
	
	public Location() {
		super();
	}
	public Location(String zipcode, String state, String city, String abbreviation, int x_axis, int y_axis, int scale) {
		super();
		this.zipcode = zipcode;
		this.state = state;
		this.city = city;
		this.abbreviation = abbreviation;
		this.x_axis = x_axis;
		this.y_axis = y_axis;
		this.scale = scale;
	}
	public String getZipcode() {
		return zipcode;
	}
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getAbbreviation() {
		return abbreviation;
	}
	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}
	public int getX_axis() {
		return x_axis;
	}
	public void setX_axis(int x_axis) {
		this.x_axis = x_axis;
	}
	public int getY_axis() {
		return y_axis;
	}
	public void setY_axis(int y_axis) {
		this.y_axis = y_axis;
	}
	public int getScale() {
		return scale;
	}
	public void setScale(int scale) {
		this.scale = scale;
	}	
	
	
	

}
