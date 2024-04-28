package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entity.Employee;
import com.spring.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;


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
		
		public void deleteEmployee(Long id) {
			if(!employeeRepository.existsById(id)) {
				throw new EntityNotFoundException("Employee with id "+id+" not found");
			}
			employeeRepository.deleteById(id);
		}
		
		
}
