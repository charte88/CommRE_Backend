package com.charte.CommRE.model;

import com.fasterxml.jackson.databind.annotation.JsonAppend;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String state;
    private String city;
    private String address1;
    private String address2;
    private String listingName;
    private Integer listingDate;
    private boolean isActive;
    private Integer price;

    public Property() {}

    public Property(String name, String state, String city,
                    String address1, String address2, String listingName,
                    Integer listingDate, boolean isActive, Integer price) {

        this.name = name;
        this.state = state;
        this.city = city;
        this.address1 = address1;
        this.address2 = address2;
        this.listingName = listingName;
        this.listingDate = listingDate;
        this.isActive = isActive;
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof  Property)) return false;
        Property property = (Property) o;
        return Objects.equals(this.id, property.id) && Objects.equals(this.name, property.name) &&
                Objects.equals(this.state, property.state) && Objects.equals(this.city, property.city) &&
                Objects.equals(this.address1, property.address1) && Objects.equals(this.address2, property.address2) &&
                Objects.equals(this.listingName, property.listingName) && Objects.equals(this.listingDate, property.listingDate) &&
                Objects.equals(this.isActive, property.isActive) && Objects.equals(this.price, property.price);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.state, this.city,
                this.address1, this.address2, this.listingName, this.listingDate,
                this.isActive, this.price);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getListingName() {
        return listingName;
    }

    public void setListingName(String listingName) {
        this.listingName = listingName;
    }

    public Integer getListingDate() {
        return listingDate;
    }

    public void setListingDate(Integer listingDate) {
        this.listingDate = listingDate;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}

