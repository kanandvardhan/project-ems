-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2023 at 07:43 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_subject` text NOT NULL,
  `contact_message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `contact_name`, `contact_email`, `contact_subject`, `contact_message`) VALUES
(142, 'Kaushal Kishore', 'kaushal@gmail.com', 'Need to Learn PHP', 'Hello Team, I need to learn PHP'),
(143, 'Amit Kumar', 'amit@gmail.com', 'Need to Learn C', 'Hello Team, I need to learn C Language'),
(146, 'Sumit Singh', 'sumit@gmail.com', 'Need to Learn Angular', 'Hello Team, I need to learn Angular'),
(147, 'Rahul Kumar', 'rahul@gmail.com', 'Need to Learn NodeJS', 'Hello Team, I need to learn NodeJS');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `country_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `country_name`) VALUES
(1, 'India'),
(2, 'USA'),
(3, 'UK'),
(4, 'Russia');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` int(11) NOT NULL,
  `department_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_id`, `department_name`) VALUES
(1, 'IT Department'),
(2, 'Java Developement'),
(3, 'HR Department'),
(4, 'Web Developement');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `employee_sal` varchar(100) NOT NULL,
  `employee_first_name` varchar(100) NOT NULL,
  `employee_middle_name` varchar(100) NOT NULL,
  `employee_last_name` varchar(100) NOT NULL,
  `employee_gender` varchar(100) NOT NULL,
  `employee_address` varchar(100) NOT NULL,
  `employee_village` varchar(100) NOT NULL,
  `employee_state` varchar(100) NOT NULL,
  `employee_country` varchar(100) NOT NULL,
  `employee_landline` varchar(100) NOT NULL,
  `employee_mobile` varchar(100) NOT NULL,
  `employee_email` varchar(100) NOT NULL,
  `employee_status` varchar(255) NOT NULL,
  `employee_department` varchar(255) NOT NULL,
  `employee_dob` varchar(255) NOT NULL,
  `employee_nationalty` varchar(255) NOT NULL,
  `employee_qualification` text NOT NULL,
  `employee_history` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `employee_sal`, `employee_first_name`, `employee_middle_name`, `employee_last_name`, `employee_gender`, `employee_address`, `employee_village`, `employee_state`, `employee_country`, `employee_landline`, `employee_mobile`, `employee_email`, `employee_status`, `employee_department`, `employee_dob`, `employee_nationalty`, `employee_qualification`, `employee_history`) VALUES
(1001, '1', 'Amit', 'Kumar', 'Singh', 'Male', 'A : 42/6', 'Ghaziabad', '5', '1', 'Uttar Pradesh', '09876543212', 'kaushal@gmail.com', '2', '1', '2021-07-07', 'Indian', '', ''),
(1002, '2', 'Kaushal', 'Kishore', 'Jaiswal', 'Male', 'A : 42/6', 'Ghaziabad', 'sdfgsdfg', '1', '89273458', '09876543212', 'kaushal.rahuljaiswal@gmail.com', '1', '3', '2021-08-31', 'Indian', 'qwrqwer', 'qwreqwer'),
(1003, '1', 'Sumit', 'Kumar', 'Aggarwal', 'Male', 'A : 42/6', 'Ghaziabad', '1', '1', 'Uttar Pradesh', '09876543212', 'kishore@gmail.com', '2', '1', '12 January, 1988', 'Indian', '', ''),
(1014, '1', 'Anuj', 'Kumar', 'Dubej', 'Male', 'A : 42/6 Sector 62', 'Bhabua (Kaimur)', '1', '1', '9876543212', '9876543212', 'anuj@gmail.com', '1', '1', '12 January 1985', 'Indian', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `feedback_name` varchar(255) NOT NULL,
  `feedback_email` varchar(255) NOT NULL,
  `feedback_message` text NOT NULL,
  `feedback_rating` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `feedback_name`, `feedback_email`, `feedback_message`, `feedback_rating`) VALUES
(1, 'Sai Anand', 'anand@gmail.com', 'Good Website', '5'),
(2, 'Vivek', 'vivek@gmail.com', 'Impressive Website', '4'),
(3, 'Sagar', 'sagar@gmail.com', 'Good usability.', '4'),
(4, 'Khalid', 'khalid@gmail.com', 'Works good on mobile too!', '4'),
(5, 'Leola', 'leola@gmail.com', 'Best thing that happened employees here!', '5');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(15),
(15),
(15),
(15),
(15),
(15),
(15),
(15),
(15),
(15),
(15),
(15),
(15);

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `leave_id` int(11) NOT NULL,
  `leave_employee_id` varchar(10) NOT NULL,
  `leave_reason` varchar(300) NOT NULL,
  `leave_description` varchar(300) NOT NULL,
  `leave_from_date` varchar(300) NOT NULL,
  `leave_to_date` varchar(300) NOT NULL,
  `leave_status` varchar(255) NOT NULL DEFAULT '0',
  `leave_total_days` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`leave_id`, `leave_employee_id`, `leave_reason`, `leave_description`, `leave_from_date`, `leave_to_date`, `leave_status`, `leave_total_days`) VALUES
(2, '1', 'vacation', 'vacation123', '2023-09-02', '2023-09-10', 'Approved', '9'),
(10, '1', 'sick leave', 'Iam not feeling well since 3 days, kindly grant me a leave for mentioned dates.', '2023-09-08', '2023-09-09', 'Pending', '2');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` bigint(20) NOT NULL,
  `login_email` varchar(255) DEFAULT NULL,
  `login_employee_id` varchar(255) DEFAULT NULL,
  `login_level_id` varchar(255) DEFAULT NULL,
  `login_password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `month`
--

CREATE TABLE `month` (
  `month_id` int(11) NOT NULL,
  `month_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `month`
--

INSERT INTO `month` (`month_id`, `month_name`) VALUES
(1, 'January'),
(2, 'February'),
(3, 'March'),
(4, 'April'),
(5, 'May'),
(6, 'June'),
(7, 'July'),
(8, 'August'),
(9, 'September'),
(10, 'October'),
(11, 'November'),
(12, 'December');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roles_id` int(11) NOT NULL,
  `roles_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roles_id`, `roles_name`) VALUES
(1, 'Admin'),
(2, 'Employee');

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `salary_id` int(11) NOT NULL,
  `salary_employee_id` varchar(255) NOT NULL,
  `salary_month` varchar(255) NOT NULL,
  `salary_working_days` varchar(255) NOT NULL,
  `salary_basic` varchar(255) NOT NULL,
  `salary_hra` varchar(255) NOT NULL,
  `salary_mediclaim` varchar(255) NOT NULL,
  `salary_ta` varchar(255) NOT NULL,
  `salary_da` varchar(255) NOT NULL,
  `salary_reimbursement` varchar(255) NOT NULL,
  `salary_ca` varchar(255) NOT NULL,
  `salary_others` varchar(255) NOT NULL,
  `salary_dpf` varchar(255) NOT NULL,
  `salary_dtax` varchar(255) NOT NULL,
  `salary_desc` text NOT NULL,
  `salary_total` varchar(255) NOT NULL,
  `salary_dedc` varchar(255) NOT NULL,
  `salary_slip` longblob DEFAULT NULL,
  `salary_slip_filename` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`salary_id`, `salary_employee_id`, `salary_month`, `salary_working_days`, `salary_basic`, `salary_hra`, `salary_mediclaim`, `salary_ta`, `salary_da`, `salary_reimbursement`, `salary_ca`, `salary_others`, `salary_dpf`, `salary_dtax`, `salary_desc`, `salary_total`, `salary_dedc`, `salary_slip`, `salary_slip_filename`) VALUES
(3, '1', '2', '15', '1000', '1000', '1000', '1000', '1000', '1000', '1000', '1000', '999', '1000', 'salary', '6001', '1999', NULL, '1693460148_Salary-Slip.png'),
(5, '2', '4', '23', '15000', '15000', '14999', '15000', '15000', '15000', '15000', '15000', '15000', '15000', 'salary', '89999', '30000', NULL, '1693460153_Salary-Slip.png'),
(8, '7', '4', '3', '3000', '3000', '3000', '3000', '3000', '3000', '3000', '3000', '3000', '3000', 'salary', '18000', '6000', NULL, '1693460157_Salary-Slip.png'),
(12, '11', '8', '18', '1500', '1500', '1500', '1500', '1500', '1500', '1500', '1500', '1500', '1500', 'salary', '9000', '3000', NULL, '1693460141_Salary-Slip.png'),
(14, '13', '11', '28', '2000', '2000', '2000', '2000', '2000', '2000', '2000', '2000', '2000', '2000', 'salary', '12000', '4000', NULL, '1693460128_Salary-Slip.png');

-- --------------------------------------------------------

--
-- Table structure for table `saluation`
--

CREATE TABLE `saluation` (
  `saluation_id` int(11) NOT NULL,
  `saluation_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `saluation`
--

INSERT INTO `saluation` (`saluation_id`, `saluation_name`) VALUES
(1, 'Mr.'),
(2, 'Mrs.');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `state_id` int(11) NOT NULL,
  `state_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`state_id`, `state_name`) VALUES
(1, 'Maharastra'),
(2, 'Gujrat'),
(3, 'Bihar'),
(4, 'Uttar Pradesh'),
(5, 'Delhi'),
(6, 'Haryana'),
(7, 'Telangana'),
(8, 'Andhra Pradesh'),
(9, 'Karnataka');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_level_id` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_first_name` varchar(255) NOT NULL,
  `user_last_name` varchar(255) NOT NULL,
  `user_dob` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_city` varchar(255) NOT NULL,
  `user_state` varchar(255) NOT NULL,
  `user_country` varchar(255) NOT NULL,
  `user_mobile` varchar(255) NOT NULL,
  `user_nationalty` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_level_id`, `user_email`, `user_password`, `user_first_name`, `user_last_name`, `user_dob`, `user_address`, `user_city`, `user_state`, `user_country`, `user_mobile`, `user_nationalty`) VALUES
(1, '2', 'anand@gmail.com', 'test', 'Sai', 'Anand', '2005-08-30', 'Secunderabad', 'Hyderabad', '7', '1', '9999999999', 'Indian'),
(2, '2', 'vivek@gmail.com', 'test', 'Vivek', 'Khairnar', '2005-08-10', 'Local Street', 'Nashik', '1', '4', '7878787878', 'Indian'),
(6, '1', 'admin@admin.com', 'test', 'Admin', 'Admin', '2005-08-01', 'new delhi', 'new delhi', '5', '1', '4545454545', 'Indian'),
(7, '2', 'sagar@gmail.com', 'test', 'Sagar', 'Kottagattu', '2005-06-16', '10th Avenue', 'Alabama', '7', '2', '4545454545', 'Indian'),
(9, '1', 'admin3@admin.com', 'test', 'Admin3', 'Admin3', '2005-08-12', 'xyz', 'xyz', '6', '3', '1111111111', 'Indian'),
(11, '2', 'khalid@gmail.com', 'test', 'Khalid', 'Shaik', '2005-08-11', 'admin@admin.com', 'Mumbai', '1', '1', '5656565656', 'Indian'),
(13, '2', 'leola@gmail.com', 'test', 'Leola', 'Leonor', '2005-08-20', 'admin@admin.com', 'Goa', '9', '4', '1212121212', 'Indian');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`leave_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`);

--
-- Indexes for table `month`
--
ALTER TABLE `month`
  ADD PRIMARY KEY (`month_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roles_id`);

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`salary_id`);

--
-- Indexes for table `saluation`
--
ALTER TABLE `saluation`
  ADD PRIMARY KEY (`saluation_id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1015;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `leave_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=447;

--
-- AUTO_INCREMENT for table `month`
--
ALTER TABLE `month`
  MODIFY `month_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `salary_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `saluation`
--
ALTER TABLE `saluation`
  MODIFY `saluation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=394;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
