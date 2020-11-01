package Common

import (
	"github.com/gin-gonic/gin"
	"github.com/skip2/go-qrcode"
)


//二维码工具
func  Code(c *gin.Context){
	var id  ="555"
	qrcode.WriteFile(id,qrcode.Medium,256,"./imageAssets/qr/"+id+".png")
}
