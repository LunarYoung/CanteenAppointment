package Controller

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"math/rand"
	"net/http"
	"shitang/Common"
	"shitang/Databases"
	"shitang/Models"
	"strconv"
	"time"
)


//菜的列表首页
func ShowFood(c *gin.Context)  {

	var foodList  []Models.FoodList
	Databases.DB.Find(&foodList)
	c.JSON(200,foodList)

}



//购物车提交订单页
func HandleOrder(c *gin.Context)  {

	var orders Models.Orders
	if err := c.ShouldBind(&orders); err == nil {


		order := Models.Orders{UserId:orders.UserId,GetNum:orders.GetNum,
		OrderNum:orders.OrderNum,OrderTime:orders.OrderTime,Address:orders.Address,
		Phone:orders.Phone,Price:orders.Price,Type:orders.Type,FoodName:orders.FoodName,
		FoodName1:orders.FoodName1,FoodNum:orders.FoodNum,FoodNum1:orders.FoodNum1,
		FoodUrl:orders.FoodUrl,FoodUrl1:orders.FoodUrl1,Remark:orders.Remark}
		Databases.DB.Create(&order)


		c.JSON(http.StatusOK, gin.H{
			"userId":orders.UserId,
			"getNum":orders.GetNum,
			"orderNum": orders.OrderNum,
			"time":orders.OrderTime,
			"address":orders.Address,
			"phone":orders.Phone,
			"allPrice":orders.Price,
			"foodType":orders.Type,
			"foodName":orders.FoodName,
			"foodName1":orders.FoodName1,
			"foodNum":orders.FoodNum,
			"foodNum1":orders.FoodNum1,
			"url":orders.FoodUrl,
			"url1":orders.FoodUrl1,
			"remark":orders.Remark,
		})

	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	//销量增加1
	Databases.DB.Model(&Models.FoodList{}).Where("name = ?",orders.FoodName).UpdateColumn("month_sell", gorm.Expr("month_sell + ?", 1))
	Databases.DB.Model(&Models.FoodList{}).Where("name = ?",orders.FoodName1).UpdateColumn("month_sell", gorm.Expr("month_sell + ?", 1))

}



//订单正在送页
func MyOrder(c *gin.Context){
	userId :=c.PostForm("userId")
	var order  []Models.Orders
	Databases.DB.Where("user_id = ? AND user_cf = ?",userId,"" ).Find(&order)
	c.JSON(200,order)
	jsons, errs := json.Marshal(order)
	if errs != nil {
		fmt.Println(errs.Error())
	}
	fmt.Println(string(jsons))

}


//订单正在送页 收货
func CfMyOrder(c *gin.Context){
	userId :=c.PostForm("userId")
	getNum :=c.PostForm("getNum")

	var order  []Models.Orders

	//Databases.DB.Model(&Models.FoodList{}).Where("image_id = ?", id).Update("price",price)
	Databases.DB.Model(&Models.Orders{}).Where("user_id = ? AND get_num = ?",userId,getNum ).Update("user_cf","已完成")
	c.JSON(200,order)
	jsons, errs := json.Marshal(order)
	if errs != nil {
		fmt.Println(errs.Error())
	}
	fmt.Println(string(jsons))


}


//登陆
func AppLogin(c *gin.Context){

	code := c.PostForm("code")

	appID := "自己的id"
	appSecret:= "自己的口令"
	code2sessionURL := "https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code"
	url := fmt.Sprintf(code2sessionURL, appID, appSecret, code)

	resp, err := http.DefaultClient.Get(url)
	if err != nil {
		println( err)
	}
	var wxMap map[string]string
	err = json.NewDecoder(resp.Body).Decode(&wxMap)
	if err != nil {
		println( err)
	}

	var openId = wxMap["openid"]

	rand.Seed(time.Now().UnixNano())
	userId := rand.Intn(10000)
	Id :=strconv.Itoa(userId)
    Common.Code(Id)


	qrUrl:="http://127.0.0.1/imageAssets/qr/"+Id+".png"
	mmp := make(map[string]interface{})
	mmp["qrUrl"] = qrUrl
	mmp["userId"] = Id

	c.JSON(200, mmp)
	defer resp.Body.Close()
	user := Models.User{WxId:openId,UserId:Id,QrUrl:qrUrl}
	Databases.DB.Create(&user)

}

func GetLoginInfo(c *gin.Context){

}



//联系
func Link(c *gin.Context)  {
	//先获取id
	id := c.PostForm("userId")
	phone := c.PostForm("phone")


	Databases.DB.Model(&Models.User{}).Where("user_id =?", id).Update("phone",phone)

}


//地址
func Address(c *gin.Context)  {
	//先获取id
	id := c.PostForm("userId")
	address := c.PostForm("address")
	Databases.DB.Model(&Models.User{}).Where("user_id =?", id).Update("address",address)

}


//历史订单
func Query(c *gin.Context)  {
	Databases.DB.AutoMigrate(Models.Orders{})
	//userId :=c.Param("id")
	userId:=c.PostForm("userId")
	println(userId)
	var query  []Models.Orders
	Databases.DB.Where("user_id = ?",userId ).Find(&query)
	c.JSON(200,query)
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
	t := time.Now()
	nowTime:=t.Format("2006-01-02 15:04:05")
	advises := Models.Advise{FoodName:foodName, Advise:advise,Time:nowTime}
	Databases.DB.Create(&advises)
}


