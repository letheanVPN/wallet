import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {WebsocketService} from "../../../services/websocket.service";
import {FileSystemService} from "../../../services/filesystem/file-system.service";
import {AppConfigService} from '../../../services/app-config.service';
import {BlockchainApi} from "@lethean/api-typescript";

@Component({
  selector: 'lthn-chain-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements AfterViewInit, OnDestroy {
  isFocused: boolean = false;
  isSelected: boolean = false;
  chainInfo: any;
  authNeeded = false;
  downloadNeeded = true;
  downloaded= new Subscription;
  downloadStats: {
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
  private sub = new Subscription;
  private sub2 = new Subscription;

  constructor(private app: AppConfigService,
              private ws: WebsocketService,
              private fs: FileSystemService,
              public chain: BlockchainApi) {

  }


  async checkDownloads() {

    try {

      // @ts-ignore
      if (await this.fs.listFiles('cli').then(res => res.length) < 3) {

        this.downloadNeeded = true;
        this.downloadProgress()
        this.downloaded = interval(1000).subscribe(
            async () => {
              if (await this.checkDownloaded()) {
                this.downloadNeeded = false;
                // await this.chain.startDaemon()
                // await this.chain.getInfo()
                this.downloaded.unsubscribe();


              }
            }
        );
        // this.chain.downloadDaemons().then(() => console.log('done'))

        //return false;
      }else {
        this.downloadNeeded = false;
        return true;
      }

    } catch (e: any) {
      if ('HttpErrorResponse' === e.name) {
        if (e.status === 401) {
          this.authNeeded = true;
        }else{
          this.downloadNeeded = true
        }

      }
    }

    return



  }

  async checkDownloaded() {
    console.log('checking for cli');
    // @ts-ignore
    return await this.fs.listFiles('cli').then(res => res.length) > 3;

  }



  downloadProgress(){
    let that = this;
    const subject = this.ws.connect().subscribe((data: any) => {
      try{
        that.downloadStats = JSON.parse(atob(data[1]));
        if(this.downloadStats.total == this.downloadStats.size){
          subject.unsubscribe();
        }
      }catch (e){

      }


    })
    this.ws.sendMessage('daemon:download')

  }


  async ngAfterViewInit() {
    await this.checkDownloads()
    console.log('d',this.app.getConfig('app', 'start_on_boot',  'daemon', false) == 'true' )
    this.isSelected = this.app.getConfig('app', 'start_on_boot', 'daemon', false) == 'true'
    if (this.isSelected) {
      // this.chain.startDaemon()
      this.sub = interval(500).subscribe(async () => {
        // this.chainInfo = await this.chain.getInfo()
        if(this.chainInfo.height > 0){
          if(this.sub) this.sub.unsubscribe();
        }
        // this.isSelected = this.chainInfo !== undefined
      });

      this.sub2 = interval(15000).subscribe(async () => {
        // this.chainInfo = await this.chain.getInfo()
        // this.isSelected = this.chainInfo !== undefined
      });
    }

  }

  /**
   * Toggles the setting start_on_boot and stops a current running node (soon[tm])
   */
  public async toggleStart() {
    //this.isSelected = !this.isSelected;



    this.app.setConfig('app', 'start_on_boot', !this.isSelected, 'daemon')
    this.app.saveConfig('app')
    this.app.updateState('app')
    if (this.isSelected) {
      if(this.sub) this.sub.unsubscribe();
      if(this.sub2) this.sub2.unsubscribe();
    } else {
      // this.chain.startDaemon()
      this.sub = interval(1000).subscribe(async () => {
        // this.chainInfo = await this.chain.getInfo()
        // this.isSelected = this.chainInfo !== undefined
      });
    }
  }

  public ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
    if(this.sub2) this.sub2.unsubscribe();
  }

	public async openLink() {
      await this.app.openLink("https://docs.lt.hn")
    }
}
