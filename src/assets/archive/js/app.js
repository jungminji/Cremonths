"use strict";
new Vue({
  el: "#userInput",
  data:{
    price:'',
    month:'',
    rate:'',
    on: false,
    list: {
      month:[],
      monthlyFee:[],
      monthlyFeeBeforeInterest:[],
      monthlyInterest:[],
    },
    feeTotal:'',
    interestTotal:''
  },
  watch:{
    month(){ this.fetch() },
    price(){ this.fetch() },
    rate(){  this.fetch() }
  },
  methods: {
    fetch(){

      // Reset the list everytime it gets called
      this.list.month = [];
      this.list.monthlyFee = [];
      this.list.monthlyFeeBeforeInterest = [];
      this.list.monthlyInterest = [];

      let val = 0;

      for(let i = 0; i < this.month; i++){

        //회차
        this.list.month.push(i+1);

        //할부 원금 상환액
        this.list.monthlyFeeBeforeInterest.push(this.price / this.month);

        //할부 이자
        this.list.monthlyInterest.push( (this.price-val) * (this.rate/100) * (1/12) );

        //당회차 할부 상한액
        this.list.monthlyFee.push(this.list.monthlyFeeBeforeInterest[i] + this.list.monthlyInterest[i]);

        // 할부이자 계산용
        val += this.list.monthlyFeeBeforeInterest[i];

      }

      // Show list table
      this.on = true;

      if(this.list.monthlyFee.length > 0){
        // 당회차 할부 상한액 총합
        this.feeTotal = this.list.monthlyFee.reduce((x, y) => x + y);
        // 할부이자 총합
        this.interestTotal = this.list.monthlyInterest.reduce((x, y) => x + y);
      }
    },

    reset(){
      this.on = false;
      this.price = '';
      this.month = '';
      this.rate = '';
      this.list = {
        month:[],
        monthlyFee:[],
        monthlyFeeBeforeInterest:[],
        monthlyInterest:[]
      };
      this.feeTotal='';
      this.interestTotal='';
    }
  }
});
