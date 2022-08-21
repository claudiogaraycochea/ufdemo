import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CustomersService {
  constructor(private readonly http: HttpService) {}

  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAll() {
    return this.http.get(process.env.API)
      .toPromise()
      .then(res => res.data)
      .catch(err => err)
  }

  findOne(id: string) {
    return this.http.get(process.env.API)
      .toPromise()
      .then(res => res.data.filter(item=> item._id===id)[0])
      .catch(err => err)
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
