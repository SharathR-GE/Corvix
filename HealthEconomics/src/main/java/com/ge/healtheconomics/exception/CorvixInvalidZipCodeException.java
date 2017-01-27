package com.ge.healtheconomics.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Invalid Zipcode") // 500
public class CorvixInvalidZipCodeException extends Exception {

}
