import { Component, OnInit ,OnChanges, SimpleChanges, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-paginazione',
  templateUrl: './paginazione.component.html',
  styleUrls: ['./paginazione.component.scss']
})
export class PaginazioneComponent implements OnInit , OnChanges {


   ricercaAttiva:boolean = false;
   ricerca:string = "";
   pagCorrente:number = 0;
   todoArray:Todo[] = [];
   originalArr:Todo[] = [];
   numElementi:number = 5;
   selectById:number = 0;


  constructor(private paginationService: PaginationService) { }

  ngOnChanges(){

  }

  ngOnInit(): void {
    this.getTodo();
  }

  nPagine(){
    return new Array(Math.ceil(this.todoArray.length/5))
  }
  paginaCorrente(){
    // console.log(5*this.pagCorrente);
    return this.todoArray.slice((5*this.pagCorrente),(5*this.pagCorrente)+ this.numElementi)
  }

  getTodo(){

    this.paginationService.takeTodo().subscribe((todo:Todo[])=>{
    this.todoArray = todo;
    this.originalArr = todo;

    // console.log(todo);

  })
  }

    // FILTRI

  // filtro stringa

  filterByString(){


     let filteredByStringArr:Todo[] = this.todoArray.filter( (el) =>{

      // console.log(el.title.includes(this.ricerca));


      return el.title.includes(this.ricerca) ;


     });
     console.log(filteredByStringArr);
     this.todoArray = filteredByStringArr ;

  }

  // menu a tendina

  onSelectedId(value:string){
    if(this.selectById === 0){
      this.selectById = Number(value);
      console.log(this.selectById);

      let filteredByIdArr:Todo[] = this.todoArray.filter( (el) =>{
        return el.userId === this.selectById;
      })
      this.todoArray = filteredByIdArr;
      console.log(this.todoArray);

    }else if(this.selectById != 0){
      this.selectById = Number(value);

      let filteredByIdArr2:Todo[] = this.originalArr.filter( (el) =>{
        return el.userId === this.selectById;
      })
      this.todoArray = filteredByIdArr2;
      console.log(this.todoArray);

    }


  }

  // filtro completed

  showCompleted(){
    let filteredByCompleted:Todo[] = this.todoArray.filter( (el) =>{
      return el.completed == true;
    })
    this.todoArray = filteredByCompleted;
  }

  //reset filter

  resetFilters(){
    this.todoArray = this.originalArr;
  }


}
