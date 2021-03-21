package Models

//管理员
type Admin struct {
	Name string
	Password string
}

//用户
type User struct {
	WxId string    `gorm:"not null;unique"`
	UserId string
	Address string
	Phone string
	QrUrl string
	ImageUrl string
}

//菜单列表
type FoodList struct {
	Name string
	Price string
	ImageUrl string
	ImageId int `gorm:"primary_key"`
	MonthSell int
}

//进行订单
type Orders struct {
	OrderNum string    `gorm:"primary_key" form:"orderNum" json:"orderNum" binding:"required"`
	GetNum string `form:"getNum"  json:"getNum" binding:"required"`
	UserId string    `gorm:"not null" form:"userId" json:"userId" binding:"required"`
	OrderTime string `form:"time" json:"time"`
	Address string  `form:"address" json:"address"`
	Phone string  `form:"phone" json:"phone"`
	Price int ` gorm:"not null" form:"allPrice" json:"allPrice" binding:"required"`
	Type string `form:"type" json:"type" binding:"required"`
	FoodName string `form:"foodName" json:"foodName" binding:"required"`
	FoodName1 string `form:"foodName1" json:"foodName1" `
	FoodNum string `form:"foodNum" json:"foodNum" binding:"required"`
	FoodNum1 string `form:"foodNum1" json:"foodNum1" `
	FoodUrl string `form:"url" json:"url" `
	FoodUrl1 string  `form:"url1" json:"url1" `
	Remark string `form:"remark" json:"remark" `
	PullUp bool  //挂起
	Finish bool   //完成标记
	UserCf string //用户确认

}

//购物车



//建议
type Advise struct {
	ID uint `gorm:"primary_key"`
	Time string
	FoodName string
	Advise string
}



type Info struct {
	Id uint  `gorm:"AUTO_INCREMENT"`
	Name string
	Price uint
}

