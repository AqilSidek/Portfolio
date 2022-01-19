import * as React from 'react'
import { projcontainer, quicknotes, columns, body, boldtxt } from './projects.module.css'
import { linktext2 } from '../../components/main.module.css'

const FoodRoulettePage = () => {
    return (
        <div className={projcontainer}>
            <div>
                <h1>Food Roulette iOS App</h1>
            </div>
            <div className={quicknotes}>
                {/* column1 */}
                <div className={columns}>
                    {/* type */}
                    <div className={boldtxt}><h4>Type:</h4></div>
                    <div><p>Individual Project</p></div>

                    {/* my role  */}
                    <div className={boldtxt}><h4>My Role:</h4></div>
                    <div><p>iOS Developer<br />UI/UX Designer</p></div>

                    {/* timeline */}
                    <div className={boldtxt}><h4>Timeline:</h4></div>
                    <div><p>March 2020 - ongoing</p></div>
                </div>

                {/* column2 */}
                <div>
                    {/* summary */}
                    <div className={boldtxt}><h4>Summary:</h4></div>
                    <div>
                        <p>
                            This app was built to help my wife decide where to have lunch prior to pandemic lockdowns.<br /><br />

                            The app generates a random number and uses this to pick a restaurant from a list of restaurants in the vicinity.
                        </p>
                    </div>

                    {/* project source code */}
                    <div className={boldtxt}><h4>Project Source Code:</h4></div>
                    <div><a href='' className={linktext2}><p></p></a></div>
                </div>
            </div>

            {/* photos */}

            {/* project details */}
            <div>
                <div className={boldtxt}><h4>Project Details</h4></div>
                <div>
                    <p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FoodRoulettePage