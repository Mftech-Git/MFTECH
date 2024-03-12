import React from "react"

const ProjectsEventTimer = () => {
  const [days, setDays] = React.useState("")
  const [hours, setHours] = React.useState("")
  const [minutes, setMinutes] = React.useState("")
  const [seconds, setSeconds] = React.useState("")

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const commingSoonTime = () => {
    let endTime = new Date("September 30, 2024 12:00:00 MST")
    let endTimeParse = Date.parse(endTime) / 1000
    let now = new Date()
    let nowParse = Date.parse(now) / 1000
    let timeLeft = endTimeParse - nowParse
    let days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - days * 86400) / 3600)
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    )
    if (hours < "10") {
      hours = "0" + hours
    }
    if (minutes < "10") {
      minutes = "0" + minutes
    }
    if (seconds < "10") {
      seconds = "0" + seconds
    }
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }

  return (
    <>
    <div id="timer" className="timer-container">
      <div className="timer-box">
        <span className="timer-value">{days}</span>
        <span className="timer-label">Days</span>
      </div>
      <div className="timer-box">
        <span className="timer-value">{hours}</span>
        <span className="timer-label">Hours</span>
      </div>
      <div className="timer-box">
        <span className="timer-value">{minutes}</span>
        <span className="timer-label">Minutes</span>
      </div>
      <div className="timer-box">
        <span className="timer-value">{seconds}</span>
        <span className="timer-label">Seconds</span>
      </div>
    </div>
    </>
  )
}

export default ProjectsEventTimer
