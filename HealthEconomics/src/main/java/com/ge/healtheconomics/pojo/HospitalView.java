package com.ge.healtheconomics.pojo;

public class HospitalView {
	private String hospitalName;
	private float hqLatitude;
	private float hqLongitude;
	private int numberBeds;
	
	public HospitalView() {
		super();
	}
	public HospitalView(String hospitalName, float hqLatitude, float hqLongitude, int numberBeds) {
		super();
		this.hospitalName = hospitalName;
		this.hqLatitude = hqLatitude;
		this.hqLongitude = hqLongitude;
		this.numberBeds = numberBeds;
	}
	public String getHospitalName() {
		return hospitalName;
	}
	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}
	public float getHqLatitude() {
		return hqLatitude;
	}
	public void setHqLatitude(float hqLatitude) {
		this.hqLatitude = hqLatitude;
	}
	public float getHqLongitude() {
		return hqLongitude;
	}
	public void setHqLongitude(float hqLongitude) {
		this.hqLongitude = hqLongitude;
	}
	public int getNumberBeds() {
		return numberBeds;
	}
	public void setNumberBeds(int numberBeds) {
		this.numberBeds = numberBeds;
	}

}
