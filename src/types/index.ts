export type optionType = {
    name: string,
    lat: number,
    lon: number
}

export type foreCastType = {
    name: string
    country: string
    sunrise: number
    sunset: number
    list: [
        {
            dt: number
            main: {
                feels_like: number
                humidity: number
                pressure: number
                temp: number
                sea_level: number
                temp_max: number
                temp_min: number
            }
            weather: [{
                description: string
                icon: string
                main: string
                id: string

            }]
            wind:{
                deg: number
                gust: number
                speed: number
            }
            clouds: {
                all: number
            }
            pop: number
            visibility: number
        }
    ]

}


export type ChartOptions  = {
    scales: {
        x: {
          type: string,
          time: {
            unit: string
          }
        },
        y: {
          type: string,
          min: number,
          max: number,
          ticks: {
            stepSize: number
          }
        }
      }
  }