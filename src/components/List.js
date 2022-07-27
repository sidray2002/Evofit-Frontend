import React, {useState} from 'react';
import img from './img/img1.jpg';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import './list.css';
import { PieChart } from 'react-minimal-pie-chart';
import data from './data.json';
import { Route } from "react-router-dom";

let steps;

export default function List() {
        let Transactions= data.map((v, i) => <Transaction key={i} category={v}></Transaction>);
        return(
            <>
            {Transactions}
            </>
        )
}



function Transaction({ category, handler }) {


    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const d = new Date();
    let month = months[d.getMonth()];
    let date=d.getDate();

    let ndate=date.toString()+" "+month.toString();


    let sdate, pdate;

    sdate=(category.scheduledDate).substring(0,3)+months[Number((category.scheduledDate).substring(3,5))-1];

    pdate=(category.performedDate).substring(0,3)+months[Number((category.performedDate).substring(3,5))-1];


    const dataMock = [
        { title: 'Protien', value: Number(category.proteinConsumed), color: 'green' },
        { title: 'Carb', value: Number(category.carbConsumed), color: 'yellow' },
        { title: 'Fat', value: Number(category.fatConsumed), color: 'pink' },
      ];
      
      const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
      };

    

    const [num, setNum] = useState(Number(category.stepstarget));

    const incSteps = () => {
        setNum(num+500);
    }

    const decSteps = () => {
        setNum(num-500);
    }

    const [cal, setCal] = useState(Number(category.calorieTarget));

    const incCal = () => {
        setCal(cal+100);
    }

    const decCal = () => {
        setCal(cal-100);
    }

    if(ndate==sdate && category.feedback=='true') 
    {
        return (
            <div className='py-4'>
                <div className='container mx-auto rounded-2xl grid grid-cols-11 gap-4 w-full' style={{ backgroundColor: "#1E2630" }}>
                    <div className='col-span-4 flex flex-wrap px-4'>
                        <img src={img} className="mt-6 rounded-full h-12"></img>
                        <div className='mt-6 pl-6 text-white '>
                        <p className="text-xl font-light">
                            {category.name}
                        </p>
                        <p className="text-sm font-extralight">
                        {category.email}
                        </p>
                        </div>
                    </div>
                    <div className='col-span-2 flex justify-around px-4' >
                    <div style={{ width: 84, height: 84, paddingTop:'6px' }}>
    
                    <CircularProgressbarWithChildren value={(Number(category.stepswalked)*100/Number(num))}>
                      <p className='text-center text-white font-bold'> {category.stepswalked} </p>
                      <p className='text-center text-xs text-white'> walked </p> 
                    </CircularProgressbarWithChildren>
                    </div>
                    <div className='my-1 mx-2'>
                        <button onClick={incSteps} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none'>+</button>
                        <p className='text-center text-white font-bold text-xl' id='one'>{num/1000}k</p>
                        <p className='text-centre text-white font-light text-xs'>Target</p>
                        <button onClick={decSteps} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none'>-</button>
                    </div>
                    </div>
                    <div className='col-span-2 flex justify-center gap-4 px-4'>
                        <div>
                            <div className='flex my-4'>
                            <box-icon name='calendar' color='white'></box-icon>
                            <p className='text-white font-semibold text-lg px-2'>  {pdate} </p>
                            </div>
                            <div className='flex my-4'>
                            <box-icon name='calendar-exclamation' color='white'></box-icon>
                            <p className='text-white font-semibold text-lg px-2 bg-red-700 rounded-lg'>  {sdate}</p>
                            </div>
                        </div>
                        <a href={"/"+category.userId+"/workout" } className='bg-red-700 my-2 w-8 rounded-lg'><button className='text-2xl text-white bg-red-700 mt-6 w-8 rounded-lg'>
                            {'!'}
                        </button></a>
                    </div>
                    <div className='col-span-2 flex justify-center gap-4 px-4'>
                    <div style={{width:"90px"}}><PieChart data={dataMock} lineWidth={20}></PieChart> 
                    <p className='text-center font-semibold text-white' style={{marginTop: '-72px'}}>{category.calorieIntake}</p><p className='text-center font-extralight text-sm text-white'>calories</p>
                    </div>
                    <div className='my-1 mx-2'>
                        <button onClick={incCal} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none '>+</button>
                        <p className='text-center text-white font-bold text-xl'>{cal/1000}k</p>
                        <p className='text-centre text-white font-light text-xs'>Target</p>
                        <button onClick={decCal} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none '>-</button>
                    </div>
                    <a href={"/"+category.userId+"/nutrition" } className='bg-black my-2 w-8 rounded-lg'><button className='text-2xl text-white bg-black mt-6 w-8 rounded-lg'>
                            {'>'}
                        </button></a>
                    </div>
                    <div className='mx-auto my-6'>
                        <button className='w-12 h-12 bg-green-500 rounded-lg -z-50'><box-icon name='bell'></box-icon></button>
                    </div>
                </div>
            </div>
        )
    }
    else if(category.feedback=='true'){
        return (
            <div className='py-4'>
                <div className='container mx-auto rounded-2xl grid grid-cols-11 gap-4 w-full' style={{ backgroundColor: "#1E2630" }}>
                    <div className='col-span-4 flex flex-wrap px-4'>
                        <img src={img} className="mt-6 rounded-full h-12"></img>
                        <div className='mt-6 pl-6 text-white '>
                        <p className="text-xl font-light">
                            {category.name}
                        </p>
                        <p className="text-sm font-extralight">
                        {category.email}
                        </p>
                        </div>
                    </div>
                    <div className='col-span-2 flex justify-around px-4' >
                    <div style={{ width: 84, height: 84, paddingTop:'6px' }}>
    
                    <CircularProgressbarWithChildren value={(Number(category.stepswalked)*100/Number(num))}>
                      <p className='text-center text-white font-bold'> {category.stepswalked} </p>
                      <p className='text-center text-xs text-white'> walked </p> 
                    </CircularProgressbarWithChildren>
                    </div>
                    <div className='my-1 mx-2'>
                        <button onClick={incSteps} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none'>+</button>
                        <p className='text-center text-white font-bold text-xl' id='one'>{num/1000}k</p>
                        <p className='text-centre text-white font-light text-xs'>Target</p>
                        <button onClick={decSteps} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none'>-</button>
                    </div>
                    </div>
                    <div className='col-span-2 flex justify-center gap-4 px-4'>
                        <div>
                            <div className='flex my-4'>
                            <box-icon name='calendar' color='white'></box-icon>
                            <p className='text-white font-semibold text-lg px-2'>  {pdate} </p>
                            </div>
                            <div className='flex my-4'>
                            <box-icon name='calendar-exclamation' color='white'></box-icon>
                            <p className='text-white font-semibold text-lg px-2 rounded-lg' id='sday'>  {sdate}</p>
                            </div>
                        </div>
                        <a href={"/"+category.userId+"/workout" } className='bg-red-700 my-2 w-8 rounded-lg'><button className='text-2xl text-white bg-red-700 mt-6 w-8 rounded-lg'>
                            {'!'}
                        </button></a>
                    </div>
                    <div className='col-span-2 flex justify-center gap-4 px-4'>
                    <div style={{width:"90px"}}><PieChart data={dataMock} lineWidth={20}></PieChart> 
                    <p className='text-center font-semibold text-white' style={{marginTop: '-72px'}}>{category.calorieIntake}</p><p className='text-center font-extralight text-sm text-white'>calories</p>
                    </div>
                    <div className='my-1 mx-2'>
                        <button onClick={incCal} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none '>+</button>
                        <p className='text-center text-white font-bold text-xl'>{cal/1000}k</p>
                        <p className='text-centre text-white font-light text-xs'>Target</p>
                        <button onClick={decCal} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none '>-</button>
                    </div>
                    <a href={"/"+category.userId+"/nutrition" } className='bg-black my-2 w-8 rounded-lg'><button className='text-2xl text-white bg-black mt-6 w-8 rounded-lg'>
                            {'>'}
                        </button></a>
                    </div>
                    <div className='mx-auto my-6'>
                        <button className='w-12 h-12 bg-green-500 rounded-lg -z-50'><box-icon name='bell'></box-icon></button>
                    </div>
                </div>
            </div>
        )
    }

    else if(ndate==sdate){
        return (
            <div className='py-4'>
                <div className='container mx-auto rounded-2xl grid grid-cols-11 gap-4 w-full' style={{ backgroundColor: "#1E2630" }}>
                    <div className='col-span-4 flex flex-wrap px-4'>
                        <img src={img} className="mt-6 rounded-full h-12"></img>
                        <div className='mt-6 pl-6 text-white '>
                        <p className="text-xl font-light">
                            {category.name}
                        </p>
                        <p className="text-sm font-extralight">
                        {category.email}
                        </p>
                        </div>
                    </div>
                    <div className='col-span-2 flex justify-around px-4' >
                    <div style={{ width: 84, height: 84, paddingTop:'6px' }}>
    
                    <CircularProgressbarWithChildren value={(Number(category.stepswalked)*100/Number(num))}>
                      <p className='text-center text-white font-bold'> {category.stepswalked} </p>
                      <p className='text-center text-xs text-white'> walked </p> 
                    </CircularProgressbarWithChildren>
                    </div>
                    <div className='my-1 mx-2'>
                        <button onClick={incSteps} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none'>+</button>
                        <p className='text-center text-white font-bold text-xl' id='one'>{num/1000}k</p>
                        <p className='text-centre text-white font-light text-xs'>Target</p>
                        <button onClick={decSteps} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none'>-</button>
                    </div>
                    </div>
                    <div className='col-span-2 flex justify-center gap-4 px-4'>
                        <div>
                            <div className='flex my-4'>
                            <box-icon name='calendar' color='white'></box-icon>
                            <p className='text-white font-semibold text-lg px-2'>  {pdate} </p>
                            </div>
                            <div className='flex my-4'>
                            <box-icon name='calendar-exclamation' color='white'></box-icon>
                            <p className='text-white font-semibold text-lg px-2 bg-red-700 rounded-lg' id='sday'>  {sdate}</p>
                            </div>
                        </div>
                        <a href={"/"+category.userId+"/workout" } className='bg-black my-2 w-8 rounded-lg'><button className='text-2xl text-white bg-black mt-6 w-8 rounded-lg'>
                            {'>'}
                        </button></a>
                    </div>
                    <div className='col-span-2 flex justify-center gap-4 px-4'>
                    <div style={{width:"90px"}}><PieChart data={dataMock} lineWidth={20}></PieChart> 
                    <p className='text-center font-semibold text-white' style={{marginTop: '-72px'}}>{category.calorieIntake}</p><p className='text-center font-extralight text-sm text-white'>calories</p>
                    </div>
                    <div className='my-1 mx-2'>
                        <button onClick={incCal} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none '>+</button>
                        <p className='text-center text-white font-bold text-xl'>{cal/1000}k</p>
                        <p className='text-centre text-white font-light text-xs'>Target</p>
                        <button onClick={decCal} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none '>-</button>
                    </div>
                    <a href={"/"+category.userId+"/nutrition" } className='bg-black my-2 w-8 rounded-lg'><button className='text-2xl text-white bg-black mt-6 w-8 rounded-lg'>
                            {'>'}
                        </button></a>
                    </div>
                    <div className='mx-auto my-6'>
                        <button className='w-12 h-12 bg-green-500 rounded-lg -z-50'><box-icon name='bell'></box-icon></button>
                    </div>
                </div>
            </div>
        )
    }

    else{
    return (
        <div className='py-4'>
            <div className='container mx-auto rounded-2xl grid grid-cols-11 gap-4 w-full' style={{ backgroundColor: "#1E2630" }}>
                <div className='col-span-4 flex flex-wrap px-4'>
                    <img src={img} className="mt-6 rounded-full h-12"></img>
                    <div className='mt-6 pl-6 text-white '>
                    <p className="text-xl font-light">
                        {category.name}
                    </p>
                    <p className="text-sm font-extralight">
                    {category.email}
                    </p>
                    </div>
                </div>
                <div className='col-span-2 flex justify-around px-4' >
                <div style={{ width: 84, height: 84, paddingTop:'6px' }}>

                <CircularProgressbarWithChildren value={(Number(category.stepswalked)*100/Number(num))}>
                  <p className='text-center text-white font-bold'> {category.stepswalked} </p>
                  <p className='text-center text-xs text-white'> walked </p> 
                </CircularProgressbarWithChildren>
                </div>
                <div className='my-1 mx-2'>
                    <button onClick={incSteps} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none'>+</button>
                    <p className='text-center text-white font-bold text-xl' id='one'>{num/1000}k</p>
                    <p className='text-centre text-white font-light text-xs'>Target</p>
                    <button onClick={decSteps} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none'>-</button>
                </div>
                </div>
                <div className='col-span-2 flex justify-center gap-4 px-4'>
                    <div>
                        <div className='flex my-4'>
                        <box-icon name='calendar' color='white'></box-icon>
                        <p className='text-white font-semibold text-lg px-2'>  {pdate} </p>
                        </div>
                        <div className='flex my-4'>
                        <box-icon name='calendar-exclamation' color='white'></box-icon>
                        <p className='text-white font-semibold text-lg px-2 rounded-lg' id='sday'>  {sdate}</p>
                        </div>
                    </div>
                    <a href={"/"+category.userId+"/workout" } className='bg-black my-2 w-8 rounded-lg'><button className='text-2xl text-white bg-black mt-6 w-8 rounded-lg'>
                        {'>'}
                    </button></a>
                </div>
                <div className='col-span-2 flex justify-center gap-4 px-4'>
                <div style={{width:"90px"}}><PieChart data={dataMock} lineWidth={20}></PieChart> 
                <p className='text-center font-semibold text-white' style={{marginTop: '-72px'}}>{category.calorieIntake}</p><p className='text-center font-extralight text-sm text-white'>calories</p>
                </div>
                <div className='my-1 mx-2'>
                    <button onClick={incCal} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none '>+</button>
                    <p className='text-center text-white font-bold text-xl'>{cal/1000}k</p>
                    <p className='text-centre text-white font-light text-xs'>Target</p>
                    <button onClick={decCal} className='mx-auto bg-black w-10 h-4 rounded text-white leading-none '>-</button>
                </div>
                <a href={"/"+category.userId+"/nutrition" } className='bg-black my-2 w-8 rounded-lg'><button className='text-2xl text-white bg-black mt-6 w-8 rounded-lg'>
                        {'>'}
                    </button></a>
                </div>
                <div className='mx-auto my-6'>
                    <button className='w-12 h-12 bg-green-500 rounded-lg -z-50'><box-icon name='bell'></box-icon></button>
                </div>
            </div>
        </div>
    )
    }
}