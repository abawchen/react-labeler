import React from 'react';
import ReactDOM from 'react-dom';
import Annotation from './Annotation';
import PrePolygon from './PrePolygon';
import PreRectangle from './PreRectangle';
import styled from 'styled-components';

const LabelerContainer = styled.div`
  clear: both;
  position: relative;
  width: 100%;
  height: 400px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;


const Svg = styled.svg`
  position: absolute;
  left: 0;
  right: 0
`;

const Labeler = ({
  image,
  hix,
  aix,
  pix,
  src,
  mode,
  annotationShape,
  preAnnotation,
  annotations,
  onImageLoad,
  onLabelChange,
  onDeleteAnnotation,
  onAddPoint,
  onMouseMove,
  onKeyDown,
  onPointClick,
  onPointMouseEnter,
  onPointMouseLeave,
  onShapeClick,
  onShapeMouseEnter,
  onShapeMouseLeave,
  onPreAnnotationMouseDown,
  onPreAnnotationMouseUp,
  onPreAnnotationMouseMove,
  onPrePointMouseEnter,
  onPrePointMouseLeave,
  onPrePointClick,
}) => (
  <LabelerContainer>
    <Image
      id='img'
      src={image.src}
      onLoad={onImageLoad}
    />
    <Svg
      tabIndex='0'
      width={image.width}
      height={image.height}
      onMouseMove={mode.startsWith('MOVE') ? onMouseMove : null}
      onKeyDown={hix === -1 ? onKeyDown : null}
    >
      {
        mode === 'PRE_ANNOTATION'
          ? annotationShape === 'polygon'
            ? <PrePolygon
                image={image}
                aix={-1}
                pix={pix}
                preAnnotation={preAnnotation}
                onAddPoint={onAddPoint}
                onPrePointMouseEnter={onPrePointMouseEnter}
                onPrePointMouseLeave={onPrePointMouseLeave}
                onPrePointClick={onPrePointClick}
              />
            : <PreRectangle
                image={image}
                aix={-1}
                pix={pix}
                preAnnotation={preAnnotation}
                onPreAnnotationMouseDown={onPreAnnotationMouseDown}
                onPreAnnotationMouseUp={onPreAnnotationMouseUp}
                onPreAnnotationMouseMove={onPreAnnotationMouseMove}
              />
          : null
      }
      {
        annotations.map((annotation, index) => (
          <Annotation
            image={image}
            key={index}
            hix={hix}
            aix={index}
            mode={mode}
            hover={hix === index}
            annotation={annotation}
            onDeleteAnnotation={onDeleteAnnotation}
            onLabelChange={onLabelChange}
            onPointClick={onPointClick}
            onPointMouseEnter={onPointMouseEnter}
            onPointMouseLeave={onPointMouseLeave}
            onShapeClick={onShapeClick}
            onShapeMouseEnter={onShapeMouseEnter}
            onShapeMouseLeave={onShapeMouseLeave}
          />
        ))
      }
    </Svg>
  </LabelerContainer>
)

export default Labeler;
