import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createData: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createData);
  }

  findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email },
      select: { id: true, password: true },
    });
  }

  findById(id: string) {
    return this.prismaService.user.findUnique({
      where: { id },
      select: { name: true, email: true },
    });
  }
}
