package com.charte.CommRE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.charte.CommRE.model.Property;

// Spring Data’s repository solution makes it possible to sidestep data store specifics and instead solve a majority of problems using domain-specific terminology
@Repository
public interface PropertyRepository extends PagingAndSortingRepository<Property, Long> {}
