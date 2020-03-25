---
group:
    title: staging
nav:
    title: Staging
title: context-menu
toc: menu
---

## Overview

## demo

组件名称：图片预览（ImagePreview）
基础操作: 滚轮缩放 拖拽
菜单操作: 旋转 重置

<code src="@/components/context-menu/demo/demo.tsx" />

<code src="@/components/context-menu/demo/demo.tsx" />

<code src="@/components/context-menu/demo/demo.tsx" />

## API

| 参数               | 是否必须 | 类型        | 默认值 | 说明                                                        |
| :----------------- | :------- | :---------- | :----- | :---------------------------------------------------------- |
| url                | true     | string      | ''     | 图片地址                                                    |
| visible            | true     | boolean     | false  | 可视状态                                                    |
| onClose            | true     | () => void; | null   | 关闭时候的回调                                              |
| simpleMode         | false    | boolean     | true   | 简易模式, 当为 true 时, operatorBar 和 fixedOnScreen 不可控 |
| operatorBar        | true     |             | null;  | 控制条, 'default' 则生成默认操作栏,简易模式下必定为 null    |
| fixedOnScreen      | false    | boolean     | true   | 是否在整个全屏遮罩固定, 简易模式下必定为 true               |
| getImageLoadedSize | false    |             | null   | 图片加载成功后返回图片的加载尺寸                            |