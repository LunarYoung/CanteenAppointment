package main

import (
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"shitang/Databases"
	"shitang/Router"
)

func main() {

	Router.InitRouter()
	defer Databases.DB.Close()

}


