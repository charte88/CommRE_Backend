package com.charte.CommRE.controller;

// Renders a Spring MVC configuration HTTP 404
class PropertyNotFoundException extends RuntimeException {
    PropertyNotFoundException(Long id) {
        super("Could not find property " + id);
    }
}
