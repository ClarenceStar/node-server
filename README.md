# 后台管理系统的NodeServer
项目结构如下
```
├── bin                        后台部署的脚本
├── controller                 操作dao层的控制类
├── dao                        dao层
├── database                   数据库的配置
│   ├── build.js               构建服务
│   ├── start.js               启动服务
│   ├── test.js                测试服务
├── public                     公共元素
├── routes                     express的路由
├── views                      界面文件
├── .gitignore
├── app.js                     项目入口文件
├── package.json               
├── README.md
```



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000||3004
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Extra Work
此后台需要配合mysql数据库使用 在自己的数据库中按照如下命令创建一个表
```sql语句

create table user
(
  id        int auto_increment
    primary key,
  userName  varchar(45)  not null,
  passWord  varchar(45)  not null,
  nickName  varchar(50)  null,
  portrait  varchar(100) null,
  email     varchar(50)  null,
  residence varchar(100) null,
  gender    varchar(10)  null,
  constraint userName_UNIQUE
  unique (userName)
);


