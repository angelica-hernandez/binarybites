import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

class Login extends React.Component {

// constructor(props) {
//   super(props);
//   this.toggle = this.toggle.bind(this);
//   this.changeValue = this.changeValue.bind(this);
//   this.state = {
//       dropDownValue: 'Select',
//       dropdownOpen: false
//   };
// }
// toggle(event) {

//   this.setState({
//       dropdownOpen: !this.state.dropdownOpen
//   });
// }
constructor(props) {
  super(props);
  this.state = {value: 'http://localhost:3000/guest/order'};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
submit = document.getElementById("submit");
menu = document.getElementById("menu");

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  console.log("yes");
  window.location = this.state.value;
  // window.location = this.menu.value;
  event.preventDefault();
  console.log("hellyeah");
}

render(){
    return (
      <>
      <br></br>
      <br></br>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form role="form" onSubmit={this.handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup>
                </FormGroup>
                {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                  {this.state.dropDownValue}
                    </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Customer</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Manager</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>cook Person</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Cooks</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Delivery Person</DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
                  <select id="menu" value={this.state.value} onChange={this.handleChange}>
                  <option value="http://localhost:3000/guest/order">Please select one</option>
                  <option value="http://localhost:3000/ordinary/order">Regular Customer</option>
                  <option value="http://localhost:3000/VIP/order">VIP Customer</option>
                  <option value="http://localhost:3000/manager/icons">Manager</option>
                  <option value="http://localhost:3000/sales/order">Sales Person</option>
                  <option value="http://localhost:3000/cook/order">Cooks</option>
                  <option value="http://localhost:3000/delivery/order">Delivery Person</option>
                  </select>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit" id="submit" value="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}
export default Login;
