import React from 'react';
import PropTypes from 'prop-types';
import {toastr} from 'react-redux-toastr';

export default class PrePolygon extends React.Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
    pix: PropTypes.number.isRequired,
    aix: PropTypes.number.isRequired,
    preAnnotation: PropTypes.object.isRequired,
    onAddPoint: PropTypes.func.isRequired,
    onPrePointMouseEnter: PropTypes.func.isRequired,
    onPrePointMouseLeave: PropTypes.func.isRequired,
    onPrePointClick: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const toastrOptions = {
      component: (
        <span>
          1. Click to draw polygon point.<br/>
          2. Click first point to finish annotation.<br/>
          3. Or press `ESC` to abort.
        </span>
      )
    }
    toastr.info('Polygon Annotation', toastrOptions);
  }

  render () {
    return (
      <g>
        <rect
          className='overlay'
          width={this.props.image.width}
          height={this.props.image.height}
          onClick={this.props.onAddPoint}
        />
        {
          this.props.preAnnotation.points.map((curPoint, index) => {
            if (index === 0) {
              return;
            }
            const prePoint = this.props.preAnnotation.points[index - 1];
            return (
              <line
                key={index}
                x1={prePoint[0]}
                y1={prePoint[1]}
                x2={curPoint[0]}
                y2={curPoint[1]}
              />
            )
          })
        }
        {
          this.props.preAnnotation.points.map((point, index) =>
            <circle
              r={this.props.pix === index ? 8 : 5}
              key={index}
              data-aix={this.props.aix}
              data-pix={index}
              cx={point[0]}
              cy={point[1]}
              onMouseEnter={index === 0 ? this.props.onPrePointMouseEnter : null}
              onMouseLeave={index === 0 ? this.props.onPrePointMouseLeave : null}
              onClick={index === 0 ? this.props.onPrePointClick : null}
              style={{
                fill: this.props.pix === index ? 'lime' : 'white',
                stroke: this.props.pix === index ? 'blue' : 'black',
              }}
            />
          )
        }
      </g>
    );
  }
}
