package com.charte.CommRE;

import com.charte.CommRE.model.Property;
import com.charte.CommRE.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Spring Boot will run ALL CommandLineRunner beans once the application context is loaded
@SpringBootApplication
public class CommReApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CommReApplication.class, args);
	}

	@Autowired
	private PropertyRepository propertyRepository;

	@Override
	public void run(String... args) throws Exception {
		// Preloaded database entrys to test integrity
		this.propertyRepository.save(new Property("Chrysler Building", "NY", "New York", "405 Lexington Ave", null, "RFH Holding", "4/15/2006", true, 71566330));
		this.propertyRepository.save(new Property("Chrysler Building", "NY", "New York", "405 Lexington Ave", null, "Abu Dhabi Investment", "4/15/2012", false, 97456342));
		this.propertyRepository.save(new Property("Walt Disney Concert Hall", "CA", "Los Angeles", "135 North Grand Avenue", null, "Walt Disney", "6/5/2000", false, 1244907));
	}
}
