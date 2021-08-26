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


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    PropertyController(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }


    @GetMapping("/properties")
    public List<Property> getAllProperties() {
        return (List<Property>) propertyRepository.findAll();
    }

    @PostMapping("/properties")
    public Property newProperty(@RequestBody Property newProperty) {
        return propertyRepository.save(newProperty);
    }

    // Single item

    @GetMapping("/properties/{id}")
    public Property getPropertyById(@PathVariable Long id) {

        return propertyRepository.findById(id)
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

