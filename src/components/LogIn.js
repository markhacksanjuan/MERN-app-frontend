import React from "react";
import MongolRiding from "../mongol-riding.gif";
import GenghisFace from "../genghis-face.png";

const LogIn = (props) => {
  // const {submitLogIn, loggingUser, changeHandlerLogIn} = props
  return (
    <div>
      <section class="hero is-medium login-bg">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-4 is-offset-2 mb-6">
                <article class="media has-text-left">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      <img class="is-rounded" src={GenghisFace} />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Genghis Khan</strong> <small>@MongolianProverbs</small>
                       
                        <br />
                        “While horse is strong, travel to see places.”
                      </p>
                    </div>
                  </div>
                </article>
                <div class="is-spaced mt-6">
                  <form onSubmit={props.submitLogIn}>
                    <div class="field">
                      <label class="label has-text-left" htmlFor="username">
                        User Name
                      </label>
                      <div class="control">
                        <input
                          class="input is-black"
                          type="text"
                          name="username"
                          placeholder="Name"
                          // value={props.loggingUser.username}
                          onChange={(event) =>
                            props.changeHandlerLogIn(event.target)
                          }
                        />
                      </div>
                    </div>

                    <div class="field">
                      <label class="label has-text-left" htmlFor="password">
                        Password
                      </label>
                      <div class="control">
                        <input
                          class="input is-black"
                          type="password"
                          name="password"
                          placeholder="********"
                          // value={props.loggingUser.password}
                          onChange={(event) =>
                            props.changeHandlerLogIn(event.target)
                          }
                        />
                      </div>
                    </div>
                    <button class="button is-primary" type="submit">
                      Log In
                    </button>
                  </form>
                </div>
              </div>
              <div class="column is-5 is-offset-1">
                <figure class="image">
                  <img src={MongolRiding} alt="Mongol Riding" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <form onSubmit={props.submitLogIn}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={props.loggingUser.username}
          onChange={(event) => props.changeHandlerLogIn(event.target)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={props.loggingUser.password}
          onChange={(event) => props.changeHandlerLogIn(event.target)}
        />

        <button type="submit">Log In</button>
      </form> */}
    </div>
  );
};

export default LogIn;
