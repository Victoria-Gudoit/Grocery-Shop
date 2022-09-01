import { MainPage } from "./MainPage"
import { Card } from "./Card"
import { Switch, Route, Redirect } from "react-router-dom";

export const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                  <MainPage/>  
                </Route>
                <Route path="/:id" exact>
                  <Card/>  
                </Route>
                <Redirect to="/"/>
             </Switch>
        </div>
       
    )
}