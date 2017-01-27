package com.ge.healtheconomics.pojo;

import java.util.List;

public class Diseases {
	private List<String> heartDisease;
	private List<String>strokeDisease;
	
	
	public Diseases(List<String> heartDisease, List<String> strokeDisease) {
		super();
		this.heartDisease = heartDisease;
		this.strokeDisease = strokeDisease;
	}
	public Diseases() {
		// TODO Auto-generated constructor stub
	}
	public List<String> getHeartDisease() {
		return heartDisease;
	}
	public void setHeartDisease(List<String> heartDisease) {
		this.heartDisease = heartDisease;
	}
	public List<String> getStrokeDisease() {
		return strokeDisease;
	}
	public void setStrokeDisease(List<String> strokeDisease) {
		this.strokeDisease = strokeDisease;
	}

}
