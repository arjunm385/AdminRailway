package com.train.service.impl;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.train.model.TrainDetails;
import com.train.repository.AdminDao;
import com.train.service.ServiceAdmin;

@Service
public class ServiceAdminImpl implements ServiceAdmin {
    @Autowired
    private AdminDao admindao;
	@Override
	public TrainDetails createTrain(TrainDetails traindetails) {
		return admindao.save(traindetails);
	}
	@Override
	public List<TrainDetails> getAllTrains() {
		return admindao.findAll();
	}
	@Override
	public List<TrainDetails> getTrainByName(String train_name) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Optional<TrainDetails> getTrainById(int id) {
		
		return admindao.findById(id);
	}
	@Override
	public TrainDetails getTrainByDate(Date date) {
		// TODO Auto-generated method stub
		return null;
	}

}
