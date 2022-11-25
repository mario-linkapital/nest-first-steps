import { Controller, Get, Param, Res } from "@nestjs/common";

import { PdfPrintService } from "./pdf-print.service";

@Controller("pdfprint")
export class PdfPrintController {
  constructor(private readonly pdfPrintService: PdfPrintService) {
  }

  @Get(":cnpj")
  async generateReportPDF(@Param("cnpj") cnpj: string, @Res() res) {
    const buffer = await this.pdfPrintService.generateReportPDF(cnpj);
    console.log(buffer);

    // res.set({
    //   "Content-Type": "application/pdf",
    //   "Content-Disposition": "attachment; filename=example.pdf",
    //   "Content-Length": buffer.length
    // });
    //
    // res.end(buffer);
  }
}
