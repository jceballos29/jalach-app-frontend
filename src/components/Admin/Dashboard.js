import React, { useEffect, useState } from 'react'
// import '../../css/Admin/Dashboard.css'

const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIc'];
const date = new Date();
function Dashboard({dateTime}) {

    let hourStandard = dateTime.hours > 12 ? dateTime.hours - 12 : dateTime.hours
    hourStandard = hourStandard === 0 ? 12 : hourStandard
    const [weekday, setWeekday] = useState()
    const [day, setDay] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    useEffect(() => {
        setWeekday(date.getDay())
        setDay(date.getDate())
        setMonth(date.getMonth())
        setYear(date.getFullYear())
    }, [])

    return (
        <div className="Dashboard">
            <div className="DashboardHeader">
                <div className="Clock">
                    <div className="Hour">
                        {hourStandard < 10 ? '0' + hourStandard : hourStandard}
                        :
                        {dateTime.minutes < 10 ? '0' + dateTime.minutes : dateTime.minutes}
                    </div>
                    <div className="Journey">
                        {dateTime.hours < 12 ? 'AM' : 'PM'}
                    </div>
                    <div className="Seconds">
                        {dateTime.seconds < 10 ? '0' + dateTime.seconds : dateTime.seconds}
                    </div>
                </div>
                <div className="Date">
                    <div className="Weekday">
                        {weekdays[weekday]}
                    </div>
                    <div className="Month">
                        {months[month]}
                    </div>
                    <div className="Day">
                        {day}
                    </div>
                    <div className="Year">
                        {year}
                    </div>
                </div>
            </div>
            <div className="DashboardContent">  
                <div className="dashboardContainer">
                    <div className="payrollInfo box"></div>
                    <div className="inventoryInfo box"></div>
                    <div className="abstractGraph box"></div>
                    <div className="payrollGraph box"></div>
                    <div className="inventoryGraph box"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
