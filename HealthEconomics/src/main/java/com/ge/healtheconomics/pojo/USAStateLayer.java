package com.ge.healtheconomics.pojo;

public class USAStateLayer {
	private String state;
	private String stateName;
	private int pop_count;
	private int disease_count;
	private float landsize;
	private float pop_density;
	private float disease_density;

	public USAStateLayer() {
		super();
	}

	public USAStateLayer(String state, String stateName, int pop_count, int disease_count, float landsize,
			float pop_density, float disease_density) {
		super();
		this.state = state;
		this.stateName = stateName;
		this.pop_count = pop_count;
		this.disease_count = disease_count;
		this.landsize = landsize;
		this.pop_density = pop_density;
		this.disease_density = disease_density;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public int getPop_count() {
		return pop_count;
	}

	public void setPop_count(int pop_count) {
		this.pop_count = pop_count;
	}

	public int getDisease_count() {
		return disease_count;
	}

	public void setDisease_count(int disease_count) {
		this.disease_count = disease_count;
	}

	public float getLandsize() {
		return landsize;
	}

	public void setLandsize(float landsize) {
		this.landsize = landsize;
	}

	public float getPop_density() {
		return pop_density;
	}

	public void setPop_density(float pop_density) {
		this.pop_density = pop_density;
	}

	public float getDisease_density() {
		return disease_density;
	}

	public void setDisease_density(float disease_density) {
		this.disease_density = disease_density;
	}

	
}
