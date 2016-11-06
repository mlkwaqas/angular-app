export default class MainController {

    constructor(PaymentService) {
        this.PaymentService = PaymentService;
        this.intializeData();
    }

    intializeData() {
        this.paymentData = {
            "method": "",
            "amount": 0,
            "currency": "",
            "status": "",
            "merchant": ""
        };
        this.postAddMessage = "";
    }

    clearFilter() {
        this.selectedMethod = '';
        this.addInProgress = false;
    }

    callbackHandler() {
        this.clearFilter();
        this.PaymentService.getHighestTwentyPayments(data => {
            this.payments = data;
        });
    }

    promiseHandler() {
        this.clearFilter();
        this.PaymentService.getPaymentOfMarchant('Ginger').then(response => {
            this.payments = response.data;
        });
    }

    addPaymentHandler() {
        this.addInProgress = true;
        this.intializeData();
    }

    submitPayment() {
        var d = new Date();
        this.paymentData['created'] = d.toUTCString();
        this.PaymentService.addPayment(this.paymentData).then(response => {
            this.intializeData();
            this.postAddMessage = "Payment is added successfully";
        });
    }
}
