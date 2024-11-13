package com.lab01.goaltracker.controller;

import com.lab01.goaltracker.model.Goal;
import com.lab01.goaltracker.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/goals")
@CrossOrigin
public class GoalController {

    @Autowired
    private GoalService goalService;

    @GetMapping
    public List<Goal> getGoals() {
        return goalService.getGoals();
    }

    @GetMapping("/{id}")
    public Goal getGoalById(@PathVariable Long id) {
        return goalService.getGoalById(id);
    }


    @PostMapping
    public ResponseEntity<Goal> createGoal(@RequestBody Goal goal) {
        Goal savedGoal = goalService.createGoal(goal);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedGoal);
    }

    @PutMapping("/{id}")
    public Goal updateGoal(@PathVariable Long id, @RequestBody Goal goal) {
        //get goal by passed id and update
        Goal existingGoal = goalService.getGoalById(id);
        existingGoal.setName(goal.getName());
        existingGoal.setDescription(goal.getDescription());
        return goalService.saveGoal(existingGoal);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGoalById(@PathVariable Long id) {
        goalService.deleteGoalById(id);
        return ResponseEntity.noContent().build();
    }

}
