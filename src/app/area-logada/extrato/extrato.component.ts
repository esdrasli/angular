import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transaction } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transactions: Array<Transaction> | undefined;
  page:number = 1;
  onSpinners: boolean | undefined;
  errorLoading: boolean | undefined;

  constructor(
    private extratoService: ExtratoService
  ) { 
    console.log(extratoService);
  }

  ngOnInit() {
    this.loadExtrato();
  }
  loadExtrato(){
    // console.log('loading extrato');
    this.onSpinners = true;
    this.errorLoading = false;
    
    this.extratoService
    .getTransantion(this.page)
    .pipe(
      take(1),
      finalize(() => {this.onSpinners = false}),
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error),
    );
  }
  onSuccess(response: Transaction[]){
    this.transactions = response;
  }
  onError(error: any) {
      //fazer alguma coisa se der error
      this.errorLoading = true;
      console.error(error);
  }
  previousPage(){
    this.page -= 1;
    this.loadExtrato();
  }
  nextPage(){
    this.page += 1;
    this.loadExtrato();
  }
}
