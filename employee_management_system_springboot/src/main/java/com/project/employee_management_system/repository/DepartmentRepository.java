package com.project.employee_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.employee_management_system.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
