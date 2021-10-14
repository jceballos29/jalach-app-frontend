import React, { useEffect, useState } from 'react'
import '../../css/Admin/Dashboard.css'
import { useSelector } from 'react-redux';


const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIc'];
const date = new Date();

function Dashboard({dateTime}) {

    const { company } = useSelector((state) => state.auth);
    const { roles } = useSelector((state) => state.roles);
    const { budgetsCategories } = useSelector((state) => state.budgets);
    const { employeesPayroll } = useSelector(state => state.payroll);
    const { expensesRoles } = useSelector(state => state.payroll);
    const [BCList, setBCList] = useState();
    const [PIList, setPIList] = useState();
    const [PGList, setPGList] = useState();


    let hourStandard = dateTime.hours > 12 ? dateTime.hours - 12 : dateTime.hours
    hourStandard = hourStandard === 0 ? 12 : hourStandard
    const [weekday, setWeekday] = useState()
    const [day, setDay] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    useEffect(() => {
        if(budgetsCategories){
            setBCList(budgetsCategories.map(item =>( 
            <div key={item.category} className='IGItem'>
                <b>{item.category}</b>
                <span>{item.totalCost}</span>
                <span>{item.sales}</span>
            </div>)));
        }
    }, [budgetsCategories])

    useEffect(() => {
        if(expensesRoles){
            setPGList(
                expensesRoles.map( element => (
                    <div key={element.role} className='PGitem'>
                        <b>{element.role}</b>
                        <span>$ {element.expense}</span>
                    </div>
                ))
            );
        }
    }, [expensesRoles])

    useEffect(() => {
        if(employeesPayroll){
            setPIList(
                employeesPayroll.map(element => {

                    const role = roles.find( role => role.id === element.role_id)
                    return (
                        <div key={element.employee} className='PIitem' style={{backgroundColor: `${role.color}`}}>
                            <b>{element.employee}</b>
                            <span>{element.hours}</span>
                            <span>{element.hourly}</span>
                            <span>$ {element.weeklySalary}</span>
                        </div>
                    )
                })
            );
        }
    }, [employeesPayroll, roles])

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
                    <div className="payrollInfo box">
                        <div className='PIHeaders'>
                            <h1>Nómina</h1>
                        </div>
                        <div className='PIBody'>
                            {PIList}
                        </div>
                    </div>

                    <div className="companyInfo box">
                        <div className='companyName'>
                            <h1>{company.business_name}</h1>
                        </div>
                        <div className='companyBody'>
                            <div className='headers'>
                                <p>Registro Empresarial</p>
                                <p>Nombre de Usuario</p>
                                <p>Correo Electrónico</p>
                                <p>Ubicación</p>
                                <p>Telefono</p>
                                <p>Hora de Apertura</p>
                                <p>Hora de Cierre</p>
                            </div>
                            <div className='content'>
                                <p>{company.rut}</p>
                                <p>{company.user}</p>
                                <p>{company.email}</p>
                                <p>{company.city}, {company.country}</p>
                                <p>{company.phone}</p>
                                <p>{company.opening_time}</p>
                                <p>{company.closing_time}</p>
                            </div>
                        </div>
                    {/* TODO: Agregar función para editar información de la empresa */}
                    </div>
                    <div className="abstractGraph box">
                        <div className='AGHeaders'>
                            <h1>Resumen</h1>
                        </div>
                        <div className='AGBody' ></div>
                    </div>

                    <div className="payrollGraph box">
                        <div className='PGHeader'>
                            <span>Rol</span>
                            <span>Gasto</span>
                        </div>
                        <div className='PGBody'>
                            {PGList}
                        </div>
                    </div>

                    <div className="inventoryGraph box">
                        <div className='IGHeader'>
                            <span>Categoría</span>
                            <span>Gastos</span>
                            <span>Ganancia</span>
                        </div>
                        <div className='IGBody'>
                            {BCList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
