package com.charte.CommRE.controller;

class PropertyNotFoundException extends RuntimeException {
    PropertyNotFoundException(Long id) {
        super("Could not find property " + id);
    }
}
