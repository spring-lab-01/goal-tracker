import React, { FC } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GoalList from "./GoalList";
import GoalsCrud from "./GoalsCrud";
import GoalEdit from "./GoalEdit";

interface RouterMappingProps {}

const RouterMapping: FC<RouterMappingProps> = () => (
  <div>
          <BrowserRouter>
            <Routes>
                <Route path="" element={<GoalList/>}></Route>
                <Route path="goals" element={<GoalList/>}></Route>
                <Route path="addGoal" element={<GoalsCrud/>}></Route>
                <Route path="editGoal/:id" element={<GoalEdit/>}></Route>
            </Routes>
          </BrowserRouter>
  </div>
);

export default RouterMapping;
