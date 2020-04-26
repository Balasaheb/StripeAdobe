import { api , track, LightningElement } from 'lwc';

export default class PaymentComponent extends LightningElement {
    @api title;
    @api buttonlabel;
    ACCEPT_JS_SERVICE ;
    AUTH_PUBLIC_CLIENT_KEY = '968QQ8UFb8A8BWJ7ed2FJE9U6sjHZZaB4kJvnm47waTEb6q357BH2e5ZY5MBmbA8' ;
    AUTH_API_LOGIN_ID = '8FrDt8R9d' ;
    
    connectedCallback(){
        const _self = this ;
        /** Dispatch a custom event which bubbles up the DOM tree. */
        const event = new CustomEvent("custom_event", {
        bubbles: true,
        composed: true,
        detail: {
            "data" : "Balasaheb Wani " ,
            "callback" : function(acceptJSLibrary){
                _self.processHeaderCallback(acceptJSLibrary) ;
            }
      }});
      this.dispatchEvent(event);
    }

    processHeaderCallback(acceptJS){
        this.ACCEPT_JS_SERVICE = acceptJS ;
        console.log("Accept library in main comp----" , acceptJS ) ;
        console.log(window.performance.now()) ;
    }

    processButtonClick(){
        try{
            const _self = this;
            console.log("Main form button click ") ;
            console.log("Service object ----" , this.ACCEPT_JS_SERVICE ) ;
            let authData = {};
            authData.clientKey = this.AUTH_PUBLIC_CLIENT_KEY;
            authData.apiLoginID = this.AUTH_API_LOGIN_ID ;

            let cardData = {};
            cardData.cardNumber = "4007000000027" ;
            cardData.month = "05";
            cardData.year = "2022";
            cardData.cardCode = "871";
            cardData.zip = "80226" ;
            cardData.fullName = "Balasaheb S Wani" ;
            let secureData = {};
            secureData.authData = authData;
            secureData.cardData = cardData;
            _self.ACCEPT_JS_SERVICE.dispatchData(secureData, function(authResponseData){ 
                _self.processDispatchDataResponse(authResponseData) ;
            });
        }catch(e){
            console.error("Error in dispatch----" , e ) ;
        }
    }

    processDispatchDataResponse(authResponse){
        console.log("Full respone ----" , authResponse ) ;
        console.warn(JSON.stringify(authResponse)) ;
    }
}