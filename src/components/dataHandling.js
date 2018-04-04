import * as d3 from "d3";
import _ from 'lodash';

const dataHandling = (callback = _.noop, twitterHandle) => {
    const dataLocation = "data/mock_data_djt_v2.json";
    d3.json(dataLocation, (errot, data) => {

        callback(data);
    })


};

export default dataHandling;