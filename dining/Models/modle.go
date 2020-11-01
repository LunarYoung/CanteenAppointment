package Models

//管理员
type Admin struct {
	Name string
	Password string
}

//用户
type User struct {
	WxId string   `gorm:"primary_key"`
	UserId string
	Address string
	Phone string
	CodeUrl string
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
	OrderNum int    `gorm:"primary_key"`
	UserId string    `gorm:"not null;unique"`
	OrderTime string
	Address string
	Phone int
	Price int
	Type string
	FoodName string
	FoodName1 string
	FoodUrl string
	FoodUrl1 string
	Remark string
	PullUp bool  //挂起
	Finish bool   //完成标记

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

