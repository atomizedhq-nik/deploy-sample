import React from "react"
import { Row, Col } from "react-bootstrap"

import "./App.scss"

//assets
import { ReactComponent as Containers } from "./assets/images/containers.svg"
import { ReactComponent as Servers } from "./assets/images/servers.svg"
import { ReactComponent as StaticSites } from "./assets/images/static-sites.svg"
import { ReactComponent as Versions } from "./assets/images/versions.svg"
import { ReactComponent as Atomized } from "./assets/images/atomized.svg"

function App() {
  return (
    <div className="wrapper">
      <Col className="frame" lg={6}>
        <Row>
          <Col>
            <div className="title">
              <Atomized /> <h2>Congratulations!</h2>
            </div>
            <label>
              You've just spun up a sample static page in your AWS account using
              Atomized Deploy.
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="features">FEATURES</p>
            <Row>
              <Col className="feature">
                <div className="icon">
                  <StaticSites />
                </div>
                <div>
                  <div className="feature-title">Static Sites</div>
                  <p>
                    Deploy is the fastest way to build and deploy static sites
                    from your Github repository to your AWS account.
                  </p>
                </div>
              </Col>
              <Col className="feature">
                <div className="icon">
                  <Containers />
                </div>
                <div>
                  <div className="feature-title">Containers</div>
                  <p>
                    By default, we deploy your sites using only serverless
                    technology, allowing for rapid development and deployment
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="feature">
                <div className="icon">
                  <Versions />
                </div>
                <div>
                  <div className="feature-title">Verisioned</div>
                  <p>
                    Every change is tracked and versioned. You can revert
                    changes easily in several clicks.
                  </p>
                </div>
              </Col>
              <Col className="feature">
                <div className="icon">
                  <Servers />
                </div>
                <div>
                  <div className="feature-title">Servers</div>
                  <p>
                    Your applications run inside your AWS account. You have full
                    control over the infrastructure. No more vendor lock-in.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="foot">
                <p>Ready to build your application? Get started today!</p>
                <a href="https://app.atomized.io/dashboard">+ Deploy new app</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </div>
  )
}

export default App
