import { Request, Response } from "express";
import * as cheerio from 'cheerio'
import { url } from "inspector";

const URLS = {
  jimmyjazzgasteiz: 'https://jimmyjazzgasteiz.com/es/agenda-conciertos-y-djs/'
}

async function scrape (url:string) {
  const res = await fetch(url)
  const html = await res.text()
  return cheerio.load(html)
}
export const getEventsJimmyJazz =async (req:Request,res:Response)=>{
  
    const $ = await scrape(URLS.jimmyjazzgasteiz)
    const $rows = $('.et_pb_blurb_content')
    const $count = $rows.length
    console.log($count)

 function findTextAndReturnRemainder(target:any, variable:any){
  var chopFront = target.substring(target.search(variable)+variable.length,target.length);
  var result = chopFront.substring(0,chopFront.search(";"));
  return result;
}
var text = $($('script')).text();
var findAndClean = findTextAndReturnRemainder(text,"var et_link_options_data =");
var direcciones = JSON.parse(findAndClean);

    const jimmyjazzBoard:any = []
    $rows.each((index, el) => {
      if(index<$rows.length-1){
      const todo = $(el).find('.et_pb_blurb_description').text().split('\n')
      let titulo:any=''
      for(var i =1;i<todo.length;i++){
         titulo=titulo+' '+todo[i]
         
      }
      const fecha =todo[0]
      const img = $(el).find('.et_pb_main_blurb_image').find('img').attr('src')
      const url=direcciones[index].url;
     jimmyjazzBoard.push({ fecha,titulo, img,url})
      } 
  })
  res.json(jimmyjazzBoard);
  
}

export const getEventosOpenData = async (req:Request,res:Response) => {
    let date = new Date()
    
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let months='';
    if(month < 10){
      day=day;
      months='0'+month.toString();
      year=year;
    }else{
        day=day;
        months= month.toString();
        year=year; 
    }
     
    let url=`https://api.euskadi.eus/culture/events/v1.0/events/byDate/${year}/${months}/${day}/byMunicipality/1/46?_elements=20&_page=1`;
    console.log(url)
    const items =await fetch(url).then((response) => response.json().then((data)=> { res.json(data.items)}));
}