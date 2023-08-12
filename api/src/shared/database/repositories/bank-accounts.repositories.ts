import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateBankAccountDto } from 'src/modules/bank-accounts/dto/create-bank-account.dto';
import { UpdateBankAccountDto } from 'src/modules/bank-accounts/dto/update-bank-account.dto';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAllByUserId(userId: string) {
    return this.prismaService.bankAccount.findMany({
      where: { userId },
    });
  }

  findByIdAndUserId(id: string, userId: string) {
    return this.prismaService.bankAccount.findFirst({
      where: { id, userId },
    });
  }

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { color, initialBalance, name, type } = createBankAccountDto;

    return this.prismaService.bankAccount.create({
      data: {
        userId,
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  update(id: string, updateBankAccountDto: UpdateBankAccountDto) {
    const { color, initialBalance, name, type } = updateBankAccountDto;

    return this.prismaService.bankAccount.update({
      where: { id },
      data: {
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  delete(id: string) {
    return this.prismaService.bankAccount.delete({
      where: { id },
    });
  }
}
