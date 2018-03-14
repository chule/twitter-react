import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalBodyContent from "./ModalBodyContent";
import dataHandling from "./dataHandling";

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: null
        };

        this.toggle = this.toggle.bind(this);
    }

    loadData = (twitterHandle) => {
        const callback = (data) => {
            this.setState(prevState => {

                return {
                    ...prevState,
                    data
                }
            });
        };

        dataHandling(callback, twitterHandle);
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });

        setTimeout(() => {
            this.loadData(this.props.twitterHandle);
        }, 1000)

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

                <Modal isOpen={this.state.modal} toggle={this.toggle} id="myModal" className="modal-lg">

                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>

                    <ModalBody>

                        {this.state.data
                            ?
                            <ModalBodyContent data={this.state.data} />
                            :
                            <h2>LOADING</h2>
                        }

                        {/* {this.props.data && <ModalBodyContent data={this.props.data} />} */}
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