// libraries
import React from "react";

// CSS
import "./Pages.css";

// images
import All from "../../../media/Fridge/All.png";
import Fridge1 from "../../../media/Fridge/Fridge1.png";
import Fridge2 from "../../../media/Fridge/Fridge2.png";
import Fridge3 from "../../../media/Fridge/Fridge3.png";
import Fridge4 from "../../../media/Fridge/Fridge4.png";
import Fridge5 from "../../../media/Fridge/Fridge5.png";
import Fridge6 from "../../../media/Fridge/Fridge6.png";
import Fridge7 from "../../../media/Fridge/Fridge7.png";

export default class Fridge extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <div className="page-header">
          <h1 className="header">Fridge</h1>
        </div>

        {/* 2-column section */}
        <div className="brief-section">
          {/* first column */}
          <div className="column-one">
            <div>
              <h5>Type:</h5>{" "}
              <h4 className="column-text">Individual UI/UX Project</h4>
            </div>
            <div>
              <h5>My Role:</h5> <h4 className="column-text">UI/UX Designer</h4>
            </div>
            <div>
              <h5>Timeline:</h5> <h4 className="column-text">4 months</h4>
            </div>
          </div>

          {/* second column */}
          <div className="column-two">
            <h5>Summary: </h5>

            <h4 className="column-text">
              My team and I were tasked with creating a human-computer
              interaction solution to a real world problem of our choice.
              <br />
              <br />
              We decided to tackle the issue of sizing inconsistencies when
              shopping online for clothes, and explored solutions to help take
              the guesswork out of choosing the correct size.
              <br />
              <br />
              In the future, this idea could be developed using React as the
              front-end technology.
            </h4>
          </div>
        </div>

        {/* flatlay images */}
        <div className="flatlay">
          <img src={All} alt="flatlay" className="flatlay-img" />
        </div>

        {/* screenshots */}
        <div className="screenshots">
          <div>
            <img src={Fridge1} alt="Fridge1" className="screenshot-fridge" />
          </div>
          <div>
            <img src={Fridge2} alt="Fridge2" className="screenshot-fridge" />
          </div>
          <div>
            <img src={Fridge3} alt="Fridge3" className="screenshot-fridge" />
          </div>
          <div>
            <img src={Fridge4} alt="Fridge4" className="screenshot-fridge" />
          </div>
          <div>
            <img src={Fridge5} alt="Fridge5" className="screenshot-fridge" />
          </div>
          <div>
            <img src={Fridge6} alt="Fridge6" className="screenshot-fridge" />
          </div>
          <div>
            <img src={Fridge7} alt="Fridge7" className="screenshot-fridge" />
          </div>
        </div>

        {/* project description */}
        <div>
          <h5>About the Project: </h5>
          <h4 className="column-text">
            This app was a personal exercise in designing user interfaces and
            experiences for a mobile platform. A common problem faced by
            students and recent graduates is how to make delicious food with
            what they currently have in their fridge and/or pantry. With this
            problem in mind, I set about designing an app to solve precisely
            that problem.
            <br />
            <br />
            I started by asking my peers what sort of features they would
            like to see in such an app. From these conversations, I decided on 4
            main features: <i>User Profile</i>, <i>Inventory System</i>,{" "}
            <i>Recommended Recipes</i>, and <i>Recipe Search</i>.
            <br />
            <br />
            A <i>user profile</i> would have 3 fields; dietary restriction, which meals
            to recommend recipes, and nutrition goals. The app will use
            information from all 3 settings as a filter when recommending
            recipes. Dietary restrictions would include halal, kosher,
            dairy-free, vegetarian, gluten-etc, etc. The user can also determine
            which meals they would like to receive recipe recommendations for
            (breakfast, lunch, dinner). To encourage healthier eating habits, I
            also included the ability to track nutrition goals.
            <br />
            <br />
            An <i>inventory system</i> will keep track of what the user currently has.
            The app has 7 categories; vegetables, fruits, grains, proteins,
            dairy, spices, and miscellaneous. Users can either type in the food
            item including quantity, or by scanning the barcode on the
            packaging. The app automatically sorts food items into the correct
            category. Users can also search for ingredients in their inventory.
            The inventory also displays the expiry date and sends notifications
            to the user when food is almost expiring and again when food has
            expired. This can help reduce food waste as users can easily keep
            track of expiry dates, and also helps with hygiene and food safety.
            Items in the inventory are automatically subtracted whenever a user
            taps on the "made this" button when looking at a recipe.
            <br />
            <br />
            <i>Recommended recipes</i> are recipes that meet both the user's filters as
            well as the user's inventory. This is crowning feature of the app
            and solves the problem "what can I cook with what I have?" Searching
            for recipes while in this feature only searches the set of
            recommended recipes.
            <br />
            <br />
            The <i>recipe search</i> feature allows the user to search for recipes irrespective of
            whether the user presently has all ingredients in their inventory.
            This feature was included to foster a passion for food by allowing
            users to explore recipes from all over the world.
          </h4>
        </div>
      </div>
    );
  }
}
