import { MainPage, MainPageCard } from "./MainPage"
import { Card } from "./Card"
import { Header } from "./Header";
import { Switch, Route, Redirect } from "react-router-dom";
import { Banner } from "./Banner";

export const App = () => {
    return (
        <div>
          <Header/>
            <Switch>   
                <Route path="/" exact>
                <Banner/> 
                </Route> 
                <Route path="/category/:category" exact>
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