
export const getRainValue = (number: number): string => {
 
  
  if (number > 1500 && number <= 2000) return 'Expect some rain'
  if (number > 2000 && number <= 9000) return 'Expect heavy rain'

  return 'Very clear day'
}

export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}

