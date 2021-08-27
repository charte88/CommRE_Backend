package com.charte.CommRE.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.charte.CommRE.model.Property;
import com.charte.CommRE.repository.PropertyRepository;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

// @RestController indicates that the data returned by each method will be written straight into the response body instead of rendering a template
// @RequestMapping flags the index() method to support the / route

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    // An PropertyRepository is injected by constructor into the controller
    PropertyController(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/properties")
    public List<Property> getAllProperties() {
        return (List<Property>) propertyRepository.findAll();
    }
    // end::get-aggregate-root[]

    @PostMapping("/properties")
    public Property newProperty(@RequestBody Property newProperty) {
        return propertyRepository.save(newProperty);
    }

    // Single property

    @GetMapping("/properties/{id}")
    public Property getPropertyById(@PathVariable Long id) {

        return propertyRepository.findById(id)
                // PropertyNotFoundException is an exception used to indicate when an property is looked up but not found
                .orElseThrow(() -> new PropertyNotFoundException(id));
    }

    @PutMapping("/properties/{id}")
    public Property replaceProperty(@RequestBody Property newProperty, @PathVariable Long id) {
        return propertyRepository.findById(id)
                .map(property -> {
                    property.setName(newProperty.getName());
                    property.setState(newProperty.getState());
                    property.setCity(newProperty.getCity());
                    property.setAddress1(newProperty.getAddress1());
                    property.setAddress2(newProperty.getAddress2());
                    property.setListingName(newProperty.getListingName());
                    property.setListingDate(newProperty.getListingDate());
                    property.setActive(newProperty.isActive());
                    property.setPrice(newProperty.getPrice());
                    return propertyRepository.save(property);
                })
                .orElseGet(() -> {
                    newProperty.setId(id);
                    return propertyRepository.save(newProperty);
                });
    }

    @DeleteMapping("/properties/{id}")
    void deleteProperty(@PathVariable Long id) {
        propertyRepository.deleteById(id);
    }
}

