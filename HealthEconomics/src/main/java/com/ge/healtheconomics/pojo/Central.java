package com.ge.healtheconomics.pojo;

public class Central {
	private String zipcode;
	private int x;
	private int y;

	public Central() {
		super();
	}

	public Central(String zipcode, int x, int y) {
		super();
		this.zipcode = zipcode;
		this.x = x;
		this.y = y;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

}
