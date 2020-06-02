import React, { Component } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  Collapse,
  Fade,
} from "reactstrap";
import { AppSwitch } from "@coreui/react";

class CustomCards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  toggleFade() {
    this.setState((prevState) => {
      return { fadeIn: !prevState };
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>{this.props.match.params.id} {this.props.match.params.name}</CardHeader>
              <CardBody>
                Sorry, I wasn’t totally clear there. And (depending on operating
                system) the error message, specifically, is because when you’ve
                got the dot and the slash the other way around, what it’s trying
                to resolve is a file called “AddTodos.js” in a folder called
                “.components/” in the computer’s root directory
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CustomCards;
