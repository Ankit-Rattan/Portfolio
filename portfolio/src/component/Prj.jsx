import React from "react";

function Prj(){
    return(
        <div class="main-prj">
        
        <h1>Top Projects</h1>
        <br/><br/><br/>
            <section class="project">
                
                <div class="seva-shakti prj-div">
                    <div class="images seva">
                    <img src="images/seva-shatki.png" alt=""/>
                </div>
                
                <div class="seva-shakti-txt">
                    <p>Project Name : Seva-Shakti</p>
                    
                    <p>Hackathon : Equitable Elevation I 2023</p>
                    
                    <a href="https://github.com/Ankit-Rattan/EQ-Hacks-Submission">GitHub Repo</a>
                    
                    
                </div>
            </div>
            <div class="side-garbage prj-div">
                <div class="images side">
                    <img src="images/side-garbage.png" alt=""/>
                </div>
                <div class="side-garbage-txt">
                    <p>Project Name : Side Garbage</p>
                    
                    <p>Hackathon : KatyYouthHack</p>
                    
                    <a href="https://github.com/Ankit-Rattan/KatyYouthHack"> GitHub Repo</a>
                </div>
            </div>
            <div class="ard-park ">
                <div class="ard ">
                    <img src="images/project-ard.jpg" alt=""/>
                    
                </div>
                <div class="ard-txt">
                    
                    <p>Project Name : IR Based Parking System</p>
                    <br/>
                    <p>Semester Project</p>
                    <br/>
                    <p><b>Technologies Used :</b> <br/> <br/> -> Arduino - UNO <br/> -> Servo Motor <br/>-> IR Sensors <br/> -> Arduino IDE <br/> -> Proteus 8 Pro.</p>
                </div>
            </div>
            <div class="course-prj">

            </div>
        </section>
        <br/>
    </div>
    )
}

export default Prj;