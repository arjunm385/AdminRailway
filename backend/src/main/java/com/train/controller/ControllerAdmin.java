package com.train.controller;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.train.model.Booking;
import com.train.model.RouteDetails;
import com.train.model.TrainDetails;
import com.train.service.ServiceAdmin;

@RestController
@CrossOrigin
@RequestMapping("/train")
public class ControllerAdmin {

	@Autowired
	private ServiceAdmin serviceAdmin;

/////////////////Train////////////////////////////////

	@PostMapping("/add")
	public TrainDetails createCustomer(@RequestBody TrainDetails traindetails) {
		TrainDetails cs = this.serviceAdmin.createTrain(traindetails);
		return cs;
	}

	@GetMapping("/all")
	public List<TrainDetails> getAllTrains() {
		return this.serviceAdmin.getAllTrains();
	}

	@GetMapping("/trainbyid/{id}")
	public Optional<TrainDetails> getTrainById(@PathVariable("id") int id) {
		return this.serviceAdmin.getTrainById(id);
	}

	@GetMapping("/trainbyname/{train_name}")
	public List<TrainDetails> getTrainByName(@PathVariable("train_name") String train_name) {
		return this.serviceAdmin.getTrainByName(train_name);
	}

	@GetMapping("/trainbydate/{date}")
	public List<TrainDetails> getTrainByDate(@PathVariable Date date) {
		return this.serviceAdmin.getTrainByDate(date);
	}
	

/////////////////Route////////////////////////////////
	@GetMapping("/route/{startpoint}/{lastpoint}")
	public List<RouteDetails> getAllTrainsByroute(@PathVariable("startpoint") String startpoint,
			@PathVariable("lastpoint") String lastpoint) {
		return this.serviceAdmin.getAllTrainsByRoute(startpoint, lastpoint);
	}

	@GetMapping("/route/all/{start}/{end}/{date}")
	  public List<RouteDetails> getAllTrainsByroutedate(@PathVariable("start") String start,
	      @PathVariable("end") String end, @PathVariable("date") Date date) throws Exception{
		return this.serviceAdmin.getAllTrainsByRouteDate(start, end, date);
	    }
	@PostMapping("/addroute")
	  public RouteDetails createRoute(@RequestBody RouteDetails routedetails) throws ParseException {
//		routedetails.setArrival((Date)routedetails.getArrival1());
//		DateFormat formatter = new SimpleDateFormat("hh:mm:ss");
//		routedetails.setArrival((Date)formatter.parse(routedetails.getArrival1()));
//		routedetails.setArrival(java.sql.Time.valueOf(routedetails.getArrival1()));
//		routedetails.setArrival(java.sql.Time.valueOf("10:30:54"));
		System.out.println(routedetails.getArrival1());
	    return this.serviceAdmin.createRoute(routedetails);
	  }
	
	@GetMapping("/route/get/{id}")
	  public List<RouteDetails> getByroute(
	      @PathVariable("id") int id) {
	    return this.serviceAdmin.getByRoute(id);
	    
	  }
	
	///////////////////booking/////////////////
	@PostMapping("/book")
	public Booking book(@RequestBody Booking booking) {		
		return this.serviceAdmin.book(booking);
	}
}
