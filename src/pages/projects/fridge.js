import * as React from 'react'
import { projcontainer, quicknotes, columns, boldtxt, projecthdr, projdetails, screenshots, screenshotimg } from './projects.module.css'
import { linktext2 } from '../../components/main.module.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import LazyLoad from 'react-lazy-load'
import Fade from 'react-reveal'
import All from '../../images/Fridge/All.png'
import Fridge1 from '../../images/Fridge/Fridge1.png'
import Fridge2 from '../../images/Fridge/Fridge2.png'
import Fridge3 from '../../images/Fridge/Fridge3.png'
import Fridge4 from '../../images/Fridge/Fridge4.png'
import Fridge5 from '../../images/Fridge/Fridge5.png'
import Fridge6 from '../../images/Fridge/Fridge6.png'
import Fridge7 from '../../images/Fridge/Fridge7.png'

const FridgePage = () => {
    return (
        <LazyLoad>
        <div className={projcontainer}>

            <Navbar />
            <div className={projecthdr}>
                <h1>Fridge App UI</h1>
            </div>
            <div className={quicknotes}>
                {/* column1 */}
                <div className={columns}>
                    {/* type */}
                        <div className={boldtxt}><h4>Type:</h4></div>
                        <div><p>Individual UI/UX Project</p></div>

                    {/* my role  */}
                    <div className={boldtxt}><h4>My Role:</h4></div>
                    <div><p>UI/UX Designer</p></div>

                    {/* timeline */}
                    <div className={boldtxt}><h4>Timeline:</h4></div>
                    <div><p>4 months</p></div>
                </div>

                {/* column2 */}
                <div className={columns}>
                    {/* summary */}
                    <div className={boldtxt}><h4>Summary:</h4></div>
                    <div>
                        <p>
                            I designed the user interface and experience for an app that will suggest recipes 
                            based on the contents of one's fridge and/or pantry as well as manage the contents. <br /><br />
                            This app was inspired by my own challenges as a college student.
                        </p>
                    </div>

                    {/* project source code */}
                    <div className={boldtxt}><h4>Project Source Code:</h4></div>
                    <div><a href='' className={linktext2}><p></p></a></div>
                </div>
            </div>

            {/* photos */}
            <LazyLoad>
                <div>
                    <Fade down>
                        <img src={All} />
                    </Fade>
                </div>
            </LazyLoad>

            <LazyLoad>
                <div className={screenshots}>
                    <Fade up>
                        <img src={Fridge1} className={screenshotimg} />
                    </Fade>

                    <Fade left>
                        <img src={Fridge2} className={screenshotimg} />
                    </Fade>

                    <Fade right>
                        <img src={Fridge3} className={screenshotimg} />
                    </Fade>

                    <Fade right>
                        <img src={Fridge4} className={screenshotimg} />
                    </Fade>

                    <Fade down>
                        <img src={Fridge5} className={screenshotimg} />
                    </Fade>
                    
                    <Fade left>
                        <img src={Fridge6} className={screenshotimg} />
                    </Fade>

                    <Fade up>
                        <img src={Fridge7} className={screenshotimg} />
                    </Fade>
                </div>
            </LazyLoad>

            {/* project details */}
            <div className={projdetails}>
                <div className={boldtxt}><h4>Project Details</h4></div>
                <div>
                    <p>
                        This app was a personal exercise in designing user interfaces and experience 
                        for a mobile platform. A common problem faced by students and recent graduates 
                        (a position I myself have been in) is how to make delicious food with what 
                        they currently have in their fridge and/or pantry. With this problem in mind, I 
                        set about designing an app to solve precisely that problem. <br /><br />

                        I started by my asking my peers what sort of features they would like to see 
                        in such an app. From these conversations, I decided on 4 main features; <em>User Profile</em>, 
                        <em>Inventory System</em>, <em>Recommended Recipes</em>, and <em>Recipe Search</em>.<br /><br />

                        A <em>user profile</em> would have 3 fields; dietary restriction, meals of the day, 
                        and nutrition goals. The app will use information from all 3 settings as a filter 
                        when recommending recipes. Dietary would include options such as halal, kosher, 
                        dairy-free, vegetarian, gluten-free, etc. The user can also determine whether 
                        they would like to receive recommendations for breakfast, lunch, dinner, or any 
                        combination of the three. To encourage healthier eating, I also included the ability 
                        to track nutrition goals.<br /><br />

                        An <em>inventory system</em> will keep track of what the user currently has. The app 
                        currently has 7 categories; vegetables, fruits, grains, proteins, dairy, spices, and 
                        miscellaneous. Users can either type in the food item including quantity, or by 
                        scanning the barcode on the packaging. The app automatically sorts food items into 
                        the correct category. Users can also search for ingredients in their inventory. The 
                        inventory also displays the expiry date and sends notifications to the user when 
                        food is almost expiring and again when food has expired. This can help reduce food 
                        waste as users can easily keep track of expiry dates, and also helps with hygiene and 
                        food safety. Items in the inventory are automatically subtracted whenever a user taps 
                        on the 'made this' button when looking at a recipe.<br /><br />

                        <em>Recommended recipes</em> are recipes that meet both the user's filters as well as 
                        as the user's inventory. This is the crowning feature of the app and solves the problem 
                        of "what can I cook with what I have?" Searching for recipes while in this feature only 
                        searches the set of recommended recipes.<br /><br />

                        The <em>recipe search</em> feature allows users to search for recipes irrespective of 
                        whether the user presently has all the necessary ingredients in their inventory. This 
                        feature was included to foster a passion for food by allowing users to explore recipes 
                        from all over the world.
                    </p>
                </div>
            </div>
        </div>
        </LazyLoad>
    )
}

export default FridgePage