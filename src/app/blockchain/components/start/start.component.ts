import {Component, OnInit} from '@angular/core';
import {BlockchainApi, InputOutputApi, createConfiguration, BlockchainLetheanDaemonStartDTO, BlockchainLetheanRPCDTO} from "@lethean/api-typescript";
import {Router} from "@angular/router";
import {WebsocketService} from "../../../services/websocket.service";
import {BlockchainAPIService} from "../../blockchain.service";

@Component({
  selector: 'app-starts',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class BlockchainStartComponent implements OnInit {

  public daemonInstalled = false;
  public daemonStarted = false;
  public daemonSynced = false;
  private api: any;
  private io: any;
  public downloadStats: {
    file: string,
    dir: string,
    fullPath: string,
    size: number,
    total: number,
  } = {
    file: '',
    dir: '',
    fullPath: '',
    size: 0,
    total: 0
  }
  constructor(private router: Router, private ws: WebsocketService, private chain: BlockchainAPIService) {
    this.api = new BlockchainApi(createConfiguration())
    this.io = new InputOutputApi(createConfiguration())
  }

  async ngOnInit() {
    this.daemonInstalled = await this.checkInstalled()

    if(!this.daemonInstalled) {
      // download daemon
      console.log('downloading daemon')
      this.installLethean()
    }

    if(this.daemonInstalled) {
      console.log('starting daemon')
      await this.api.startDaemon({
        configFile: 'letheand.conf',
        dataDir: 'data/lthn',
        logDir: 'logs/lthn'
      } as BlockchainLetheanDaemonStartDTO)
    }else {
      return false;
    }

    this.daemonStarted = await this.checkDaemonRunning()

    if (this.daemonStarted){
      await this.router.navigateByUrl('/')
    }

    return true;
  }

  checkInstalled(){
    // check if daemon is installed
    return this.io.isFile({path: 'cli/lthn/letheand'}).then((result: any) => {
      return result.result
    })
  }

  checkDaemonRunning(){
    // check if daemon is running
    return this.chain.getInfo().then((result: any) => {
      return result.status == "OK"
    })
  }

  installLethean(){
    // download daemon
    this.api.downloadDaemon({})
      let that = this;
      const subject = this.ws.connect().subscribe((data) => {
        try{
          that.downloadStats = JSON.parse(atob(data[1]));
          if(this.downloadStats.total == this.downloadStats.size){
            this.daemonInstalled = true;
            subject.unsubscribe();
          }
        }catch (e){
          console.log(e)
        }


      })
      this.ws.sendMessage('daemon:download')

    }


}
