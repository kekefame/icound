/*定义数组结构*/
todo=[
    {    
        id:1,
        title:"新列表",
        color:"#f5f",
        list:[
            {
                content:"1024u37854774289",
                date:"29eu3r",
                done:true
            },
            {
                content:"22222222222222",
                date:"22e2er",
                done:true
            }
        ]
    },
    {    
        id:2,
        title:"新列表1",
        color:"#ff0",list:[
            {
                content:"已完成事件？？？？？",
                date:"29eu3r",
                done:false
            },
            {
                content:"已完成事件？？？？？",
                date:"29eu3r",
                done:false
            },
            {
                content:"22222222222222",
                date:"22e2er",
                done:true
            }
        ]
    }
]

var icloud=angular.module("icloud",[]);
icloud.controller("todo",function($scope){
    $scope.todo=todo;
    $scope.color=["#C970E3","#6EDC31","#3FABF8","#F2CC00","#A0855E","#F82469","#F99600"];
    $scope.ids=0;
    $scope.index=0;
    // 添加新数据
    // $scope.todo.length%7
    $scope.add=function(){
        $scope.ids=$scope.todo[$scope.todo.length-1].id+1;
       $scope.todo.push({
            id:$scope.ids,
            title:"新列表"+$scope.ids,
            color:$scope.color[$scope.todo.length%7],
            list:[]
        })
        $scope.index=$scope.todo.length-1;
         getNum();
    }
    // getNum();
    // 已完成事件的数量
    function getNum(){
        $scope.doneNum=0;
         angular.forEach($scope.todo[$scope.index].list,function(o,i){
            console.log($scope.index);
            if(o.done==true){
                $scope.doneNum++;
            }
        })
    }
    $scope.done=function(val,index,arr){
        return val.done==true?true:false;
    }
    $scope.doing=function(val,index,arr){
        return val.done==false?true:false;
    }

    //选择新列表
    $scope.select=function(i){
        $scope.index=i;
        getNum();
        $scope.flag=true;
        $scope.f=false;
    }
    $scope.flag=true;
    // 新增列表
    $scope.addlist=function(){
        $scope.todo[$scope.index].list.push({
            content:'',
            date:new Date().getTime(),
            done:false
        })
    }

    // status为当前状态 点击时改变list中内容的状态
    $scope.changeDone=function(obj,status){
        // $scope.todo[$scope.index].list[i].done=status;
        obj.done=status;
    }
    // $scope上的俩个方法
    // $watch（要监视的属性，function(new(新值),now(旧值))） 检测视图更新变化   $apply通知视图更新
    $scope.$watch("index",function(){
        getNum();
    });
    $scope.$watch("todo",function(){
        // savedate();
        getNum();
    },true);



});





// $scope.$watch()
