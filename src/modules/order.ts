import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';


export class AddOrder extends AddModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddOrder',
            schema: 'Order'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class GetOrder extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetOrder'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class UpdateOrder extends UpdateModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'UpdateOrder',
            schema: 'Order'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export const methods = {
    add: (data: any) => {
        return new AddOrder(data);
    },
    get: (filter: any) => {
        return new GetOrder(filter);
    },
    update: (data: any) => {
        return new UpdateOrder(data);
    }
};