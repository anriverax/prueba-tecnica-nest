import { Transform } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDataDto {
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  names: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  surnames: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  email: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsNumber()
  typeDocumentId: number;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  identificationNumber: string;

  @IsNotEmpty()
  @IsNumber()
  departmentId: number;

  @IsNotEmpty()
  @IsNumber()
  municipalityId: number;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  salary: number;
}

export class UserDto extends UserDataDto {
  @IsArray()
  @IsNotEmpty()
  images: Express.Multer.File[];

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  selfie: string;
}

export class CreateUserDto extends UserDataDto {
  @IsArray()
  @IsNotEmpty()
  images: string[];

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsString()
  selfie: string;
}
