//import { reactive } from 'vue'
//src/api/chat.ts
//这段代码定义了一个名为 chatSetting 的类，用于管理与聊天配置相关的状态和操作。通过这个类，可以针对不同的聊天会话（每个会话都有一个唯一的 uuid）管理和获取聊天的配置。
import { gptConfigStore, gptConfigType } from "@/store";
import { ss } from '@/utils/storage'
import { mlog } from "./mjapi";
import { debounce } from "@/utils/functions/debounce";

//let time_limit= 0

export class chatSetting{
  private uuid: number;
  private localKey='chat-setting';
  private time_limit=0;
  private mObj:gptConfigType[]=[];
  
  //private gptConfig: gptConfigType
    // 构造函数
  constructor(uuid: number) {
    this.uuid = uuid;
    //this.gptConfig = gptConfigStore.myData;
    //this.init();
  }
 
  public setUuid(uuid: number){
    this.uuid = uuid;
    return this
  }
  public getGptConfig():gptConfigType {
    mlog("toMyuid16","getGptConfig", this.uuid )
     const index = this.findIndex();
     if( index<=-1) return gptConfigStore.myData;
     const arr = this.getObjs();
     const rz=  arr[index];
     //gptConfigStore.setMyData( rz );
     gptConfigStore.myData.model= rz.model;
     return rz;
  }
  public getObjsDebounce=debounce(  this.getObjs ,600);
  //卡死 可疑点
  public getObjs():gptConfigType[]{
     const now=  Math.floor(Date.now() / 1)
     const dt= now- this.time_limit;
     mlog("toMyuid15","getObjs", this.uuid , dt)
     if(dt<500  ){ //防止卡死
      return this.mObj ;
     }
     this.time_limit=now ;
   
     const obj = ss.get( this.localKey ) as  undefined| gptConfigType[];
   
    this.mObj= obj? obj:[]
    return this.mObj;
  }
  public findIndex(){ 
    mlog("toMyuid8","findIndex")
    return  this.getObjs().findIndex(v=>v.uuid && v.uuid==this.uuid  )
  }
  public save( obj : Partial<gptConfigType>){
    mlog("toMyuid8","save")
    let  sobj ={ ...gptConfigStore.myData , ...obj };
    sobj.uuid= this.uuid;
    const index = this.findIndex();
    let arr = this.getObjs();
    if( index>-1  )arr[index]= sobj;
    else arr.push( sobj ); 
    ss.set(this.localKey, arr );
    return this ;
  }

   
}