import { HttpModule } from '@nestjs/axios';
import { Module } from "@nestjs/common";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ProtestosController } from './protestos/protestos.controller';
import { ProtestosService } from './protestos/protestos.service';
import { PdfPrintController } from "./pdf-print/pdf-print.controller";
import { PdfPrintService } from "./pdf-print/pdf-print.service";
import { TranslateService } from "./utils/TranslateService";
import { PrintDataServices } from "./pdf-print/print-data-service.service";

@Module({
  imports: [HttpModule],
  controllers: [AppController, CatsController, ProtestosController, PdfPrintController],
  providers: [AppService, ProtestosService, PdfPrintService, TranslateService, PrintDataServices],
})
export class AppModule {}
