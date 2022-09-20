import { Controller, Get, Post, Header} from '@nestjs/common';
import { AppService } from './app.service';
import { application } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  @Header('content-type','application/json')
  getTest(): string{
    const objet={
      nom:"Dubois",
      prenom:"Axel"
    }
    return JSON.stringify(objet)
    }

  @Get('9')
  get9(): string{
    return ' monkey';
  }
  @Post('essai')
  postEssai():string{
    return 'voici un essai';
  }
}
