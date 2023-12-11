import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService){
  
  }
  weatherData?: WeatherData;
  cityName:string = 'Canberra';
  ngOnInit(): void{
    this.getWeatherData(this.cityName);
    this.cityName='';

};

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName ='';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(response)=>{
        this.weatherData = response;
        console.log(response);
      }
    })
  }
}
