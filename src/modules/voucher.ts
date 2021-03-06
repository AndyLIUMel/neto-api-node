import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';


export class AddVoucher extends AddModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddVoucher',
            schema: 'Voucher'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class GetVoucher extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetVoucher'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class UpdateVoucher extends UpdateModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'UpdateVoucher',
            schema: 'Voucher'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export const methods = {
    add: (data: any) => {
        return new AddVoucher(data);
    },
    get: (filter: any) => {
        return new GetVoucher(filter);
    },
    update: (data: any) => {
        return new UpdateVoucher(data);
    }
};