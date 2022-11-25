import { Injectable } from "@nestjs/common";


@Injectable()
export class TranslateService {
  translate(key: string): string {
    return key;
  }

  instant(key: string, value2: any = null): string {
    return key;
  }
}
