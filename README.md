# skiaJS

The N-API bindings for [Skia Graphics Library](https://skia.org/) 2D graphics library which provides common APIs that work across a variety of hardware and software platforms. It serves as the graphics engine for Google Chrome and Chrome OS, Android, Mozilla Firefox and Firefox OS, and many other products.

## Platforms
Mac OS, Linux, Windows
Nodejs 10

## Example
### skiaJS

```js
// Rect
const fill = skPaintNew();
skPaintSetColor(fill, skColorSetArgb(0xFF, 0xFF, 0x00, 0xFF));
const rect = new skRect({
    left: 100,
    top: 100,
    right: 200,
    bottom: 200
});
skCanvasDrawRect(canvas, rect, fill);

// Text
const familyName = "Times New Roman";
const style = skFontstyleNew(400, 1, enums.UPRIGHT_SK_FONT_STYLE_SLANT);
const typeface = skTypefaceCreateFromNameWithFontStyle(familyName, style);
const text = skPaintNew();
skPaintSetColor(text, skColorSetArgb(0xFF, 0xFF, 0x00, 0x00));
skPaintSetTextsize(text, 50.0);
skPaintSetTypeface(text, typeface);
const str = "skiaJS";
skCanvasDrawText(canvas, str, str.length, 100, 100, text);

// Svg Path
const stroke = skPaintNew();
skPaintSetColor(stroke, skColorSetArgb(0xFF, 0x00, 0x00, 0xFF));
skPaintSetAntialias(stroke, true);
skPaintSetStyle(stroke, enums.STROKE_SK_PAINT_STYLE);
skPaintSetStrokeWidth(stroke, 5.0);
const path = skPathNew();
const svg = "m451.111 451.111h-451.111v-451.111h451.111zm-386.667-64.444h322.222v-322.223h-322.222z";
skPathParseSvgString(path, svg);
skCanvasDrawPath(canvas, path, stroke);
```
### self-draw engine


| 技术      | 用途 |
| ----------- | ----------- |
| Nodejs  | 实现语言       |
| SharpSkia   | Node模块，图形库 |
| yoga | 计算Flex布局 |
| weex-js-framework | 实现Weex宿主环境 |

```sh
node weex-jsfm/index.js
```