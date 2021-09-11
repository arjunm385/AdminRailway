package com.train.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.train.model.RouteDetails;

@Repository
public interface RouteDao extends JpaRepository<RouteDetails, Integer> {

}
