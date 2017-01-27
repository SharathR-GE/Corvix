package com.ge.healtheconomics.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "No data found") // 500
public class CorvixEmptyResultDataAccessException extends Exception {

}
