import { Body, Controller, Delete, Get,Param,Post } from '@nestjs/common';
import { ModelsService } from './models.service';
import { createRate, updateRate } from './dto/rate.dto';
import { Put } from '@nestjs/common';
@Controller('envios')
export class ModelsController {

    constructor(private ModelsService: ModelsService){
        
    }
    @Get()
    getAllRates(){
        return this.ModelsService.getAllRates();
    }
    @Post()
    createRates(@Body() newRate:createRate){

        
        return this.ModelsService.createRates(newRate.destinatario, newRate.remitente ,newRate.contenido, newRate.distancia);
    }
    @Delete(':id')
    DeleteRates(@Param('id') id_envio:string){

        return this.ModelsService.DeleteRates(id_envio);

    }

    @Put(':id')
    UpdateRates(@Param('id') id_envio:string, @Body() updateFields :updateRate){
        return this.ModelsService.UpdateRates(id_envio, updateFields )
    }
}
