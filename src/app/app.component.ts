import { Component } from '@angular/core';
import { SystemsService } from './services/systems.service';
import Swal from 'sweetalert2';

var $ = (window as unknown as any)["jQuery"];//Import jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'WebAngularBackendManagerApp';
  constructor( private systemService: SystemsService){
    
  }
}