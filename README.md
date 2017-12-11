# Responsive-Layout
响应式布局
## 布局
  使用bootstrap来布局
  头部：@font-face{
    font-family:"";
    src:url(),url()....
  }
### 轮播图：
	大图片做背景，小图片直接使用img标签
	backgeround-image：属性要写在行内，因为后台修改是不加载css样式表
#注意事项
  ① 固定宽度，且浮动的盒子要先写浮动的盒子【设置一侧固定，一侧宽度自适应】
  ② 文字超过盒子区域设置为省略号的方法：
  ```css
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  ```
  盒子必须有宽度
