package Common

import (
	"github.com/skip2/go-qrcode"
)


//二维码工具
func  Code(id string){
	qrcode.WriteFile(id,qrcode.Medium,256,"./imageAssets/qr/"+id+".png")
}
