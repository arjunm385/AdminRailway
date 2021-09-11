package com.train.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import com.train.model.TrainDetails;

public interface ServiceAdmin {
	public TrainDetails createTrain(TrainDetails traindetails);

	public List<TrainDetails> getAllTrains();
	
	public List<TrainDetails> getTrainByName(String train_name);
	
	public Optional<TrainDetails> getTrainById(int id);
	
	public List<TrainDetails> getTrainByDate(Date date);

	public List<TrainDetails> getAllTrainsByRoute(String startpoint, String lastpoint);
}
