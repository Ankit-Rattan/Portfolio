import React from "react";

import Nav  from "./Nav";
import About  from "./About";
import Skill  from "./Skill";
import Exper  from "./Exper";
import Prj  from "./Prj";
import Progg  from "./Progg";
import Res  from "./Res";
import Footer  from "./Footer";

function App(){
    return(

        <div>
        <Nav/>
        <About/>
        <Skill/>
        <Exper/>
        <Prj/>
        <Progg/>
        <Res/>
        <Footer/>
    </div>
    )
    
};

export default App;