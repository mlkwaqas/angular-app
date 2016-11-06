export default class PaymentService {

    constructor($http) {
        this.$http = $http;
        this.serverUrl = 'http://localhost:3000/payments'
    }

    getHighestTwentyPayments(callback) {
        var url = this.serverUrl + "?_sort=amount&_order=DESC&_end=20";
        return this.$http.get(url)
          .then(response => callback(response.data));
    }

    getPaymentOfMarchant(merchant) {
        var url = this.serverUrl + "?merchant="+merchant;
        return this.$http.get(url);
    }

    addPayment(data) {
        return this.$http.post(this.serverUrl, data)
    }

}
