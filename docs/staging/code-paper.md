---
group:
    title: staging
nav:
    title: Staging
demo: code-paper
toc: menu
---

## demo

<code src="@/components/code-paper/demo/demo.tsx" />

## API

| 参数               | 是否必须 | 类型        | 默认值 | 说明           |
| :----------------- | :------- | :---------- | :----- | :------------- |
| url                | true     | string      | ''     | 图片地址       |
| visible            | true     | boolean     | false  | 可视状态       |
| onClose            | true     | () => void; | null   | 关闭时候的回调 |
| simpleMode         | false    | boolean     | true   |                |
| operatorBar        | true     |             | null;  |                |
| fixedOnScreen      | false    | boolean     | true   |                |
| getImageLoadedSize | false    |             | null   |                |