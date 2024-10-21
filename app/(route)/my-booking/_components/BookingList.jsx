import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'
import CancelAppointment from './CancelAppointment'

function BookingList({bookingList,expired,updateRecord}) {
    
  
  const onDeleteBooking=(item)=>{
    // console.log(item.doctor.id)
    GlobalApi.deleteBooking(item?.id).then(resp=>{
      console.log(resp);
      if(resp)
      {
        toast('Booking Delete Successfully!');
        updateRecord()
      }
    })
  }
  return (
    <div>
        {bookingList.length>0?bookingList.map((item,index)=>(
            <div key={index} className='flex gap-4 items-center border p-5 m-3 rounded-lg'>
                <div className='flex flex-col gap-2 w-full'>
                    <h2 className='font-bold text-[18px] items-center flex justify-between'>{item?.doctor?.Name}
                    {!expired&&<CancelAppointment onContinueClick={()=>onDeleteBooking(item)}/>}
                    </h2>
                    <h2 className='flex gap-2 text-gray-500'> <MapPin className='text-primary h-5 w-5'/> 
                    {item?.doctor?.Address}</h2>
                    <h2 className='flex gap-2'><Calendar className='text-primary h-5 w-5'/> Appointment On:
                     { moment(item?.Date).format('DD-MMM-YYYY')} </h2>
                     <h2 className='flex gap-2'><Clock className='text-primary h-5 w-5'/> At Time : {item?.Time} </h2>
                </div>
            </div>
        ))
          :
          <div className='h-[150px] w-full bg-slate-100 animate-pulse rounded-lg'>
          </div>
      }
    </div>
  )
}

export default BookingList
