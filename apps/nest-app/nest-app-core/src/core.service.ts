import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  success() {
    return { success: true };
  }
  ignored() {
    return { ignored: true };
  }
}
