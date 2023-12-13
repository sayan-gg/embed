// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Point } from './Point';
import type { Rect } from './Rect';

export type ResizeType =
    | { Clipped: { clip_rect: Rect; clip_size: Point } }
    | { Scaled: { scale: number } }
    | { Free: { size: Point } }
    | 'Constant'
    | 'NotInteractable';
