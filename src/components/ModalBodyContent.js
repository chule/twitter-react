import React from 'react';

const ModalBodyContent = () => {
    return (
        <div className="modalBody">

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
    );
};

export default ModalBodyContent;