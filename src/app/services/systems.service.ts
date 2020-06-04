import { Injectable } from '@angular/core';
import { IFconfig } from '../models/master.model';
import { AppconfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class SystemsService {
  private FileConfig: IFconfig = null;/**PublicSystemConfig form FILE JSON */
  http_url = "";
  private autoLoadConfig = null;

  constructor() { 
    this.ReadFileConfig();/**Read Config Josn File */
  }

  private async AutoLoadConfig(){
    if(this.autoLoadConfig == null){
      this.ClearAutoLoadConfig();
      this.autoLoadConfig = setInterval(() => {
        //Auto Script
      }, 60000);
    }
  }

  private ClearAutoLoadConfig(){
    clearInterval(this.autoLoadConfig);
  }

  private ReadFileConfig(){
    this.FileConfig = AppconfigService.Settings;//Get Settiing Config

    this.setConfig();
  }

  private setConfig(){
    this.http_url = (this.FileConfig.REST_API_SERVER == "" ? "http://127.0.0.1" :  this.FileConfig.REST_API_SERVER) 
    + "/"+this.FileConfig.REST_API_ENPOINT +"/"
    console.log(this.http_url);
  }

  /**
   * Function getConfig Varible
   */
  getConfigFile(){
    return this.FileConfig;
  }

  
}
