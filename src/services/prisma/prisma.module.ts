import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * The global module to provide and export the PrismaService.
 * @remarks
 */
@Global()
@Module({
  providers: [
    {
      /**
       * The token to be used for dependency injection.
       */
      provide: PrismaService,

      /**
       * The class to be instantiated for the provider.
       */
      useClass: PrismaService,
    },
  ],
  /**
   * The services and providers to be exported by the module.
   * @remarks
   * Any module that imports PrismaModule can access PrismaService.
   */
  exports: [PrismaService],
})
export class PrismaModule {}
