package com.charte.CommRE.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class PropertyNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(PropertyNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String propertyNotFoundHandler(PropertyNotFoundException ex) {
        return ex.getMessage();
    }
}
