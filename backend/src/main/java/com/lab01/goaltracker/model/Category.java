package com.lab01.goaltracker.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


import java.time.LocalDateTime;

@Entity
@Table(name = "category")

public class Category {

    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "created_datetime")
    private LocalDateTime createdDatetime;

    @Column(name = "created_by", nullable = false)
    private Integer createdBy;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreatedDatetime() {
        return createdDatetime;
    }

    public void setCreatedDatetime(LocalDateTime createdDatetime) {
        this.createdDatetime = createdDatetime;
    }

    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }
}
