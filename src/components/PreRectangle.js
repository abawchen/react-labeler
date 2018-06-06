import React from 'react';
import PropTypes from 'prop-types';
import {toastr} from 'react-redux-toastr';
import {getPathD} from '../utils/annotation';

export default class PreRectangle extends React.Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
    aix: PropTypes.number.isRequired,
    pix: PropTypes.number.isRequired,
    preAnnotation: PropTypes.object.isRequired,
    onPreAnnotationMouseDown: PropTypes.func.isRequired,
    onPreAnnotationMouseUp: PropTypes.func.isRequired,
    onPreAnnotationMouseMove: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const toastrOptions = {
      component: (
        <span>
          1. Drag and drop to annotate.<br/>
          2. Or press `ESC` to abort.
        </span>
      )
    }
    toastr.info('Rectangle Annotation', toastrOptions);
  }

  render() {
    return (
      <g>
        <path
          fill='gray'
          fill-rule='evenodd'
          opacity='0.5'
          d={getPathD(
            this.props.image.width,
            this.props.image.height,
            this.props.preAnnotation.points,
            true
          )}
        />
        <rect
          opacity={0}
          width={this.props.image.width}
          height={this.props.image.height}
          onMouseDown={this.props.onPreAnnotationMouseDown}
          onMouseMove={!!this.props.preAnnotation.points.length ? this.props.onPreAnnotationMouseMove : null}
        />
        <polygon
          points={this.props.preAnnotation.points}
          // XXXX: Not work in rect element!?
          onMouseUp={this.props.onPreAnnotationMouseUp}
        />
        {
          this.props.preAnnotation.points.map((point, index) =>
            <circle
              key={index}
              r={this.props.pix === index ? 8 : 5}
              data-aix={this.props.aix}
              data-pix={index}
              cx={point[0]}
              cy={point[1]}
              style={{
                fill: this.props.pix === index ? 'lime' : 'white',
                stroke: this.props.pix === index ? 'blue' : 'black',
              }}
            />
          )
        }
      </g>
    )
  }
}
