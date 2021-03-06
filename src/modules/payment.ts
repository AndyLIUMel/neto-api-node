import sharedModule = require('../shared');
import AddModule = require('./methods/add');
import GetModule = require('./methods/get');


export class AddPayment extends AddModule {
    public exec(params: sharedModule.ExecOptions = {}) {
        let superParams = {
            action: 'AddPayment',
            schema: 'Payment'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class GetPayment extends GetModule {
    public exec(params: sharedModule.ExecOptions = {}) {
        let superParams = {
            action: 'GetPayment'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class GetPaymentMethods {
    constructor() {
        return this;
    }

    public exec({ debug = false }: sharedModule.ExecOptions = {}) {
        let req = { action: 'GetPaymentMethods', body: {} };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


export const methods = {
    getMethods: () => {
        return new GetPaymentMethods();
    },
    get: (filter: any) => {
        return new GetPayment(filter);
    },
    add: (data: any) => {
        return new AddPayment(data);
    }
};