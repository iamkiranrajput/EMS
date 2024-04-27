package com.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.entity.Employee;

import lombok.RequiredArgsConstructor;

@Repository

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
