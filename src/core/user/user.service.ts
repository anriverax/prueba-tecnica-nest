import { PrismaService } from '@/services/prisma/prisma.service';
import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable({})
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(page: number = 1, pageSize: number = 15) {
    const skip = (page - 1) * pageSize;

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        skip,
        take: pageSize,
        orderBy: {
          id: 'desc',
        },
      }),
      this.prisma.user.count(),
    ]);

    return {
      users,
      metadata: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }

  async create(data: CreateUserDto) {
    try {
      const result = await this.prisma.user.create({ data, select: { id: true } });
      return result ? { msg: 'Saved successfully', data: result.id } : null;
    } catch (error) {
      console.error('Prisma error:', error);
      this.handlePrismaError(error);
    }
  }

  async update(id: string, images: string[], selfie: string) {
    try {
      const result = await this.prisma.user.update({ where: { id }, data: { images, selfie } });
      return result ? { msg: 'Updated successfully', data: result.id } : null;
    } catch (error) {
      this.handlePrismaError(error);
    }
  }
  private handlePrismaError(error: any): void {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new ForbiddenException('The email already exists');
    }

    // Log or handle other Prisma errors appropriately
    console.error('Prisma error:', error);
    throw new BadRequestException('An error occurred while processing your request');
  }
}
