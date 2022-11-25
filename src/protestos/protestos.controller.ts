import { Controller, Get, Param } from "@nestjs/common";

import { ProtestosService } from './protestos.service';

@Controller('protestos')
export class ProtestosController {
  constructor(private readonly protestosService: ProtestosService) {}

  @Get(':cnpj')
  getProtestos(@Param() params) {
    //02.290.277/0003-93 15.021.849/0001-19 02290277000393    'galaxy a31'
    try {
      const html = this.protestosService.protestosByCnpj(params.cnpj);
      return html;
    }
    catch (error) {
      return error.message;
    }
  }
}
