import React from 'react' 
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Content from "./pages/principal/content"



export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Content}/>
            </Switch>
        </BrowserRouter>
    )
}
