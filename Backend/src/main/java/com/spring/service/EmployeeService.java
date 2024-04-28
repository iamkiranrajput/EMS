package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entity.Employee;
import com.spring.repository.EmployeeRepository;


@Service


public class EmployeeService {
		@Autowired
		private EmployeeRepository employeeRepository;
		
		
		public Employee postEmployee(Employee employee) {

			return employeeRepository.save(employee);
		}
		
		public List<Employee> getAllEmployees(){
			
			return employeeRepository.findAll();
						
		}
		
		
}
