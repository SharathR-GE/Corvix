package com.ge.healtheconomics.pojo;

public class StateInfo {
	private String state;
	private int x_axis;
	private int y_axis;
	private int scale;

	public StateInfo() {
		super();
	}

	public StateInfo(String state, int x_axis, int y_axis, int scale) {
		super();
		this.state = state;
		this.x_axis = x_axis;
		this.y_axis = y_axis;
		this.scale = scale;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
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
