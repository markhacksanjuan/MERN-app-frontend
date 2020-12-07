import React from "react";
import WelcomeText from "./WelcomeText";
import khan from "../the-khan.gif";
//Dependencias
import { Link, Route, Redirect } from "react-router-dom";


const Home = (props) => {
  return (
    <div>
      <div class="hero-body header-bg">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-5 is-offset-1 has-text-left mb-6">
              <h2 class="subtitle is-size-3 is-size-5-mobile has-text-left is-spaced has-text-weight-semibold">
                Follow in the footsteps of the warrior...
              </h2>
              <h1 class="title is-2 is-bold is-spaced has-text-warning-dark">
                Discover Mongolia,
                <br />
                the land of the Great Khan
              </h1>
              <p class="is-size-5 is-size-6-mobile">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br class="is-hidden-tablet" />
                Suspendisse pretium, risus et pharetra vulputate,
                <br class="is-hidden-mobile" />
                velit nulla semper magna, sed fringilla ex justo a libero.
              </p>
              <div class="field is-grouped mt-5">
              <div class="control">
              <Link class="button is-primary" to="/login">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>Log In</span>
              </Link>
              </div>
              <div class="control">
              <Link class="button is-primary" to="/login">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>Log In</span>
              </Link>
              </div>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <figure class="image">
                <img src={khan}  alt="Genghis Khan" />
              </figure>
              {/* <h3 class="title is-5 feature-title has-text-black has-text-centered has-text-weight-normal">
                “If you're afraid, don't do it.
                <br />
                If you're doing it, don't be afraid!”
              </h3>
              <h5 class="subtitle is-5 has-text-right">Genghis Khan</h5> */}
            </div>
          </div>
        </div>

      </div>
      <div class="container">
        
      </div>

      {/* <h2>Home</h2>
                <h3>
                  {props.isLogged.username &&
                    `Welcome, ${props.isLogged.username}`}
                </h3>
                {props.isLogged.username && (
                  <button onClick={() => props.logOut()}>Log Out</button>
                )} */}
    </div>
  );
};

export default Home;
