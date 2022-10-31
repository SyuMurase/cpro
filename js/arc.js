// element = <canvas width="200" height="200"></canvas>
var context = element.getContext( "2d" ) ;

// パスをリセット
context.beginPath () ;

// 円の中心座標: (100,100)
// 半径: 50
// 開始角度: 0度 (0 * Math.PI / 180)
// 終了角度: 360度 (360 * Math.PI / 180)
// 方向: true=反時計回りの円、false=時計回りの円
context.arc( 100, 100, 50, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;

// 塗りつぶしの色
context.fillStyle = "rgba(255,0,0,0.8)" ;

// 塗りつぶしを実行
context.fill() ;

// 線の色
context.strokeStyle = "purple" ;

// 線の太さ
context.lineWidth = 8 ;

// 線を描画を実行
context.stroke() ;