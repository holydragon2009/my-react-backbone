import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { aSelectReddit, aFetchPostsIfNeeded, aInvalidateReddit } from "../../../../services/reddit_news/actions";
import Picker from "../../../../components/Picker";
import Posts from "../../../../components/Posts";
import {Button} from "antd";

class RedditNews extends Component {
  static propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch, rSelectedReddit } = this.props;
    dispatch(aFetchPostsIfNeeded(rSelectedReddit));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps;
      dispatch(aFetchPostsIfNeeded(selectedReddit));
    }
  }

  handleChange = nextReddit => {
    this.props.dispatch(aSelectReddit(nextReddit));
  };

  handleRefreshClick = e => {
    e.preventDefault();
    const { dispatch, selectedReddit } = this.props;
    dispatch(aInvalidateReddit(selectedReddit));
    dispatch(aFetchPostsIfNeeded(selectedReddit));
  };

  render() {
    const { rSelectedReddit, posts, isFetching, lastUpdated } = this.props;
    const isEmpty = posts.length === 0;
    return <div>
      <Picker value={rSelectedReddit} onChange={this.handleChange} options={["reactjs", "frontend"]} />
        <p style={{ marginBottom: 10 }}>
          {lastUpdated && <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
            </span>}
          {!isFetching && <Button type="primary" size="default" onClick={this.handleRefreshClick}>
              Refresh
            </Button>}
        </p>
        {isEmpty ? isFetching ? <h2>
              Loading...
            </h2> : <h2>
              Empty.
            </h2> : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>}
      </div>;
  }
}

const mapStateToProps = state => {
  const { rSelectedReddit, postsByReddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsByReddit[
    rSelectedReddit
  ] || {
    isFetching: true,
    items: []
  };

  return {
    rSelectedReddit,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(RedditNews);
