package com.ge.healtheconomics.pojo;

public class Hospital {

	private String hospitalName;
	private String hospitalType;
	private String hqAddress;
	private String hqAddress1;
	private String hqCity;
	private String hqState;
	private String hqZipCode;
	private float hqLatitude;
	private float hqLongitude;
	private String hqCounty;
	private float hhi;
	private String hospitalOwnership;
	private String networkName;
	private String networkParentName;
	private String acoNameForExport;
	private String cinAffiliations;
	private int numberBeds;
	private String magnetDesignation;
	private String organTransplantNetwork;
	private String cancerAccreditation;
	private String traumaCenterLevel;
	private String pediatricTraumaCenterLevel;
	private String program340bId;
	private String soleCommunityHospital;
	private String academicMedicalCenter;
	private String councilTeachingMembership;
	private int dshPaymentMedicare;
	private float readmissionRatePenaltyFy2015;
	private float estReadmissionPenaltyFy2015;
	private float readmissionRatePenaltyFy2014;
	private float estReadmissionPenaltyFy2014;
	private float readmissionRatePenaltyFy2013;
	private float vbpPercentageFy2015;
	private float estVbpAdjustmentFy2015;
	private float vbpPercentageFy2014;
	private float estVbpAdjustmentFy2014;
	private float vbpPercentageFy2013;
	private float estVbpAdjustmentFy2013;
	private float meaningfulUsePayment;
	private String dateFiscalYearEnd;
	private float totPatientRevenue;
	private float inpatientRevenue;
	private float outpatientRevenue;
	private float netPatientRevenue;
	private float netOperatingMargin;
	private float totOperatingExpenses;
	private float itOperatingSpend;
	private float itCapitalSpend;
	private float netIncome;
	private float cashOnHand;
	private float numberEmployees;
	private float numberAffiliatedPhysicians;
	private float costPerDischargeCmiWageAdjustedState;
	private float cMI;
	private float averageLengthOfStay;
	private float avgDailyCensus;
	private float numberDischarges;
	private float totalErVisits;
	private float outpatientSurgeries;
	private float inpatientSurgeries;
	private float totSurgeries;
	private float pctDischargesMedicare;
	private float pctDischargesMedicaid;
	private float pctDischargesPrivateSelf;
	private float pctDaysMedicare;
	private float pctDaysMedicaid;
	private float pctDaysPrivateSelf;
	private float pctRevenuesMedicare;
	private float pctRevenuesMedicaid;
	private float pctRevenuesPrivate;
	private float totalFacilitySqFt;
	private float operatingRoomSqFt;
	private float inpatientSqFt;
	private float aveAgePlant;

	public Hospital() {
		super();
	}

	public Hospital(String hospitalName, String hospitalType, String hqAddress, String hqAddress1, String hqCity,
			String hqState, String hqZipCode, float hqLatitude, float hqLongitude, String hqCounty, float hhi,
			String hospitalOwnership, String networkName, String networkParentName, String acoNameForExport,
			String cinAffiliations, int numberBeds, String magnetDesignation, String organTransplantNetwork,
			String cancerAccreditation, String traumaCenterLevel, String pediatricTraumaCenterLevel,
			String program340bId, String soleCommunityHospital, String academicMedicalCenter,
			String councilTeachingMembership, int dshPaymentMedicare, float readmissionRatePenaltyFy2015,
			float estReadmissionPenaltyFy2015, float readmissionRatePenaltyFy2014, float estReadmissionPenaltyFy2014,
			float readmissionRatePenaltyFy2013, float vbpPercentageFy2015, float estVbpAdjustmentFy2015,
			float vbpPercentageFy2014, float estVbpAdjustmentFy2014, float vbpPercentageFy2013,
			float estVbpAdjustmentFy2013, float meaningfulUsePayment, String dateFiscalYearEnd, float totPatientRevenue,
			float inpatientRevenue, float outpatientRevenue, float netPatientRevenue, float netOperatingMargin,
			float totOperatingExpenses, float itOperatingSpend, float itCapitalSpend, float netIncome, float cashOnHand,
			float numberEmployees, float numberAffiliatedPhysicians, float costPerDischargeCmiWageAdjustedState,
			float cMI, float averageLengthOfStay, float avgDailyCensus, float numberDischarges, float totalErVisits,
			float outpatientSurgeries, float inpatientSurgeries, float totSurgeries, float pctDischargesMedicare,
			float pctDischargesMedicaid, float pctDischargesPrivateSelf, float pctDaysMedicare, float pctDaysMedicaid,
			float pctDaysPrivateSelf, float pctRevenuesMedicare, float pctRevenuesMedicaid, float pctRevenuesPrivate,
			float totalFacilitySqFt, float operatingRoomSqFt, float inpatientSqFt, float aveAgePlant) {
		super();
		this.hospitalName = hospitalName;
		this.hospitalType = hospitalType;
		this.hqAddress = hqAddress;
		this.hqAddress1 = hqAddress1;
		this.hqCity = hqCity;
		this.hqState = hqState;
		this.hqZipCode = hqZipCode;
		this.hqLatitude = hqLatitude;
		this.hqLongitude = hqLongitude;
		this.hqCounty = hqCounty;
		this.hhi = hhi;
		this.hospitalOwnership = hospitalOwnership;
		this.networkName = networkName;
		this.networkParentName = networkParentName;
		this.acoNameForExport = acoNameForExport;
		this.cinAffiliations = cinAffiliations;
		this.numberBeds = numberBeds;
		this.magnetDesignation = magnetDesignation;
		this.organTransplantNetwork = organTransplantNetwork;
		this.cancerAccreditation = cancerAccreditation;
		this.traumaCenterLevel = traumaCenterLevel;
		this.pediatricTraumaCenterLevel = pediatricTraumaCenterLevel;
		this.program340bId = program340bId;
		this.soleCommunityHospital = soleCommunityHospital;
		this.academicMedicalCenter = academicMedicalCenter;
		this.councilTeachingMembership = councilTeachingMembership;
		this.dshPaymentMedicare = dshPaymentMedicare;
		this.readmissionRatePenaltyFy2015 = readmissionRatePenaltyFy2015;
		this.estReadmissionPenaltyFy2015 = estReadmissionPenaltyFy2015;
		this.readmissionRatePenaltyFy2014 = readmissionRatePenaltyFy2014;
		this.estReadmissionPenaltyFy2014 = estReadmissionPenaltyFy2014;
		this.readmissionRatePenaltyFy2013 = readmissionRatePenaltyFy2013;
		this.vbpPercentageFy2015 = vbpPercentageFy2015;
		this.estVbpAdjustmentFy2015 = estVbpAdjustmentFy2015;
		this.vbpPercentageFy2014 = vbpPercentageFy2014;
		this.estVbpAdjustmentFy2014 = estVbpAdjustmentFy2014;
		this.vbpPercentageFy2013 = vbpPercentageFy2013;
		this.estVbpAdjustmentFy2013 = estVbpAdjustmentFy2013;
		this.meaningfulUsePayment = meaningfulUsePayment;
		this.dateFiscalYearEnd = dateFiscalYearEnd;
		this.totPatientRevenue = totPatientRevenue;
		this.inpatientRevenue = inpatientRevenue;
		this.outpatientRevenue = outpatientRevenue;
		this.netPatientRevenue = netPatientRevenue;
		this.netOperatingMargin = netOperatingMargin;
		this.totOperatingExpenses = totOperatingExpenses;
		this.itOperatingSpend = itOperatingSpend;
		this.itCapitalSpend = itCapitalSpend;
		this.netIncome = netIncome;
		this.cashOnHand = cashOnHand;
		this.numberEmployees = numberEmployees;
		this.numberAffiliatedPhysicians = numberAffiliatedPhysicians;
		this.costPerDischargeCmiWageAdjustedState = costPerDischargeCmiWageAdjustedState;
		this.cMI = cMI;
		this.averageLengthOfStay = averageLengthOfStay;
		this.avgDailyCensus = avgDailyCensus;
		this.numberDischarges = numberDischarges;
		this.totalErVisits = totalErVisits;
		this.outpatientSurgeries = outpatientSurgeries;
		this.inpatientSurgeries = inpatientSurgeries;
		this.totSurgeries = totSurgeries;
		this.pctDischargesMedicare = pctDischargesMedicare;
		this.pctDischargesMedicaid = pctDischargesMedicaid;
		this.pctDischargesPrivateSelf = pctDischargesPrivateSelf;
		this.pctDaysMedicare = pctDaysMedicare;
		this.pctDaysMedicaid = pctDaysMedicaid;
		this.pctDaysPrivateSelf = pctDaysPrivateSelf;
		this.pctRevenuesMedicare = pctRevenuesMedicare;
		this.pctRevenuesMedicaid = pctRevenuesMedicaid;
		this.pctRevenuesPrivate = pctRevenuesPrivate;
		this.totalFacilitySqFt = totalFacilitySqFt;
		this.operatingRoomSqFt = operatingRoomSqFt;
		this.inpatientSqFt = inpatientSqFt;
		this.aveAgePlant = aveAgePlant;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public String getHospitalType() {
		return hospitalType;
	}

	public void setHospitalType(String hospitalType) {
		this.hospitalType = hospitalType;
	}

	public String getHqAddress() {
		return hqAddress;
	}

	public void setHqAddress(String hqAddress) {
		this.hqAddress = hqAddress;
	}

	public String getHqAddress1() {
		return hqAddress1;
	}

	public void setHqAddress1(String hqAddress1) {
		this.hqAddress1 = hqAddress1;
	}

	public String getHqCity() {
		return hqCity;
	}

	public void setHqCity(String hqCity) {
		this.hqCity = hqCity;
	}

	public String getHqState() {
		return hqState;
	}

	public void setHqState(String hqState) {
		this.hqState = hqState;
	}

	public String getHqZipCode() {
		return hqZipCode;
	}

	public void setHqZipCode(String hqZipCode) {
		this.hqZipCode = hqZipCode;
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

	public String getHqCounty() {
		return hqCounty;
	}

	public void setHqCounty(String hqCounty) {
		this.hqCounty = hqCounty;
	}

	public float getHhi() {
		return hhi;
	}

	public void setHhi(float hhi) {
		this.hhi = hhi;
	}

	public String getHospitalOwnership() {
		return hospitalOwnership;
	}

	public void setHospitalOwnership(String hospitalOwnership) {
		this.hospitalOwnership = hospitalOwnership;
	}

	public String getNetworkName() {
		return networkName;
	}

	public void setNetworkName(String networkName) {
		this.networkName = networkName;
	}

	public String getNetworkParentName() {
		return networkParentName;
	}

	public void setNetworkParentName(String networkParentName) {
		this.networkParentName = networkParentName;
	}

	public String getAcoNameForExport() {
		return acoNameForExport;
	}

	public void setAcoNameForExport(String acoNameForExport) {
		this.acoNameForExport = acoNameForExport;
	}

	public String getCinAffiliations() {
		return cinAffiliations;
	}

	public void setCinAffiliations(String cinAffiliations) {
		this.cinAffiliations = cinAffiliations;
	}

	public int getNumberBeds() {
		return numberBeds;
	}

	public void setNumberBeds(int numberBeds) {
		this.numberBeds = numberBeds;
	}

	public String getMagnetDesignation() {
		return magnetDesignation;
	}

	public void setMagnetDesignation(String magnetDesignation) {
		this.magnetDesignation = magnetDesignation;
	}

	public String getOrganTransplantNetwork() {
		return organTransplantNetwork;
	}

	public void setOrganTransplantNetwork(String organTransplantNetwork) {
		this.organTransplantNetwork = organTransplantNetwork;
	}

	public String getCancerAccreditation() {
		return cancerAccreditation;
	}

	public void setCancerAccreditation(String cancerAccreditation) {
		this.cancerAccreditation = cancerAccreditation;
	}

	public String getTraumaCenterLevel() {
		return traumaCenterLevel;
	}

	public void setTraumaCenterLevel(String traumaCenterLevel) {
		this.traumaCenterLevel = traumaCenterLevel;
	}

	public String getPediatricTraumaCenterLevel() {
		return pediatricTraumaCenterLevel;
	}

	public void setPediatricTraumaCenterLevel(String pediatricTraumaCenterLevel) {
		this.pediatricTraumaCenterLevel = pediatricTraumaCenterLevel;
	}

	public String getProgram340bId() {
		return program340bId;
	}

	public void setProgram340bId(String program340bId) {
		this.program340bId = program340bId;
	}

	public String getSoleCommunityHospital() {
		return soleCommunityHospital;
	}

	public void setSoleCommunityHospital(String soleCommunityHospital) {
		this.soleCommunityHospital = soleCommunityHospital;
	}

	public String getAcademicMedicalCenter() {
		return academicMedicalCenter;
	}

	public void setAcademicMedicalCenter(String academicMedicalCenter) {
		this.academicMedicalCenter = academicMedicalCenter;
	}

	public String getCouncilTeachingMembership() {
		return councilTeachingMembership;
	}

	public void setCouncilTeachingMembership(String councilTeachingMembership) {
		this.councilTeachingMembership = councilTeachingMembership;
	}

	public int getDshPaymentMedicare() {
		return dshPaymentMedicare;
	}

	public void setDshPaymentMedicare(int dshPaymentMedicare) {
		this.dshPaymentMedicare = dshPaymentMedicare;
	}

	public float getReadmissionRatePenaltyFy2015() {
		return readmissionRatePenaltyFy2015;
	}

	public void setReadmissionRatePenaltyFy2015(float readmissionRatePenaltyFy2015) {
		this.readmissionRatePenaltyFy2015 = readmissionRatePenaltyFy2015;
	}

	public float getEstReadmissionPenaltyFy2015() {
		return estReadmissionPenaltyFy2015;
	}

	public void setEstReadmissionPenaltyFy2015(float estReadmissionPenaltyFy2015) {
		this.estReadmissionPenaltyFy2015 = estReadmissionPenaltyFy2015;
	}

	public float getReadmissionRatePenaltyFy2014() {
		return readmissionRatePenaltyFy2014;
	}

	public void setReadmissionRatePenaltyFy2014(float readmissionRatePenaltyFy2014) {
		this.readmissionRatePenaltyFy2014 = readmissionRatePenaltyFy2014;
	}

	public float getEstReadmissionPenaltyFy2014() {
		return estReadmissionPenaltyFy2014;
	}

	public void setEstReadmissionPenaltyFy2014(float estReadmissionPenaltyFy2014) {
		this.estReadmissionPenaltyFy2014 = estReadmissionPenaltyFy2014;
	}

	public float getReadmissionRatePenaltyFy2013() {
		return readmissionRatePenaltyFy2013;
	}

	public void setReadmissionRatePenaltyFy2013(float readmissionRatePenaltyFy2013) {
		this.readmissionRatePenaltyFy2013 = readmissionRatePenaltyFy2013;
	}

	public float getVbpPercentageFy2015() {
		return vbpPercentageFy2015;
	}

	public void setVbpPercentageFy2015(float vbpPercentageFy2015) {
		this.vbpPercentageFy2015 = vbpPercentageFy2015;
	}

	public float getEstVbpAdjustmentFy2015() {
		return estVbpAdjustmentFy2015;
	}

	public void setEstVbpAdjustmentFy2015(float estVbpAdjustmentFy2015) {
		this.estVbpAdjustmentFy2015 = estVbpAdjustmentFy2015;
	}

	public float getVbpPercentageFy2014() {
		return vbpPercentageFy2014;
	}

	public void setVbpPercentageFy2014(float vbpPercentageFy2014) {
		this.vbpPercentageFy2014 = vbpPercentageFy2014;
	}

	public float getEstVbpAdjustmentFy2014() {
		return estVbpAdjustmentFy2014;
	}

	public void setEstVbpAdjustmentFy2014(float estVbpAdjustmentFy2014) {
		this.estVbpAdjustmentFy2014 = estVbpAdjustmentFy2014;
	}

	public float getVbpPercentageFy2013() {
		return vbpPercentageFy2013;
	}

	public void setVbpPercentageFy2013(float vbpPercentageFy2013) {
		this.vbpPercentageFy2013 = vbpPercentageFy2013;
	}

	public float getEstVbpAdjustmentFy2013() {
		return estVbpAdjustmentFy2013;
	}

	public void setEstVbpAdjustmentFy2013(float estVbpAdjustmentFy2013) {
		this.estVbpAdjustmentFy2013 = estVbpAdjustmentFy2013;
	}

	public float getMeaningfulUsePayment() {
		return meaningfulUsePayment;
	}

	public void setMeaningfulUsePayment(float meaningfulUsePayment) {
		this.meaningfulUsePayment = meaningfulUsePayment;
	}

	public String getDateFiscalYearEnd() {
		return dateFiscalYearEnd;
	}

	public void setDateFiscalYearEnd(String dateFiscalYearEnd) {
		this.dateFiscalYearEnd = dateFiscalYearEnd;
	}

	public float getTotPatientRevenue() {
		return totPatientRevenue;
	}

	public void setTotPatientRevenue(float totPatientRevenue) {
		this.totPatientRevenue = totPatientRevenue;
	}

	public float getInpatientRevenue() {
		return inpatientRevenue;
	}

	public void setInpatientRevenue(float inpatientRevenue) {
		this.inpatientRevenue = inpatientRevenue;
	}

	public float getOutpatientRevenue() {
		return outpatientRevenue;
	}

	public void setOutpatientRevenue(float outpatientRevenue) {
		this.outpatientRevenue = outpatientRevenue;
	}

	public float getNetPatientRevenue() {
		return netPatientRevenue;
	}

	public void setNetPatientRevenue(float netPatientRevenue) {
		this.netPatientRevenue = netPatientRevenue;
	}

	public float getNetOperatingMargin() {
		return netOperatingMargin;
	}

	public void setNetOperatingMargin(float netOperatingMargin) {
		this.netOperatingMargin = netOperatingMargin;
	}

	public float getTotOperatingExpenses() {
		return totOperatingExpenses;
	}

	public void setTotOperatingExpenses(float totOperatingExpenses) {
		this.totOperatingExpenses = totOperatingExpenses;
	}

	public float getItOperatingSpend() {
		return itOperatingSpend;
	}

	public void setItOperatingSpend(float itOperatingSpend) {
		this.itOperatingSpend = itOperatingSpend;
	}

	public float getItCapitalSpend() {
		return itCapitalSpend;
	}

	public void setItCapitalSpend(float itCapitalSpend) {
		this.itCapitalSpend = itCapitalSpend;
	}

	public float getNetIncome() {
		return netIncome;
	}

	public void setNetIncome(float netIncome) {
		this.netIncome = netIncome;
	}

	public float getCashOnHand() {
		return cashOnHand;
	}

	public void setCashOnHand(float cashOnHand) {
		this.cashOnHand = cashOnHand;
	}

	public float getNumberEmployees() {
		return numberEmployees;
	}

	public void setNumberEmployees(float numberEmployees) {
		this.numberEmployees = numberEmployees;
	}

	public float getNumberAffiliatedPhysicians() {
		return numberAffiliatedPhysicians;
	}

	public void setNumberAffiliatedPhysicians(float numberAffiliatedPhysicians) {
		this.numberAffiliatedPhysicians = numberAffiliatedPhysicians;
	}

	public float getCostPerDischargeCmiWageAdjustedState() {
		return costPerDischargeCmiWageAdjustedState;
	}

	public void setCostPerDischargeCmiWageAdjustedState(float costPerDischargeCmiWageAdjustedState) {
		this.costPerDischargeCmiWageAdjustedState = costPerDischargeCmiWageAdjustedState;
	}

	public float getcMI() {
		return cMI;
	}

	public void setcMI(float cMI) {
		this.cMI = cMI;
	}

	public float getAverageLengthOfStay() {
		return averageLengthOfStay;
	}

	public void setAverageLengthOfStay(float averageLengthOfStay) {
		this.averageLengthOfStay = averageLengthOfStay;
	}

	public float getAvgDailyCensus() {
		return avgDailyCensus;
	}

	public void setAvgDailyCensus(float avgDailyCensus) {
		this.avgDailyCensus = avgDailyCensus;
	}

	public float getNumberDischarges() {
		return numberDischarges;
	}

	public void setNumberDischarges(float numberDischarges) {
		this.numberDischarges = numberDischarges;
	}

	public float getTotalErVisits() {
		return totalErVisits;
	}

	public void setTotalErVisits(float totalErVisits) {
		this.totalErVisits = totalErVisits;
	}

	public float getOutpatientSurgeries() {
		return outpatientSurgeries;
	}

	public void setOutpatientSurgeries(float outpatientSurgeries) {
		this.outpatientSurgeries = outpatientSurgeries;
	}

	public float getInpatientSurgeries() {
		return inpatientSurgeries;
	}

	public void setInpatientSurgeries(float inpatientSurgeries) {
		this.inpatientSurgeries = inpatientSurgeries;
	}

	public float getTotSurgeries() {
		return totSurgeries;
	}

	public void setTotSurgeries(float totSurgeries) {
		this.totSurgeries = totSurgeries;
	}

	public float getPctDischargesMedicare() {
		return pctDischargesMedicare;
	}

	public void setPctDischargesMedicare(float pctDischargesMedicare) {
		this.pctDischargesMedicare = pctDischargesMedicare;
	}

	public float getPctDischargesMedicaid() {
		return pctDischargesMedicaid;
	}

	public void setPctDischargesMedicaid(float pctDischargesMedicaid) {
		this.pctDischargesMedicaid = pctDischargesMedicaid;
	}

	public float getPctDischargesPrivateSelf() {
		return pctDischargesPrivateSelf;
	}

	public void setPctDischargesPrivateSelf(float pctDischargesPrivateSelf) {
		this.pctDischargesPrivateSelf = pctDischargesPrivateSelf;
	}

	public float getPctDaysMedicare() {
		return pctDaysMedicare;
	}

	public void setPctDaysMedicare(float pctDaysMedicare) {
		this.pctDaysMedicare = pctDaysMedicare;
	}

	public float getPctDaysMedicaid() {
		return pctDaysMedicaid;
	}

	public void setPctDaysMedicaid(float pctDaysMedicaid) {
		this.pctDaysMedicaid = pctDaysMedicaid;
	}

	public float getPctDaysPrivateSelf() {
		return pctDaysPrivateSelf;
	}

	public void setPctDaysPrivateSelf(float pctDaysPrivateSelf) {
		this.pctDaysPrivateSelf = pctDaysPrivateSelf;
	}

	public float getPctRevenuesMedicare() {
		return pctRevenuesMedicare;
	}

	public void setPctRevenuesMedicare(float pctRevenuesMedicare) {
		this.pctRevenuesMedicare = pctRevenuesMedicare;
	}

	public float getPctRevenuesMedicaid() {
		return pctRevenuesMedicaid;
	}

	public void setPctRevenuesMedicaid(float pctRevenuesMedicaid) {
		this.pctRevenuesMedicaid = pctRevenuesMedicaid;
	}

	public float getPctRevenuesPrivate() {
		return pctRevenuesPrivate;
	}

	public void setPctRevenuesPrivate(float pctRevenuesPrivate) {
		this.pctRevenuesPrivate = pctRevenuesPrivate;
	}

	public float getTotalFacilitySqFt() {
		return totalFacilitySqFt;
	}

	public void setTotalFacilitySqFt(float totalFacilitySqFt) {
		this.totalFacilitySqFt = totalFacilitySqFt;
	}

	public float getOperatingRoomSqFt() {
		return operatingRoomSqFt;
	}

	public void setOperatingRoomSqFt(float operatingRoomSqFt) {
		this.operatingRoomSqFt = operatingRoomSqFt;
	}

	public float getInpatientSqFt() {
		return inpatientSqFt;
	}

	public void setInpatientSqFt(float inpatientSqFt) {
		this.inpatientSqFt = inpatientSqFt;
	}

	public float getAveAgePlant() {
		return aveAgePlant;
	}

	public void setAveAgePlant(float aveAgePlant) {
		this.aveAgePlant = aveAgePlant;
	}

}
