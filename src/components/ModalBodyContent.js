import React, { Component } from 'react';
import ArcGraph from "./graphs/ArcGraph";
import Measure from 'react-measure';

class ModalBodyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arcGraphDimensions: -1,
            data: null
        }
    }

    componentWillMount() {
        this.setState({
            data: this.props.data
        })
    }

    render() {
        console.log(this.props.data)

        let { data } = this.props.data;

        //console.log(data.twitter_data.profile_banner_url)
        return (
            <div className="modalBody">
                <div className="row">
                    <div className="info col-lg-6">
                        <div className="profileHeader">
                            <div className="banner">
                                <img src={data.twitter_data.profile_banner_url} width="100%" alt="profile_banner_url" />
                            </div>
                            <div className="profileInfo">
                                <div className="table-responsive">
                                    <table className="table table-sm">
                                        <tbody>
                                            <tr>
                                                <td className="text-right font-weight-bold">Screen name</td>
                                                <td className="screen_name">{data.twitter_data.screen_name}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Display name</td>
                                                <td className="name">{data.twitter_data.name}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Description</td>
                                                <td className="description">{data.twitter_data.description}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Location</td>
                                                <td className="location">{data.twitter_data.location}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">URL</td>
                                                <td className="url"><a href={data.twitter_data.url} target="_blank"> {data.twitter_data.url} </a></td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Date joined</td>
                                                <td className="created_at">{data.twitter_data.created_at}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Most recent post</td>
                                                <td className="most_recent_post">{data.twitter_data.status.created_at}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Twitter user ID</td>
                                                <td className="id">{data.twitter_data.id}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Profile language</td>
                                                <td className="lang">{data.twitter_data.lang}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Time zone</td>
                                                <td className="time_zone">{data.twitter_data.time_zone}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Recent tweets per week</td>
                                                <td className="tweets_last_week">{data.stat.tweets_last_week}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-right font-weight-bold">Retweet ratio</td>
                                                <td className="tweets_retweets_ratio">{data.stat.tweets_retweets_ratio}</td>
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

                                <Measure
                                    bounds
                                    onResize={(contentRect) => {
                                        this.setState({ arcGraphDimensions: contentRect.bounds })
                                    }}
                                >

                                    <ArcGraph />

                                </Measure>
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
    }

};

export default ModalBodyContent;