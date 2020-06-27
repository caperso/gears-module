import React, { CSSProperties, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { CanvasMode, Point2D, Size } from './canvas';
import CanvasRect from './CanvasRect';

interface Props {
  size: Size | null; // size of the canvas //! change will remove all canvas stroke
  color: string;
  rects: CanvasRect[]; // canvas rect instances
  setRects: (rects: CanvasRect[]) => any; // canvas rect setter
  mode?: CanvasMode;
  blockVisible?: boolean;
  onClick?: (instance: CanvasRect) => any;
}

const defaultClassName = 'g-canvas-ghost-div';
const selectedClassName = `${defaultClassName} selected`;

export const CanvasCharged = ({ size, color = '#f11', onClick, rects, setRects, blockVisible = false, mode = 'draw' }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);

  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [originPoint, setOriginPoint] = useState<Point2D>();
  const [drawingsData, setDrawingsData] = useState<ImageData>();

  useLayoutEffect(() => {
    canvasRef.current && setCtx(canvasRef.current.getContext('2d')!);
  });

  // handle draw mode
  const handleDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    mode === 'draw' && beginDraw(e);
  };

  const handleMove = (e: React.MouseEvent) => {
    mode === 'draw' && drawing(e);
  };

  const handleUp = (e: React.MouseEvent) => {
    mode === 'draw' && endDraw(e);
  };

  // handle instance clicked
  function handleInstanceClick(instance: CanvasRect) {
    const nodes = document.getElementsByClassName(defaultClassName);
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      node.className = defaultClassName;
    }
    const node = instance.dom;
    node && (node.className = selectedClassName);
    // setSelectId(instance.id)
    onClick && onClick(instance);
  }

  // select
  const [selectId, setSelectId] = useState<number | null>(null);

  // remove instance
  //   const removeItem = () => {
  //     if (mode === 'draw') {
  //       return;
  //     }
  //     selectId !== null &&
  //       setRects(s => {
  //         const updatedState = [...s];
  //         const newState = updatedState.filter(item => item.id !== selectId);
  //         return newState;
  //       });
  //     setSelectId(null);
  //   };

  // draw data
  useEffect(() => {
    if (size && ghostRef.current) {
      console.log('drawing');

      ctx?.clearRect(0, 0, size.w, size.h);
      for (let i = 0; i < ghostRef.current.childNodes.length; i++) {
        const element = ghostRef.current.childNodes[i];
        ghostRef.current?.removeChild(element);
      }

      rects.forEach(item => {
        item.dom === null && item.createDiv(handleInstanceClick, blockVisible, color);
        item.insertDiv(ghostRef.current!);
        item.draw(ctx!);
      });
    }
  }, [rects, size, ghostRef.current]);

  // handle draw mode
  function beginDraw(e: React.MouseEvent) {
    // if user accidentally missed mouseup method,re-fire it.
    if (originPoint) {
      endDraw(e);
    } else {
      setOriginPoint(CanvasRect.getCoordinates2D(e));
      if (canvasRef.current && ctx) {
        const w = canvasRef.current.width;
        const h = canvasRef.current.height;
        const data = ctx.getImageData(0, 0, w, h);
        console.log('CanvasCharged:save data::', { data, w, h });
        setDrawingsData(data);
      }
    }
  }

  function drawing(e: React.MouseEvent) {
    if (originPoint && ctx && canvasRef.current && drawingsData) {
      ctx.putImageData(drawingsData, 0, 0);
      let rect = new CanvasRect(originPoint, CanvasRect.getCoordinates2D(e), color);
      rect.draw(ctx);
    }
  }

  function endDraw(e: React.MouseEvent) {
    if (originPoint && ctx && ghostRef.current) {
      const crossPoint = CanvasRect.getCoordinates2D(e);
      const tooClose: boolean = Math.abs(originPoint.x - crossPoint.x) < 3 || Math.abs(originPoint.y - crossPoint.y) < 3;
      if (tooClose) {
        return;
      }
      let rect = new CanvasRect(originPoint, crossPoint, color);
      const instance = rect.createDiv(handleInstanceClick, blockVisible, color);
      const newStack: CanvasRect[] = [...rects, instance];
      setRects(newStack);
      ctx && ctx.save();
    }
    setOriginPoint(undefined);
  }

  const wrapperStyle: CSSProperties = {
    width: size?.w,
    height: size?.h,
  };

  const ghostStyle: CSSProperties = mode === 'select' ? { zIndex: 1 } : {};

  return (
    <div className="g-canvas-wrapper" style={wrapperStyle}>
      <div style={ghostStyle} className="g-canvas-ghost-collection" ref={ghostRef}></div>
      <canvas
        onMouseDown={handleDown}
        onMouseMove={handleMove}
        onMouseUp={handleUp}
        width={size?.w}
        height={size?.h}
        ref={canvasRef}
        onClick={e => e.preventDefault()}
        className="g-canvas"
      />
    </div>
  );
};