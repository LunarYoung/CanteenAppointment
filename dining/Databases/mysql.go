package Databases

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)


var (DB *gorm.DB)

func init(){
	var err error
	DB, err = gorm.Open("mysql", "root:666666@/dining?charset=utf8&parseTime=true")
	if err != nil {
		fmt.Printf("mysql connect error %v", err)
		}
	}
