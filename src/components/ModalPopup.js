import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalBodyContent from "./ModalBodyContent";

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
        this.props.submit();
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.toggle}
                    type="button"
                    className="button"
                    id="buttonCheck">
                    CHECK
                </button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} id="myModal" className="modal-dialog modal-lg">

                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>

                    <ModalBody>
                        <ModalBodyContent />
                    </ModalBody>

                    <ModalFooter>

                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>

                </Modal>

            </div>

        );
    }
}

export default ModalExample;