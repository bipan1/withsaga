import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../actions';

import './styles.css';


class ImageGrid extends Component {

    render() {
        return (
            <div className="content">
                <section className="grid">
                    {this.props.imageData.imageList.map(image =>
                        (
                            <div
                                key={image.id}
                                className={`item item-${Math.ceil(
                                    image.height / image.width,
                                )}`}
                            >
                                <img
                                    src={image.urls.small}
                                    alt={image.user.username}
                                />
                            </div>
                        ))}
                </section>
                <button onClick={this.props.loadImages}> Load Images</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        imageData: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadImages: () => dispatch(loadImages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
