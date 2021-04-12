import { Resources } from "./Resources.js";

export class ResourceLoader{
    //map = null; 语法是对的，存在兼容性问题
    constructor(){
        this.map = new Map(Resources);
        for(let [key,value] of this.map){
            //console.log(key,value);
            const image =new Image();//==wx.crateImage()
            image.src = value;
            this.map.set(key,image);//把constructor的this.map的值换成key,image（已经加载的图片本身）
            
        }
    }
    //加载全部结束的方法
    onLoaded(callback){
        let loadedCount =0;
        //let self =this;
        for(let value of this.map.values()){
            //map.values取出map的所有value值，忽略掉key
            //value.onload = function(){self}; ES5调用constructor的this
            value.onload = () => {
                loadedCount++;
                //console.log(this.map.size);=7
                //console.log(this.map.length);=7 undefined
                if(loadedCount>=this.map.size){
                    callback(this.map);
                }
            }
        }
    }

    static create(){
        return new ResourceLoader();
    }
}