package com.lab01.goaltracker.repo;

import com.lab01.goaltracker.model.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalRepository extends JpaRepository<Goal, Long> {
}
