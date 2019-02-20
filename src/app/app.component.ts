import { Component, ElementRef, ViewChild, OnInit, ViewChildren, Input, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators ,FormBuilder  } from '@angular/forms';
import { InboxType } from './inbox-type.enum';
import { EmailService } from './email';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { document } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title: string;
  public textEditor: string;
  public inboxType: InboxType = InboxType.Inbox;
  public  valChildren='';


  @ViewChild('content')
  public content: ElementRef;


  

 


  constructor(
    private modalService: NgbModal,
    private emailService: EmailService,
    private fb: FormBuilder,
  ) { 
  document.addEventListener('keydown',(e)=>{
    let bt =document.getElementById('bt') ;
   if(e.key==="Tab" && bt){
    
     bt.click()
   }
  })
  }

  mailList: string[] = [
    'Jan Kowalski',
    'Piotr Nowak',
    'Anna Kowalczyk'
  ]
 

 public mailForm=this.fb.group({
    'inp1':[null, Validators.compose([Validators.required,
       Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')])],
    'inp2':[null, Validators.compose([
        Validators.maxLength(50),])],
    'inp3':[null, Validators.compose([Validators.required,
        Validators.maxLength(500), Validators.pattern('^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$')])],
    'inp4':[null, Validators.compose([Validators.required,
        Validators.maxLength(1000)])],   
  })

  

  

  public inboxTypeSelected(event: InboxType) {
    this.inboxType = event;
  }

  public newEmailEvent(title: string) {
    this.title=title
    console.log('new message', title);
  
    
    this.modalService.open(this.content, { size: 'lg' });
  }

  public newEditorText(event:string){
    this.textEditor=event;
    console.log('text', this.textEditor);
  }
  

  public sendMessage(modal) {
    this.title=this.mailForm.get('inp1').value;
    this.emailService.sentEmail(this.title,this.textEditor);
    console.log('message sent',this.textEditor);
    alert('wiadomość wysłana');
  
    this.reset();
    modal.close();
  }

  public reset(){
 this.mailForm.controls['inp1'].setValue(null);  
 this.mailForm.controls['inp2'].setValue(null); 
 this.mailForm.controls['inp3'].setValue(null); 
 this.mailForm.controls['inp4'].setValue(null); 
 
  }

  public copy(e){
    let te=document.getElementById('tE');
    var children = te.children;
    this.valChildren='';
for(let i=0;i<children.length;i++){
if(e.key !=="Enter")
  {this.valChildren =this.valChildren+ children[i].textContent;}
}
this.mailForm.controls['inp4'].setValue('');
this.mailForm.controls['inp4'].setValue(this.valChildren);
  }

  klasa(){
    if(
    !this.mailForm.controls['inp1'].errors &&
    !this.mailForm.controls['inp2'].errors &&
    !this.mailForm.controls['inp3'].errors &&
    !this.mailForm.controls['inp4'].errors && (
      this.mailForm.controls['inp1'].touched ||
      this.mailForm.controls['inp2'].touched ||
      this.mailForm.controls['inp3'].touched ||
      this.mailForm.controls['inp4'].touched 
    )  ) return 'btn btn-danger' 
    else return 'btn btn-secondary'
  }

  resetClass(){
    if( (
      !this.mailForm.controls['inp1'].pristine ||
      !this.mailForm.controls['inp2'].pristine ||
      !this.mailForm.controls['inp3'].pristine ||
      !this.mailForm.controls['inp4'].pristine )&& (
        this.mailForm.get('inp1').value!==null ||
        this.mailForm.get('inp2').value!==null ||
        this.mailForm.get('inp3').value!==null ||
        this.mailForm.get('inp4').value!==null 
        
      )

    )
    { return 'btn btn-outline-danger'} else return 'btn btn-outline-secondary'
  }

  
  
  ngOnInit(){
    

  }
}
