package com.spring.service;

import java.util.List;
import java.util.Optional;

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
		
		
		public Employee getEmployeeById(Long id) {
			return employeeRepository.findById(id).orElse(null);
		}
		
		
		
		public Employee updateEmployee(Long id, Employee employee) {
			
			Optional<Employee> optionalEmployee =employeeRepository.findById(id);
			if(optionalEmployee.isPresent()) {	
				Employee existEmployee = optionalEmployee.get();
				existEmployee.setEmail(employee.getEmail());
				existEmployee.setDepartment(employee.getDepartment());
				existEmployee.setName(employee.getName());
				existEmployee.setPhone(employee.getPhone());
				
				return employeeRepository.save(existEmployee);
			}
			return null;	
		}
		
}
