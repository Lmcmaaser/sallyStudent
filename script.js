'use strict';

function App(props) {
    return (
        <div className="application-root">
            <header className="header"> 
                <h1>{props.name}</h1>
            </header>
            
            <main>
                <section>
                    <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="An image of Sally Student" height="200px"/>
                </section>
                <section>
                    <address>
                        <div>
                            <a href="tel:+13115552368">(555)555-5555 </a>
                        </div>
                        <div>
                        <a href="mailto:you@example.com">Email</a>
                        </div>   
                    </address>
                </section>
                <section>
                    <h2>Objective</h2>
                    <p>I'm an aspiring full stack web developer. I love cats, coding, baking, and lifting things.</p>
                </section>
                <section>
                    <h2>Education</h2>
                    <p>Boston College, May 2015</p>
                </section>
                <section>
                    <h2>Related Experience</h2>
                    <h3>Boston College</h3> 
                    <h4>IT Help Desk Technician, September 2013-May 2015</h4> 
                    <h3>Family Dental</h3>
                    <h4>Receptionist, August 2011-August 2013</h4>
                </section>
                <section>
                    <h2>My Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Python</li>
                    </ul>
                </section>
                <section>
                    <h3>Links</h3>
                    <p>Github: <a href="https://github.com/Lmcmaaser" > Lmcmaaser</a></p>
                </section>
            </main>

        </div>
    );
}

const appRoot = document.querySelector('#application-root');

ReactDOM.render(
    <App 
        name="Sally Student"
    />,
    document.querySelector('#application-root')
);