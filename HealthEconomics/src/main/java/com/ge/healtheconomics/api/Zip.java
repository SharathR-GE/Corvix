package com.ge.healtheconomics.api;

public class Zip {
	public String zipcode;
	public float lat;
	public float lng;
	public float popcount;
	public float dcount;

	public Zip() {
		super();
	}

	public Zip(String zipcode, float lat, float lng, float popcount, float dcount) {
		super();
		this.zipcode = zipcode;
		this.lat = lat;
		this.lng = lng;
		this.popcount = popcount;
		this.dcount = dcount;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public float getLat() {
		return lat;
	}

	public void setLat(float lat) {
		this.lat = lat;
	}

	public float getLng() {
		return lng;
	}

	public void setLng(float lng) {
		this.lng = lng;
	}

	public float getPopcount() {
		return popcount;
	}

	public void setPopcount(float popcount) {
		this.popcount = popcount;
	}

	public float getDcount() {
		return dcount;
	}

	public void setDcount(float dcount) {
		this.dcount = dcount;
	}

}
