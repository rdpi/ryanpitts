import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Hire extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" className="font-weight-bold" onClick={this.toggle}>Hire Me  ⮞</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="text-center" centered>
          <ModalBody>
            Interested in hiring me? Shoot me an email at:
            <br/>
            ryanpitts@protomail.com
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Hire;