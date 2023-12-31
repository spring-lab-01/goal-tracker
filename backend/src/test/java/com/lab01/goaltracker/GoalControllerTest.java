package com.lab01.goaltracker;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lab01.goaltracker.model.Goal;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;

import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class GoalControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void getGoalsShouldReturn4Goals() throws Exception {
        mockMvc.perform(get("/goals"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(4)));
    }

    @Test
    public void getGoalsByIdShouldReturnSuccess() throws Exception {
        mockMvc.perform(get("/goals/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", startsWith("Savings 2024")));
    }

    @Test
    public void getGoalsByIdShouldReturn400() throws Exception {
        mockMvc.perform(get("/goals/101"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void createGoalShouldReturnSuccess() throws Exception {
        Goal goal = new Goal();
        goal.setId(5);
        goal.setName("Travel 2024");
        goal.setDescription("travel goal for 2024");
        goal.setCreatedDatetime(LocalDateTime.now());
        goal.setCreatedBy(1);

        mockMvc.perform(post("/goals")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getAsJson(goal)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id", is(5)))
                .andExpect(jsonPath("$.name", is("Travel 2024")));
    }

    @Test
    public void saveGoalShouldReturnSuccess() throws Exception {
        Goal goal = new Goal();
        goal.setId(1);
        goal.setName("Savings 2024 - updated");
        goal.setDescription("Savings 2024 Description - updated");

        mockMvc.perform(put("/goals/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getAsJson(goal)))
                .andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("Savings 2024 - updated")))
                .andExpect(jsonPath("$.description", is("Savings 2024 Description - updated")));
    }

    private String getAsJson(Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error converting object to JSON", e);
        }
    }
}
