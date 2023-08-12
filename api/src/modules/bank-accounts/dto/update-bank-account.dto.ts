import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CreateBankAccountDto } from './create-bank-account.dto';

import { BankAccountType } from '../entities/BankAccount';

export class UpdateBankAccountDto extends CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsNotEmpty()
  @IsEnum(BankAccountType)
  type: BankAccountType;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;
}
