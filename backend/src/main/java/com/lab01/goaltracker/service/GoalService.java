package com.lab01.goaltracker.service;

import com.lab01.goaltracker.exception.ResourceNotFoundException;
import com.lab01.goaltracker.exception.ValidationFailedException;
import com.lab01.goaltracker.model.Goal;
import com.lab01.goaltracker.repo.GoalRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
@Data
public class GoalService {

    private final GoalRepository goalRepository;

    public List<Goal> getGoals() {
        return goalRepository.findAll();
    }

    public Goal saveGoal(Goal goal) {
        validateGoalForNonNullValues(goal);
        return goalRepository.save(goal);
    }

    public Goal createGoal(Goal goal) {
        goal.setCreatedDatetime(LocalDateTime.now());
        //TODO - replace with logged in user
        goal.setCreatedBy(1);
        return saveGoal(goal);
    }


    private void validateGoalForNonNullValues(Goal goal) {
        try {
            Objects.requireNonNull(goal.getName(), "Name cannot be null");
            Objects.requireNonNull(goal.getDescription(), "Description cannot be null");
            Objects.requireNonNull(goal.getCreatedDatetime(), "Created datetime cannot be null");
            Objects.requireNonNull(goal.getCreatedBy(), "Created by cannot be null");
        }catch (NullPointerException e){
            throw new ValidationFailedException(Constant.RESOURCE_GOAL, e.getMessage());
        }
    }

    public Goal getGoalById(Long id) {
        return goalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(Constant.RESOURCE_GOAL, id));
    }

    public void deleteGoalById(Long id) {
        Goal goal = getGoalById(id);
        goalRepository.delete(goal);
    }
}
