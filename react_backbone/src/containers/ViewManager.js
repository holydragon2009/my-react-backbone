import React, { Component } from "react";
import { Collapse } from "antd";
import { Input } from 'antd';
const Search = Input.Search;

class ViewManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSearch: ''
        };
    }
    render() {
        console.log("quanle" + this.state.valueSearch);
        return (
            <div>
                {/* <ListView></ListView> */}

                <Search
                    placeholder="input search text"
                    style={{ width: 200 }}
                    onSearch={value => this.setState({ valueSearch: value })}
                />
            </div>
        )

    };
}

export default ViewManager;
