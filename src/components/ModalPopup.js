import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
                {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        {this.props.twitterHandle}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal> */}


                {/* <!-- The Modal --> */}
                {/* <div className="modal fade" id="myModal"> */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="myModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">Twitter account info</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div className="modal-body">

                                <div className="row">
                                    <div className="info col-lg-6">
                                        <div className="profileHeader">
                                            <div className="banner">

                                            </div>


                                            <div className="profileInfo">
                                                <div className="table-responsive">
                                                    <table className="table table-sm">
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Screen name</td>
                                                                <td className="screen_name"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Display name</td>
                                                                <td className="name"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Description</td>
                                                                <td className="description"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Location</td>
                                                                <td className="location"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">URL</td>
                                                                <td className="url"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Date joined</td>
                                                                <td className="created_at"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Most recent post</td>
                                                                <td className="most_recent_post"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Twitter user ID</td>
                                                                <td className="id"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Profile language</td>
                                                                <td className="lang"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Time zone</td>
                                                                <td className="time_zone"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Recent tweets per week</td>
                                                                <td className="tweets_last_week"></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right font-weight-bold">Retweet ratio</td>
                                                                <td className="tweets_retweets_ratio"></td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="data-vis col-lg-6">
                                        <div className="row">
                                            <div className="bot col-6">
                                                <h5>Bot</h5>

                                            </div>
                                            <div className="political-propaganda col-6">
                                                <h5>Political propaganda</h5>

                                            </div>
                                            <div className="profile-features col-6">
                                                <h5>Profile features</h5>

                                            </div>
                                            <div className="languge-features col-6">
                                                <h5>Language features</h5>

                                            </div>
                                            <div className="common-topics-from-tweets col-12">
                                                <h5>Common topics from tweets</h5>

                                            </div>
                                        </div>

                                    </div>
                                </div>



                            </div>

                            {/* <!-- Modal footer --> */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                    </Modal>

            </div>
            
        );
    }
}

export default ModalExample;