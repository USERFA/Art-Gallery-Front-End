export class Payment{
    constructor(paymentId,paymentStatus,transactionId,orderId,amount){
        this.paymentId=paymentId;
        this.paymentStatus=paymentStatus;
        this.transactionId=transactionId;
        this.orderId=orderId;
        this.amount=amount;
    }
}