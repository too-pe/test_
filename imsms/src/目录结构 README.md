# 本项目目前整体结构：

[imsms]
-pages                        [网络页面]
--page1                       [页面名]
---main_component             [一个网络页面的父组件]
---main_component_css         [父组件的css文件]
---other_component            [组成父组件的子组件]
----component_1               
----component_2
---other_component_css        [子组件的css文件]
----other_component_css_1     
----other_component_css_2
--page2
--page3
--public_component            [公共的组件(需要经常复用的组件)]
---component_1              
---component_2
--public_component_css        [公共组件的css文件]
---component_css_1          
---component_css_2
--App.js                      [包含所有页面组件的根组件]
--index.js                    [入口文件，渲染路由]
--Router.js                   [路由文件，用来页面跳转]

