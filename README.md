<!--
 * @Author: CollapseNav
 * @Date: 2019-12-28 22:58:46
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-29 15:59:19
 * @Description:
 -->
# Angular-DotnetCore-Demo

## 简介

前段时间想学学前端，然后试了试 **Angular** ，觉得很赞，于是打算做个小 **demo**

这只是个练手用的小项目，所以也没打算做到多完备，以后可能也不会再更新了

里面有很多不规范不统一的地方，我比较懒，不想改

## 项目介绍

本项目由 **.net core cli** 的 **angular** 模板修改而来

### Ng.Net.Repository

没啥好说的

### Ng.Net.Application

没啥好说的

### Ng.Net.Web

没啥好说的

## Init

**dotnet** 部分

```terminal
cd .\Ng.Net.Web

dotnet build

dotnet ef migrations add init

dotnet ef database update
```

**Angular** 部分

```terminal
cd .\Ng.Net.Web\ClientApp

npm install
```

以上操作完成**之后**

启动 **dotnet** 项目

```terminal
cd .\Ng.Net.Web

dotnet run
```

启动 **Angular** 项目

```terminal
cd .\Ng.Net.Web\ClientApp\src

ng serve -o
```

默认页面是一个 ~~404~~ 页面

## 预览

~~404~~

![404-Page](https://raw.githubusercontent.com/CollapseNav/MyImage/master/Angular-DotnetCore-Demo/Img/404page.png)

**SignIn** Page

![SignIn-Page](https://raw.githubusercontent.com/CollapseNav/MyImage/master/Angular-DotnetCore-Demo/Img/signinpage.png)

**SignUp** Page

![SignUp-Page](https://raw.githubusercontent.com/CollapseNav/MyImage/master/Angular-DotnetCore-Demo/Img/signuppage.png)

**Counter** Page

![Counter-Page](https://raw.githubusercontent.com/CollapseNav/MyImage/master/Angular-DotnetCore-Demo/Img/counter.png)

**Editer** Page

![Editer-Page](https://raw.githubusercontent.com/CollapseNav/MyImage/master/Angular-DotnetCore-Demo/Img/editer.png)

**Table** Page

![Table-Page](https://raw.githubusercontent.com/CollapseNav/MyImage/master/Angular-DotnetCore-Demo/Img/table.png)

## 其他

* 做了跨域(第一次搞这个)
* 做了jwt(第一次搞这个)
* 用了 **Sqlite** 做数据库
* 用了bootstrap(一直是不大会用的状态)
* 还有其他一些很没用的东西
