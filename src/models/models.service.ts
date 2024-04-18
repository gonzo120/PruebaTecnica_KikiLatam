import { Injectable } from "@nestjs/common";
import { Send } from "./rates.entity";
import { v4 } from "uuid"

@Injectable()
export class ModelsService {
    tarifaTotal :any;
    private rates: Send[] =[

    ]
    getAllRates(){
        return this.rates;
    }
    createRates(destinatario:string,remitente:string, contenido:string, distancia:number){
        const tarifa =0;
        const rate = {
            id_envio: v4(),
            destinatario,
            remitente,
            contenido,
            fecha_envio: new Date().toDateString(),
            distancia,
            tarifa
        }
        const tarifaplena = 5; //euros
        const costoxkilometro = 0.50; //euros
        

        this.tarifaTotal = tarifaplena+(rate.distancia*costoxkilometro) 
        rate.tarifa = this.tarifaTotal;
        this.rates.push(rate);
        return rate;
    }
    DeleteRates(id_envio: string){
        this.rates = this.rates.filter(rate => rate.id_envio !== id_envio)

    }
    getRateById(id_envio:string ) :Send{
        return this.rates.find(rate=>rate.id_envio === id_envio)

    }

    UpdateRates(id_envio: string, updateFields:any){
        const rate = this.getRateById(id_envio)
        const newRate = Object.assign(rate, updateFields)
        this.rates.map(rate => rate.id_envio ===id_envio ? newRate : rate)
        const tarifaplena = 5; //euros
        const costoxkilometro = 0.50; //euros
        

        this.tarifaTotal = tarifaplena+(newRate.distancia*costoxkilometro) 
        newRate.tarifa = this.tarifaTotal;
        
        return newRate;   
    }
}