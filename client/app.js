import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: []
    };
  }

  render() {
    return (
      <div>
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2" href="#">
              <i className="fas fa-user-astronaut" />
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#">
              Tour
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#">
              Product
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#">
              Features
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#">
              Enterprise
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#">
              Support
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#">
              Pricing
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#">
              Cart
            </a>
          </div>
        </nav>

        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-white bg-light main-image">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal ">Clicks & Mortar</h1>
            <p className="lead font-weight-normal">
              Quickly maximize timely deliverables for real-time schemas and
              interactively engage worldwide methodologies.{' '}
            </p>
            <a className="btn btn-outline-secondary text-white" href="#">
              Coming soon
            </a>
          </div>
          <div className="product-device box-shadow d-none d-md-block" />
          <div className="product-device product-device-2 box-shadow d-none d-md-block" />
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden box-one-image">
            <div className="my-3 py-3">
              <h2 className="display-5">Win-Win Survival Strategies</h2>
              <p className="lead">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
            <div className="infobox" />
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden box-two-image">
            <div className="my-3 p-3">
              <h2 className="display-5">Collaborative</h2>
              <p className="lead">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div className="infobox" />
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-primary mr-md-3  px-3 pt-md-5 px-md-5 text-center overflow-hidden box-three-image text-white">
            <div className="my-3 py-3">
              <h2 className="display-5">A New Normal</h2>
              <p className="lead">
                Harnessing operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
            </div>
            <div className="infobox"/>
          </div>
        </div>
        <footer className="container py-5">
          <div className="row">
            <div className="col-12 col-md">
              <h5>
                <i className="fas fa-user-astronaut shift" />
              </h5>
              <small className="d-block mb-3 text-muted">
                &copy; 2017-2018
              </small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Business
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Education
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Government
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Gaming
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
