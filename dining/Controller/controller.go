package Controller

import (
	_ "encoding/json"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"path"
	"shitang/Databases"
	"shitang/Models"
	"time"
)


//管理员登陆
func Login(c *gin.Context){
	 name := c.PostForm("name")
	 password := c.PostForm("password")
	 err := Databases.DB.Where("name = ? AND password = ?", name, password).Find(&Models.Admin{}).Error
	 if err!=nil{
	 	c.JSON(400,gin.H{"error":err.Error()})

	 }else {
	 	c.JSON(200,gin.H{"name":name,"password":password})
	 	c.Redirect(http.StatusMovedPermanently,"dining")
	 }
}


//堂食订单处理界面
func Index(c *gin.Context){
	var foodType string ="堂食"
	var finish bool = false   //true完成订单
	var pullUp bool = false   //没有挂起订单
	Databases.DB.AutoMigrate(&Models.Orders{})
	var orders  []Models.Orders
	Databases.DB.Where("type = ? AND finish = ? AND pull_up= ?", foodType,finish,pullUp).Find(&orders)

	c.JSON(200,orders)

	//jsons, errs := json.Marshal(ordering)
	//if errs != nil {
	//	fmt.Println(errs.Error())
	// }
	//fmt.Println(string(jsons))
}


//堂食订单挂起
func DiningPu(c *gin.Context)  {
	var orderId  = c.PostForm("orderId")
	var pull bool =true
	//Databases.DB.Where("order_num = ?", orderId).Delete(Models.Orders{})
	Databases.DB.Model(&Models.Orders{}).Where("order_num = ?", orderId).Update("pull_up",pull)

}


//堂食订单完成
func DiningFi(c *gin.Context)  {
	var orderId  = c.PostForm("orderId")
	var finish bool =true
	//Databases.DB.Where("order_num = ?", orderId).Delete(Models.Orders{})
	Databases.DB.Model(&Models.Orders{}).Where("order_num = ?", orderId).Update("finish",finish)
}



//挂起处理
func PullUp(c *gin.Context)  {
	var pullUp bool = true
	var finish bool = false
	var orders []Models.Orders
	Databases.DB.Where("pull_up = ? AND finish = ? ", pullUp,finish).Find(&orders)
	c.JSON(200,orders)
}


func PullUpOp(c *gin.Context)  {
	var orderId  = c.PostForm("orderId")
	var finish bool =true
	//Databases.DB.Where("order_num = ?", orderId).Delete(Models.Orders{})
	Databases.DB.Model(&Models.Orders{}).Where("order_num = ?", orderId).Update("finish",finish)
}



//外卖订单页面
func OutFood(c *gin.Context) {
	var foodType string = "外卖"
	var finish bool = false  //True为完成
	var pullUp bool = false   //没有挂起订单
	var orders []Models.Orders
	Databases.DB.Where("type = ? AND finish =  ? AND pull_up =?", foodType,finish,pullUp).Find(&orders)
    c.JSON(200,orders)
}


//外卖订单操作页面
func OutFoodOp(c *gin.Context){
	var orderId  = c.PostForm("orderId")
	var finish bool =true
	//Databases.DB.Where("order_num = ?", orderId).Delete(Models.Orders{})
	Databases.DB.Model(&Models.Orders{}).Where("order_num = ?", orderId).Update("finish",finish)

}



//销量分析
func Sales(c *gin.Context){
	//求一天数量，堂食，外卖数据,循环
	var sum[7] int
	var outFood[7] int
	var inFood[7] int
	//var money [5] int
	t := time.Now()

	mid,_:=time.ParseDuration("-24h")
	nowTime:=t.Format("2006/01/02 15:04:05")
	last1Time:=nowTime
	midTime:=t
	for i := 0; i <7; i++ {

		midTime=midTime.Add(mid)
		lastTime:=midTime.Format("2006/01/02 15:04:05")

		println(lastTime)
		println(last1Time)
		println("------")

		Databases.DB.Model(&Models.Orders{}).Where("type = ? AND order_time > ? AND order_time < ? ", "堂食",lastTime,last1Time).Count(&inFood[i])
		Databases.DB.Model(&Models.Orders{}).Where("type = ? AND order_time > ? AND order_time < ? ", "外卖",lastTime,last1Time).Count(&outFood[i])
		Databases.DB.Model(&Models.Orders{}).Where("order_time > ? AND order_time < ? ",lastTime,last1Time).Count(&sum[i])
		last1Time=lastTime


	}

	//laterTime := t.Add(midTime)
	//lastTime:=laterTime.Format("2006-01-02 15:04:05")
	//
	//println(lastTime)
	//
	//Databases.DB.Model(&Models.Orders{}).Where("type = ? AND order_time > ? AND order_time < ? ", "堂食",nowTime,lastTime).Count(&inFood)
	//Databases.DB.Model(&Models.Orders{}).Where("type = ? AND order_time > ? AND order_time < ? ", "外卖",nowTime,lastTime).Count(&outFood)
	//Databases.DB.Model(&Models.Orders{}).Where("order_time > ? AND order_time < ? ", nowTime,lastTime).Count(&sum)
	//
	////求一天的销量金额总和
	//var result []int64
	//var sumMoney int64
	//Databases.DB.Table("orders").Pluck("SUM(price) as result",&result )

	c.JSON(200,gin.H{"a":inFood,"b":outFood,"c":sum})


}


//菜品分析
func SalesFood(c *gin.Context){

	var foodList  []Models.FoodList
	Databases.DB.Order("month_sell").Find(&foodList )
     name :=make([] string,len(foodList))
     num :=make([] int,len(foodList))

	for i := 0; i <len(foodList); i++ {
		name[i]=foodList[i].Name
		num[i]=foodList[i].MonthSell
	}

	c.JSON(200,gin.H{"a":name,"b":num})


}


//编辑菜
func ManageFood(c *gin.Context){
	Databases.DB.AutoMigrate(&Models.FoodList{})
	var foodList  []Models.FoodList
	Databases.DB.Find(&foodList)
	c.JSON(200,foodList)
}


func FoodEdit(c *gin.Context){
	var price  =c.PostForm("price")
	var id = c.PostForm("imageId")
	Databases.DB.Model(&Models.FoodList{}).Where("image_id = ?", id).Update("price",price)
}


func FoodDe(c *gin.Context){
	//Databases.DB.AutoMigrate(&Models.FoodList{})
	var id  =c.PostForm("imageId")
	println(id)
	Databases.DB.Where("image_id = ?", id).Delete(Models.FoodList{})
}


//增加菜
func AddFood(c *gin.Context)  {
	Databases.DB.AutoMigrate(Models.FoodList{})
	foodName := c.PostForm("name")
	foodPrice := c.PostForm("price")
	println(foodName)
	println(foodPrice)
	file, err := c.FormFile("file")
	if err != nil {
		println(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}
	log.Println(file.Filename)
	dst := path.Join("imageAssets/food", file.Filename)
	_  = c.SaveUploadedFile(file,dst)
	path1 :="http://127.0.0.1/imageAssets/food/"+file.Filename
	foodList := Models.FoodList{Name:foodName, Price:foodPrice,ImageUrl:path1}
	Databases.DB.Create(&foodList)
}


//订单记录
func OrdersRecord(c *gin.Context){
	Databases.DB.AutoMigrate(Models.Orders{})
	var orders  []Models.Orders
	var finish bool = true
	Databases.DB.Where(" finish = ?", finish).Find(&orders)
	c.JSON(200,orders)
}


//意见处理
func Opinion(c *gin.Context){
	Databases.DB.AutoMigrate(&Models.Advise{})
	var advise  []Models.Advise
	Databases.DB.Find(&advise)
	c.JSON(200,advise)
}


//意见处理删除
func OpinionDe(c *gin.Context){
	var id  =c.PostForm("Id")
	Databases.DB.Where("id = ?", id).Delete(Models.Advise{})
}

