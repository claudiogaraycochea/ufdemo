"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let CustomersService = class CustomersService {
    constructor(http) {
        this.http = http;
    }
    create(createCustomerDto) {
        return 'This action adds a new customer';
    }
    findAll() {
        return this.http.get(process.env.API)
            .toPromise()
            .then(res => res.data)
            .catch(err => err);
    }
    findOne(id) {
        return this.http.get(process.env.API)
            .toPromise()
            .then(res => res.data.filter(item => item._id === id)[0])
            .catch(err => err);
    }
    update(id, updateCustomerDto) {
        return `This action updates a #${id} customer`;
    }
    remove(id) {
        return `This action removes a #${id} customer`;
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map