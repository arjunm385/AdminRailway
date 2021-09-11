package com.train.model;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Entity
@Data
public class RouteDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int routeid;
	private String startpoint;
	private String endpoint;
	private Date date;
	private Time arrival;
	private Time depart;
	private int distance;
	private int station;
	@ManyToOne
	private TrainDetails td;
	
}
