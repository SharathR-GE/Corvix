package com.ge.healtheconomics.dao.impl;

import org.springframework.util.StringUtils;

public class HospitalSQLBulider {
	private String baseQuery;
	private StringBuilder builder;

	private String hq_state;
	private String hospital_ownership;
	private int number_beds;
	private int number_bedsTo;

	private String magnet_designation;
	private String organ_transplant_network;
	private String cancer_accreditation;
	private String sole_community_hospital;
	private String academic_medical_center;
	private String council_teaching_membership;
	private String hhi;

	public String getBaseQuery() {
		return baseQuery;
	}

	public void setBaseQuery(String baseQuery) {
		this.baseQuery = baseQuery;
	}

	public StringBuilder getBuilder() {
		return builder;
	}

	public void setBuilder(StringBuilder builder) {
		this.builder = builder;
	}

	public String getHq_state() {
		return hq_state;
	}

	public void setHq_state(String hq_state) {
		this.hq_state = hq_state;
	}

	public String getHospital_ownership() {
		return hospital_ownership;
	}

	public void setHospital_ownership(String hospital_ownership) {
		this.hospital_ownership = hospital_ownership;
	}

	public int getNumber_beds() {
		return number_beds;
	}

	public void setNumber_beds(int number_beds) {
		this.number_beds = number_beds;
	}

	public int getNumber_bedsTo() {
		return number_bedsTo;
	}

	public void setNumber_bedsTo(int number_bedsTo) {
		this.number_bedsTo = number_bedsTo;
	}

	public String getMagnet_designation() {
		return magnet_designation;
	}

	public void setMagnet_designation(String magnet_designation) {
		this.magnet_designation = magnet_designation;
	}

	public String getOrgan_transplant_network() {
		return organ_transplant_network;
	}

	public void setOrgan_transplant_network(String organ_transplant_network) {
		this.organ_transplant_network = organ_transplant_network;
	}

	public String getCancer_accreditation() {
		return cancer_accreditation;
	}

	public void setCancer_accreditation(String cancer_accreditation) {
		this.cancer_accreditation = cancer_accreditation;
	}

	public String getSole_community_hospital() {
		return sole_community_hospital;
	}

	public void setSole_community_hospital(String sole_community_hospital) {
		this.sole_community_hospital = sole_community_hospital;
	}

	public String getAcademic_medical_center() {
		return academic_medical_center;
	}

	public void setAcademic_medical_center(String academic_medical_center) {
		this.academic_medical_center = academic_medical_center;
	}

	public String getCouncil_teaching_membership() {
		return council_teaching_membership;
	}

	public void setCouncil_teaching_membership(String council_teaching_membership) {
		this.council_teaching_membership = council_teaching_membership;
	}

	public String getHhi() {
		return hhi;
	}

	public void setHhi(String hhi) {
		this.hhi = hhi;
	}

	private HospitalSQLBulider(String baseQuery) {
		this.baseQuery = baseQuery;
		builder = new StringBuilder(baseQuery);
	}

	public HospitalSQLBulider() {
		// TODO Auto-generated constructor stub
	}

	public static HospitalSQLBulider create(String baseQuery) {
		return new HospitalSQLBulider(" select hospital_name,hq_latitude,hq_longitude ,number_beds from  healthschema.hospital where  hospital_type !='Health System' AND (");
	}

	public HospitalSQLBulider hq_state(String hq_state) {
		if (StringUtils.hasText(hq_state)) {
			if (hq_state.equals("All")) {
				builder.append(")");
			} else {
				builder.append(" AND hq_state ='" + hq_state + "')");
			}
		} else {
			builder.append(")");

		}
		return this;
	}

	public HospitalSQLBulider hospital_ownership(String hospital_ownership) {
		if (StringUtils.hasText(hospital_ownership)) {
			if (hospital_ownership.equals("All")) {
				builder.append("");

			} else if (hospital_ownership.equals("Others")) {
				builder.append(" AND hospital_ownership  is null ");

			} else {
				builder.append(" AND hospital_ownership ='" + hospital_ownership + "'");
			}
		}
		return this;
	}

	public HospitalSQLBulider number_beds(int number_beds, String hospital_ownership) {
		if (StringUtils.hasText(hospital_ownership))
			builder.append(" number_beds >" + number_beds + "");
		else
			builder.append(" ");

		return this;
	}

	public HospitalSQLBulider number_bedsTo(int number_bedsTo, String hospital_ownership, String hq_state) {
		if (StringUtils.hasText(hospital_ownership))
			builder.append(" AND number_beds <" + number_bedsTo + "");
		else if (StringUtils.hasText(hq_state))
			builder.append("false");
		else
			builder.append("true");

		return this;
	}

	public HospitalSQLBulider magnet_designation(boolean magnet_designation) {
		if (magnet_designation)
			builder.append(" AND magnetdesignation_boolean =true ");
		return this;
	}

	public HospitalSQLBulider organ_transplant_network(boolean organ_transplant_network) {
		if (organ_transplant_network)
			builder.append(" AND organtransplantnetwork_boolean = true");
		return this;
	}

	public HospitalSQLBulider cancer_accreditation(boolean cancer_accreditation) {
		if (cancer_accreditation)
			builder.append(" AND canceraccreditation_boolean = true");
		return this;
	}

	public HospitalSQLBulider sole_community_hospital(boolean sole_community_hospital) {
		if (sole_community_hospital)
			builder.append(" AND solecommunityhospital_boolean= true");
		return this;
	}

	public HospitalSQLBulider academic_medical_center(boolean academic_medical_center) {
		if (academic_medical_center)
			builder.append(" AND academicmedicalcenter_boolean = true");
		return this;
	}

	public HospitalSQLBulider council_teaching_membership(boolean council_teaching_membership) {
		if (council_teaching_membership)
			builder.append(" AND councilteachingmembership_boolean = true");
		return this;
	}

	public HospitalSQLBulider hhi(boolean hhi) {
		if (hhi)
			builder.append(" AND hhi_boolean= true ");
		return this;
	}


	public HospitalSQLBulider concatOpen(boolean magnet_designation, boolean organ_transplant_network,
			boolean cancer_accreditation, boolean sole_community_hospital, boolean academic_medical_center,
			boolean council_teaching_membership, boolean hhi) {
		// if(magnet_designation || organ_transplant_network ||
		// cancer_accreditation || sole_community_hospital ||
		// academic_medical_center || council_teaching_membership || hhi )
		// builder.append("AND ( false ");

		if (magnet_designation || organ_transplant_network || cancer_accreditation || sole_community_hospital
				|| academic_medical_center || council_teaching_membership || hhi)
			builder.append(" AND ( true ");
		else
			builder.append(" AND ( true ");

		return this;
	}

	public HospitalSQLBulider concatClose() {
		builder.append(")");
		return this;
	}

	public String build() {
		return builder.toString();
	}

	public static void main(String[] args) {
		System.out.println(HospitalSQLBulider
				.create("")
				.number_beds(0,null).number_bedsTo(40000, null, "IL").hq_state("IL").hospital_ownership(null)
				.concatOpen(false, false, false, false, false, false, false).magnet_designation(false)
				.organ_transplant_network(false).cancer_accreditation(false).sole_community_hospital(false)
				.academic_medical_center(false).council_teaching_membership(false).hhi(false).concatClose().build());
	}

}