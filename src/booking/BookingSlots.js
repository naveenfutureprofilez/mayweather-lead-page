import DatePicker from "react-datepicker";
import Loader from "../components/Loader";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { addDays } from 'date-fns';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import React, { useEffect, useState, useRef } from 'react';
import BookingControl from "../api/BookingControl";
import BookingSuccess from "./BookingSuccess";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    padding: 10,
    fontSize: theme.typography.pxToRem(14),
    border: '1px solid #dadde9',
  }, 
}));

export default function BookingSlots(props) {
  const [startDate, setStartDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookingDate, setBookingDate] = useState();
  const dateInput = useRef();
  const valueInput = dateInput && dateInput.current && dateInput.current.input && dateInput.current.input.value;
  const highlights = [new Date(), addDays(new Date(), 1), addDays(new Date(), 2)];
  const [noslots, setnoslots] = useState(true);
  const [slots, setSlots] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState('');
  const [location, setLocation] = useState(props.gym?props.gym:'');
  const [bookingId, setBookingId] = useState(props.bookingId);
  const [slotsAdded, setSlotsAdded] = useState(false);
  const main = new BookingControl;

  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => setOpen(false);
  const handleTooltipOpen = () => setOpen(true);

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  function handleTimeSlot(e) {
    const value = e.target.value;
    setTime(value);
    setnoslots(false); 
  }

  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12'
  ];

  const handleDateChange = async (d) => {
    setLoading(true);
    const data = new FormData;
    setTime('');
    setSlots(false); 
    const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    const dt = d.getFullYear() + '-' + months[d.getMonth()] + '-' + day;
    setDate(d.getFullYear() + '-' + months[d.getMonth()] + '-' + day);
    setBookingDate(day + '-' + months[d.getMonth()] + '-' + d.getFullYear());
    setStartDate(d); 
    setBookingDate();
    data.append("date", dt);
    data.append("gym", location);
    const resp = main.getSlots(data);
    resp.then((res) => {
      setSlots('');
      if (res.data.status) {
        setSlots(res.data.slots);
      } else {
        console.table(res.errors);
      }
      setLoading(false);
    }).catch((error) => {
      const errors = error.response.data.errors;
      Object.keys(errors).map((key) => {
        console.table('err:', errors[key]);
        let err = errors[key];
        err.map((m, i) => {
          toast.error(m);
        });
      });
    });
    setTimeout(()=>{
      setLoading(false);
    }, 500);
  }
  
  async function finalizeBooking() {
    if (time) {
      const data = new FormData;
      data.append("date", date);
      data.append("time", time);
      const resp = main.finalizeBooking(bookingId, data);
      resp.then((res) => {
        if (res.status) {
          setLoading(false);
          toast.success("Booking Created !!");
          setSlotsAdded(true);
        }
        else {
          setLoading(false);
        }
      }).catch((error) => {
        console.table(error);
        const errors = error.response.data.errors;
        Object.keys(errors).map((key) => {
          console.table('err:', errors[key]);
          let err = errors[key];
          err.map((m, i) => {
            toast.error(m);
          });
        });
      });
    } else {
      toast.error("Please select available time slot.");
    }
  }

  return <>
    <div className='form-left dateTimePicker position-relative'  >
      {loading ? <Loader /> : ''}
      <div className='grey-bg' >
        {!slotsAdded ? <>
          <div className='secTitle'>
            <h2>Date & Time</h2>
          </div>
          <p className='liDot' >Choose a time and date to experience the best workout of your life.</p>
          <div className='timeDateSelector'>
            <div className='d-selector mb-2 dateSel' >
              <label>Date</label>
              <CalendarMonthIcon />
              <DatePicker
                minDate={new Date}
                id='inputBox'
                disabledKeyboardNavigation
                selected={startDate} ref={dateInput}
                onChange={(date) => handleDateChange(date)}
                strictParsing filterTime={filterPassedTime}
                dateFormat="MMMM d, yyyy"
                highlightDates={highlights}
                onFocus={e => e.target.blur()} />
              <div className='offerInfo' >
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <div>
                    <Tooltip
                      PopperProps={{
                        disablePortal: true,
                      }}
                      onClose={handleTooltipClose}
                      open={open}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      title=" Book an appointment within the next 72 hours and receive 10% off your membership if you sign up during your visit." >
                      <Button onClick={handleTooltipOpen}><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z" /></svg>
                        <p>Special Offer!</p></Button>
                    </Tooltip>
                  </div>
                </ClickAwayListener>
              </div>
            </div>
            <div className='avilableSlot' >
              {slots ? <>
                <h2>Available Slots</h2> 
                <div className='slotList' >
                {Object.entries(slots).map(([key, m], i) => <>
                  <div key={i} className='slot' >
                    <input onChange={handleTimeSlot} type="radio" id={`slot${m.slot_start_time}`} value={m.slot_start_time} name="slot" />
                    <label htmlFor={`slot${m.slot_start_time}`} >{m.slot_start_time}</label>
                  </div>
                </>)}  
              </div>
              </>
                : <p className='NotimeSlot' >No Booking Time Slots Available !!</p>}
            </div>

          </div>
          <button onClick={finalizeBooking}
            className='btn btn-primary w-100 mt-4'>Create Booking
          </button>
        </> : <BookingSuccess  
          heading="Booking Created Successfully!!"
          email={props.fillmail} 
          time={time} 
          date={valueInput} /> }
      </div>
    </div>
  </>
} 