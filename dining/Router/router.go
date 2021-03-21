package Router

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"shitang/Controller"
	"shitang/Middleware"
)

func InitRouter() {
	router := gin.Default()
	// 要在路由组之前全局使用「跨域中间件」
	router.Use(Middleware.Cors())

	//pc端口
	v1 := router.Group("dining")
	{
		v1.POST("/login", Controller.Login)
		v1.GET("/", Controller.Index)

		v1.POST("/diningPu", Controller.DiningPu)
		v1.POST("/diningFi", Controller.DiningFi)

		v1.GET("/outFood", Controller.OutFood)
		v1.POST("/outFoodOp", Controller.OutFoodOp)

		v1.GET("/OrdersRecord", Controller.OrdersRecord)

		v1.GET("/opinion", Controller.Opinion)
		v1.POST("/opinionDe", Controller.OpinionDe)

		v1.GET("/sales",Controller.Sales)
		v1.GET("/salesFood",Controller.SalesFood)

		v1.POST("/addFood",Controller.AddFood)
		v1.GET("/manageFood",Controller.ManageFood)
		v1.POST("/foodEdit",Controller.FoodEdit)
		v1.POST("/foodDe",Controller.FoodDe)


		v1.GET("/pull",Controller.PullUp)
		v1.POST("/pullOp",Controller.PullUpOp)

	}


	//小程序端口
	v2 := router.Group("Applets")
	{
		//v2.GET("/code/image", Common.Code)
		v2.POST("/query", Controller.Query)
		v2.POST("/myOrder", Controller.MyOrder)
		v2.POST("/cfMyOrder", Controller.CfMyOrder)
		v2.GET("/showFood", Controller.ShowFood)
		v2.POST("/addAdvise",Controller.AddAdvise)
		v2.POST("/phone",Controller.Link)
		v2.POST("/address",Controller.Address)
		v2.POST("/login",Controller.AppLogin)
		v2.POST("/handleOrder",Controller.HandleOrder)
	}

    //设置外部访问静态资源
	router.StaticFS("/imageAssets", http.Dir("./imageAssets"))

	router.Run(":80")

}
