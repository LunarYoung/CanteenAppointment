package Controller

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"shitang/Databases"
	"shitang/Models"
)

//菜的列表首页
func ShowFood(c *gin.Context)  {

	var foodList  []Models.FoodList
	Databases.DB.Find(&foodList)
	jsons, errs := json.Marshal(foodList)
	if errs != nil {
		fmt.Println(errs.Error())
	}
	fmt.Println(string(jsons))

}

//首页添加购物车

//购物车提交订单页

//订单正在送页

//订单正在送页 收货

//登陆


//联系
func Link(c *gin.Context)  {
	//先获取id
	Databases.DB.AutoMigrate(Models.User{})
	link := c.PostForm("phone")
	u1:= Models.User{Phone:link}
	Databases.DB.Create(&u1)
}
//地址

func Address(c *gin.Context)  {
	//先获取id
	address := c.PostForm("address")
	u1:= Models.User{Address:address}
	Databases.DB.Create(&u1)

}
//历史订单
func Query(c *gin.Context)  {
	Databases.DB.AutoMigrate(Models.Orders{})
	//userId :=c.Param("id")
	userId:="455"
	var query  []Models.Orders
	Databases.DB.Where("user_id = ?",userId ).Find(&query)
	jsons, errs := json.Marshal(query)
	if errs != nil {
		fmt.Println(errs.Error())
	}
	fmt.Println(string(jsons))
}



//向食堂题建议
func AddAdvise(c *gin.Context)  {
	foodName := c.PostForm("foodName")
	advise := c.PostForm("advise")
	advises := Models.Advise{FoodName:foodName, Advise:advise}
	Databases.DB.Create(&advises)
}


//声明
func AppState(c *gin.Context){
	var state string ="省略号发量减少考试合格率考试合格率开始改好了谁开个会"
	c.JSON(200,gin.H{"state":state})
}
