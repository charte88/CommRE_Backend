package com.charte.CommRE.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class PropertyNotFoundAdvice {

    // @ResponseBody signals that this advice is rendered straight into the response body
    // @ExceptionHandler configures the advice to only respond if an PropertyNotFoundException is thrown
    // @ResponseStatus says to issue an HttpStatus.NOT_FOUND, i.e. an HTTP 404
    // The body of the advice generates the content. In this case, it gives the message of the exception
    @ResponseBody
    @ExceptionHandler(PropertyNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String propertyNotFoundHandler(PropertyNotFoundException ex) {
        return ex.getMessage();
    }
}
