package com.train.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.train.model.RouteDetails;
import com.train.model.TrainDetails;

@Repository
public interface RouteDao extends JpaRepository<RouteDetails, Integer> {
    
	@Query(value ="select td_tid,arrival,depart,date from route_details where startpoint=:startpoint and td_tid in (select td_tid from route_details where startpoint=:lastpoint) ",nativeQuery=true)
	public List<TrainDetails>getTrain(@Param("startpoint") String startpoint,@Param("lastpoint") String lastpoint);
	
}

