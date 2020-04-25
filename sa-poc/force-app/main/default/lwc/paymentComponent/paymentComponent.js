import { api , track, LightningElement } from 'lwc';

export default class PaymentComponent extends LightningElement {
    @api title;
    @api buttonlabel;
    
    processButtonClick(event){
        console.log("Full Load --- flag " , window.ExampleLibrary ) ;
    }

    connectedCallback(){
        console.log("Payment child component loaded ----" , window.performance.now()) ;
    }
}