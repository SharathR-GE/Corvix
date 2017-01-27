package com.ge.healtheconomics.pojo;

public class ZipCodeDetails {
	private int zipcode;
	private int count;

	public ZipCodeDetails(int zipcode, int count) {
		super();
		this.zipcode = zipcode;
		this.count = count;
	}

	public int getZipcode() {
		return zipcode;
	}

	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

}
