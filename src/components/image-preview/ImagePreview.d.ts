import React from 'react';
import './ImagePreview.less';
declare type ImageControlMode = 'free-rotate' | 'free-drag' | 'ratio-scale';
declare type ImageAction = 'rotate' | 'drag' | 'ratio-scale' | 'zoom-in' | 'zoom-out' | 'reset';
declare type ImageOperation = ImageAction | ImageControlMode;
export declare type ImageOperationMap = {
  [key in ImageOperation]?: (props?: any) => void;
};
export declare type OperatorBarProps = ImageOperation[] | React.ReactElement | null;
export interface BaseImageProps {
  w: number;
  h: number;
  r: number;
  l: number;
  t: number;
  translate: string;
}
interface Props {
  url: string;
  visible: boolean;
  onClose: () => void;
  simpleMode?: boolean;
  operatorBar?: 'default' | OperatorBarProps | null;
  fixedOnScreen?: boolean;
  getImageLoadedSize?: (state: BaseImageProps) => void;
}
export declare function ImagePreview(this: any, props: Props): JSX.Element;
export {};
