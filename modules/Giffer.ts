const GifEncoder = require("gif-encoder-2");
import { writeFile } from "fs/promises";

class Giffer {
  canvas: any;
  ctx: any;
  fileName: any;
  repeat: any;
  quality: any;
  delay: number;
  gifEncoder: any;
  constructor(
    _canvas: any,
    _ctx: any,
    _fileName: any,
    _repeat: any,
    _quality: any,
    _delay: number
  ) {
    this.canvas = _canvas;
    this.ctx = _ctx;
    this.fileName = _fileName;
    this.repeat = _repeat;
    this.quality = _quality;
    this.delay = _delay;
    this.initGifEncoder();
  }

  initGifEncoder = () => {
    this.gifEncoder = new GifEncoder(this.canvas.width, this.canvas.height);
    this.gifEncoder.setQuality(this.quality);
    this.gifEncoder.setRepeat(this.repeat);
    this.gifEncoder.setDelay(this.delay);
  };

  start = () => {
    this.gifEncoder.start();
  };

  add = () => {
    this.gifEncoder.addFrame(this.ctx);
  };

  stop = () => {
    this.gifEncoder.finish();
    const buffer = this.gifEncoder.out.getData();
    writeFile(this.fileName, buffer, { encoding: "binary" });
    console.log(`Created gif at ${this.fileName}`);
  };
}

export default Giffer;
