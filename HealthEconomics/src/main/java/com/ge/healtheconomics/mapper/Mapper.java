package com.ge.healtheconomics.mapper;


import org.apache.http.HttpEntity;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
//one time activity to read GeoJSON  
@Service
public class Mapper {
	// implements RowMapper<>
	public String getzipcode(HttpEntity responseEntity) throws Exception {
		String zipCode = null;
		String responseString = new String();

		if (responseEntity != null) {
			responseString = EntityUtils.toString(responseEntity);
			JSONObject result = new JSONObject(responseString);

			// results
			JSONArray json1 = result.getJSONArray("results");
			System.out.println(json1.toString());

			// First result from google is set to json3
			JSONObject json2 = (JSONObject) json1.get(0);
			//String formatted_address = json2.getString("formatted_address");
			// System.out.println("formatted_address " + formatted_address);

			// JSONObject json3 = json1.getJSONObject(0);

			// address_components
			JSONArray json3 = json2.getJSONArray("address_components");

			// postalcode
			// eighth result from google is set to json5 as it is postalcode
			for (int i = 0; i < json3.length(); i++) {

				JSONObject json4 = (JSONObject) json3.get(i);
				System.out.println("types :" + json4.toString());
				System.out.println("long_name " + json4.getString("long_name"));

				JSONArray json5 = json4.getJSONArray("types");
				// System.out.println("t3 " + tokenList3.toString());

				if (json5.get(0).equals("postal_code")) {
					System.out.println();
					System.out.println("POSTAL CODE " + json4.getString("long_name"));
					zipCode = json4.getString("long_name");
				} else {
					throw new Exception("Unable to fetch Zipcode from latitude and longitude");
				}

			}
		}

		return zipCode;
		// TODO Auto-generated method stub

	}

}
