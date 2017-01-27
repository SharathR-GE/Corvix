package com.ge.healtheconomics.pojo;

import java.util.List;

public class PopulationDensity {
	private String state;
	private float firstmaxDiseaseDensity;
	private float secondmaxDiseaseDensity;
	private float thirdmaxDiseaseDensity; 
	private List<PopulationLayer> populationCount;

	public PopulationDensity() {
		super();
	}

	public PopulationDensity(String state, float firstmaxDiseaseDensity, float secondmaxDiseaseDensity,
			float thirdmaxDiseaseDensity, List<PopulationLayer> populationCount) {
		super();
		this.state = state;
		this.firstmaxDiseaseDensity = firstmaxDiseaseDensity;
		this.secondmaxDiseaseDensity = secondmaxDiseaseDensity;
		this.thirdmaxDiseaseDensity = thirdmaxDiseaseDensity;
		this.populationCount = populationCount;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public float getFirstmaxDiseaseDensity() {
		return firstmaxDiseaseDensity;
	}

	public void setFirstmaxDiseaseDensity(float firstmaxDiseaseDensity) {
		this.firstmaxDiseaseDensity = firstmaxDiseaseDensity;
	}

	public float getSecondmaxDiseaseDensity() {
		return secondmaxDiseaseDensity;
	}

	public void setSecondmaxDiseaseDensity(float secondmaxDiseaseDensity) {
		this.secondmaxDiseaseDensity = secondmaxDiseaseDensity;
	}

	public float getThirdmaxDiseaseDensity() {
		return thirdmaxDiseaseDensity;
	}

	public void setThirdmaxDiseaseDensity(float thirdmaxDiseaseDensity) {
		this.thirdmaxDiseaseDensity = thirdmaxDiseaseDensity;
	}

	public List<PopulationLayer> getPopulationCount() {
		return populationCount;
	}

	public void setPopulationCount(List<PopulationLayer> populationCount) {
		this.populationCount = populationCount;
	}

	
}
