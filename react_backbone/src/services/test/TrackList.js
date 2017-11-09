import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TrackList extends Component {
  // static propTypes = {
  //   tracks: PropTypes.array
  // }

  // static defaultProps = {
  //   tracks: []
  // }

  render() {
    return (
      <div>
      {
        this.props.tracks.map((track) => {
          return <div key={track.id} >Track: {track.title}</div>;
        })
      }
      </div>
    )
  }
}


