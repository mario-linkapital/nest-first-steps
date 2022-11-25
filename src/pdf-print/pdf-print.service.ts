import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { PrintDataServices } from "./print-data-service.service";


@Injectable()
export class PdfPrintService {
  URL = "http://ec2-15-228-164-58.sa-east-1.compute.amazonaws.com:8025/api/company/analysis?cnpj=";
  private companyAnalysisData: any;

  constructor(private readonly httpService: HttpService, private readonly printDataService: PrintDataServices) {
  }

  async generateReportPDF(cnpj: string): Promise<Buffer> {
    this.companyAnalysisData = (await this.getBigDataCnpjAnalysis(cnpj)).data;
    if (this.companyAnalysisData) {
      this.printDataService.makePrint(this.companyAnalysisData, []);
    }
    return this.companyAnalysisData;
  }

  async getBigDataCnpjAnalysis(cnpj: string) {
    return await lastValueFrom(this.httpService.get(`${this.URL}${cnpj}`));
  }
}
