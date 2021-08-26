package com.charte.CommRE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.charte.CommRE.model.Property;

@Repository
public interface PropertyRepository extends PagingAndSortingRepository<Property, Long> {}
