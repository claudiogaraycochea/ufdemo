import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { HttpService } from '@nestjs/axios';
export declare class CustomersService {
    private readonly http;
    constructor(http: HttpService);
    create(createCustomerDto: CreateCustomerDto): string;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): string;
    remove(id: number): string;
}
