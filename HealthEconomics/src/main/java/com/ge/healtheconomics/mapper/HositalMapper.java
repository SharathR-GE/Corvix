package com.ge.healtheconomics.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ge.healtheconomics.pojo.Hospital;

public class HositalMapper implements RowMapper<Hospital> {

	@Override
	public Hospital mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		Hospital hospitalmapper = new Hospital();
		
		hospitalmapper.setAcademicMedicalCenter(rs.getString(25));
		hospitalmapper.setAcoNameForExport(rs.getString(15));
		hospitalmapper.setAveAgePlant(rs.getFloat(74));
		hospitalmapper.setAverageLengthOfStay(rs.getFloat(55));
		hospitalmapper.setAvgDailyCensus(rs.getFloat(56));
		hospitalmapper.setCancerAccreditation(rs.getString(20));
		hospitalmapper.setCashOnHand(rs.getFloat(50));
		hospitalmapper.setCinAffiliations(rs.getString(16));
		hospitalmapper.setcMI(rs.getFloat(54));
		hospitalmapper.setCostPerDischargeCmiWageAdjustedState(rs.getFloat(53));
		hospitalmapper.setCouncilTeachingMembership(rs.getString(26));
		hospitalmapper.setDateFiscalYearEnd(rs.getString(40));
		hospitalmapper.setDshPaymentMedicare(rs.getInt(27));
		hospitalmapper.setEstReadmissionPenaltyFy2014(rs.getFloat(31));
		hospitalmapper.setEstReadmissionPenaltyFy2015(rs.getFloat(29));
		hospitalmapper.setEstVbpAdjustmentFy2013(rs.getFloat(38));
		hospitalmapper.setEstVbpAdjustmentFy2014(rs.getFloat(36));
		hospitalmapper.setEstVbpAdjustmentFy2015(rs.getFloat(34));
		hospitalmapper.setHhi(rs.getFloat(11));
		hospitalmapper.setHospitalName(rs.getString(1));
		hospitalmapper.setHospitalOwnership(rs.getString(12));
		hospitalmapper.setHospitalType(rs.getString(2));
		hospitalmapper.setHqAddress(rs.getString(3));
		hospitalmapper.setHqAddress1(rs.getString(4));
		hospitalmapper.setHqCity(rs.getString(5));
		hospitalmapper.setHqCounty(rs.getString(10));
		hospitalmapper.setHqLatitude(rs.getFloat(8));
		hospitalmapper.setHqLongitude(rs.getFloat(9));
		hospitalmapper.setHqState(rs.getString(6));
		hospitalmapper.setHqZipCode(rs.getString(7));
		hospitalmapper.setInpatientRevenue(rs.getFloat(42));
		hospitalmapper.setInpatientSqFt(rs.getFloat(73));
		hospitalmapper.setInpatientSurgeries(rs.getFloat(60));
		hospitalmapper.setItCapitalSpend(rs.getFloat(48));
		hospitalmapper.setItOperatingSpend(rs.getFloat(47));
		hospitalmapper.setMagnetDesignation(rs.getString(18));
		hospitalmapper.setMeaningfulUsePayment(rs.getFloat(39));
		hospitalmapper.setNetIncome(rs.getFloat(49));
		hospitalmapper.setNetOperatingMargin(rs.getFloat(45));
		hospitalmapper.setNetPatientRevenue(rs.getFloat(44));
		hospitalmapper.setNetworkName(rs.getString(13));
		hospitalmapper.setNetworkParentName(rs.getString(14));
		hospitalmapper.setNumberAffiliatedPhysicians(rs.getFloat(52));
		hospitalmapper.setNumberBeds(rs.getInt(17));
		hospitalmapper.setNumberDischarges(rs.getFloat(57));
		hospitalmapper.setNumberEmployees(rs.getFloat(51));
		hospitalmapper.setOperatingRoomSqFt(rs.getFloat(72));
		hospitalmapper.setOrganTransplantNetwork(rs.getString(19));
		hospitalmapper.setOutpatientRevenue(rs.getFloat(43));
		hospitalmapper.setOutpatientSurgeries(rs.getFloat(59));
		hospitalmapper.setPctDaysMedicaid(rs.getFloat(66));
		hospitalmapper.setPctDaysMedicare(rs.getFloat(65));
		hospitalmapper.setPctDaysPrivateSelf(rs.getFloat(67));
		hospitalmapper.setPctDischargesMedicaid(rs.getFloat(54));
		hospitalmapper.setPctDischargesMedicare(rs.getFloat(55));
		hospitalmapper.setPctDischargesPrivateSelf(rs.getFloat(64));
		hospitalmapper.setPctRevenuesMedicaid(rs.getFloat(69));
		hospitalmapper.setPctRevenuesMedicare(rs.getFloat(68));
		hospitalmapper.setPctRevenuesPrivate(rs.getFloat(70));
		hospitalmapper.setPediatricTraumaCenterLevel(rs.getString(22));
		hospitalmapper.setProgram340bId(rs.getString(23));
		hospitalmapper.setReadmissionRatePenaltyFy2013(rs.getFloat(32));
		hospitalmapper.setReadmissionRatePenaltyFy2014(rs.getFloat(30));
		hospitalmapper.setReadmissionRatePenaltyFy2015(rs.getFloat(28));
		hospitalmapper.setSoleCommunityHospital(rs.getString(24));
		hospitalmapper.setTotalErVisits(rs.getFloat(58));
		hospitalmapper.setTotalFacilitySqFt(rs.getFloat(71));
		hospitalmapper.setTotOperatingExpenses(rs.getFloat(46));
		hospitalmapper.setTotPatientRevenue(rs.getFloat(41));
		hospitalmapper.setTotSurgeries(rs.getFloat(61));
		hospitalmapper.setTraumaCenterLevel(rs.getString(21));
		hospitalmapper.setVbpPercentageFy2013(rs.getFloat(37));
		hospitalmapper.setVbpPercentageFy2014(rs.getFloat(35));
		hospitalmapper.setVbpPercentageFy2015(rs.getFloat(33));

		return hospitalmapper;
	}

}
