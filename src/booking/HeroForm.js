import Select from '@mui/material/Select';
import bg from '../img/Base.png';
import nameicon from '../img/nameicon.svg';
import mailicon from '../img/mailicon.svg';
import phoneicon from '../img/phoneicon.svg';
import mapicon from '../img/mapicon.svg';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Loader from '../components/Loader';
import BookingControl from '../api/BookingControl';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import BookingSlots from './BookingSlots';
import BookingSuccess from './BookingSuccess';
export default function HeroForm() {
   let navigate = useNavigate();
   const main = new BookingControl;
   const queryParams = new URLSearchParams(window.location.search);
   const t = queryParams.get("t");
   const s = queryParams.get("s");
   const g = queryParams.get("g");
   const [loading, setLoading] = useState();
   const [location, setLocation] = useState("Gym Location");
   const [locationExist, setLocationExist] = useState(false);
   const [locationDefault, setLocationDefault] = useState(0);
   const [locations, setLocations] = useState('');
   const arr = Object.entries(locations);
   const [bookingExits, setBookingExits] = useState([]);
   const [exitsBookingId, setExitsBookingId] = useState();
   const [exitsBookingEmailId, setExitsBookingEmailId] = useState();
   const [gymId, setGymId] = useState(); 
   const [phoneValid, setPhoneValid] = useState('phone');
   const handlePhone = () => checkphone();

   const checkphone = () => {
      if (data.phone.length == 10) {
         setPhoneValid(true);
      } else setPhoneValid(false);
   }
   const handleChange = (e) => setLocation(e.target.value);

   useEffect(() => {
      if (t) { 
         const response = fetch(`https://mayweatherdeals.com/api/${t}/exist`, {
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'  
            }
         }).then(res => {
            return res.json();
         }).then((jsonResp) => {
            console.table("exits", jsonResp);
            if (jsonResp.schedule) {
               setBookingExits(jsonResp);
            }
            if (jsonResp.status) {
               setFormDone(true);
               setGymId(jsonResp.gym);
               if (!jsonResp.schedule) {
                  setExitsBookingId(jsonResp && jsonResp.booking);
                  setExitsBookingEmailId(jsonResp.email); 
               }
            }
         }).catch(error => {
            console.table("server error", error);
         });
      }
   }, []);

   // get gyms
   useEffect(() => {
      var t = 'https://mayweatherdeals.com/api/gyms';
      if (g !== null) {
         t = t + '?gym_location=' + g;
      }
      const response = fetch(t, {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(res => {
         return res.json();
      }).then((jsonResp) => {
         setTimeout(() => {
            setLocations(jsonResp.gyms);
            if (jsonResp.exist !== 0) {
               setLocationDefault(jsonResp.exist);
               setLocation(jsonResp.exist);
               setLocationExist(true);
            }
         },100);
      }).catch(error => {
         console.table("server error", error);
      });
   }, [locationDefault, locationExist]);


   const [data, setData] = useState({
      name: '',
      email: '',
      phone: '',
   });

   let inputvalue, inputname;
   function inputHandle(e) {
      inputvalue = e.target.value;
      inputname = e.target.name;
      setData({ ...data, [inputname]: inputvalue });
   } 

   const [formDone, setFormDone] = useState(false);
   const acceptForm = () => {
      setLoading(true);
      checkphone();
      setTimeout(() => {
         if(phoneValid){
            const fdata = new FormData;
            fdata.append("name", data.name);
            fdata.append("email", data.email);
            fdata.append("phone", data.phone);
            fdata.append("gym_location_id", location);
            fdata.append("gym_staff_id", s ? s : '');
            const resp = main.createBooking(fdata); 
            resp.then((res) => {
               if (res.data.status) {
                  setFormDone(true);
                  setExitsBookingId(res && res.data && res.data.booking);
               } else toast.warning(res.data.msg);  
               setLoading(false); 
            }).catch((error) => {
               setLoading(false); 
               const errors = error.response.data.errors;
               Object.keys(errors).map((key) => {
                  console.table('err:', errors[key]);
                  let err = errors[key];
                  err.map((m, i) => { toast.error(m); });
               });
            }); 
         } else setLoading(false);
      }, 500);
   }

   return <>
      <div className="heroform position-relative" id="booknow" >

         {loading && <Loader />}

         {!formDone ? <div className="form-left" id="booknow" >
            <h2>Book your free
               class now!</h2>
            <p className='liDot' >Enter the information below and a member of our team will call you to verify your booking!</p>
            <div className='formOuter'>
               <div className='formOuter'>
                  <div className="fieldwrap mt-3">
                     <img src={nameicon} className="img-fluid" alt="icon" />
                     <input name="name"
                        onChange={inputHandle}
                        value={data.name}
                        className="form-control" type="text" placeholder="Your Name" />
                  </div>
                  <div className="fieldwrap mt-3">
                     <img src={mailicon} className="img-fluid" alt="icon" />
                     <input
                        name="email"
                        onChange={inputHandle}
                        value={data.email}
                        className="form-control" type="email" placeholder="Your Email" />
                  </div>
                  <div className="fieldwrap mt-3">
                     <img src={phoneicon} className="img-fluid" alt="icon" />
                     <input 
                      className="form-control" type="number" placeholder="Phone Number"
                        name="phone" onKeyUp={handlePhone}
                        onChange={inputHandle}
                        value={data.phone} />
                  </div>

                  {!phoneValid &&
                     <div className=" my-1 p-2 text-danger invalidError d-block">
                        Enter valid phone number
                     </div>
                  }

                  <div className="fieldwrap select-wrap mt-3">
                     <div className="selectwrap position-relative">
                        <img src={mapicon} className="img-fluid" alt="icon" />
                        <Select
                           id="demo-simple-select"
                           value={ locationDefault ? "1" : location}
                           disabled={locationExist}
                           defaultValue="Gym Location"
                           label="Gym Location"
                           inputProps={{ 'aria-label': 'Without label' }}
                           onChange={handleChange} >
                           <MenuItem disabled value="Gym Location">Gym Location</MenuItem>
                           {arr && arr.map((key, i) => {
                              return <MenuItem key={key[0]} value={i+1}>{key[1]}</MenuItem>
                           })}
                        </Select> 
                     </div>
                  </div>
                  <button onClick={acceptForm} className="btn btn-primary w-100 border-0 mt-4 mb-4" >Continue</button>
               </div>
               <p className='mt-2 mb-0' >You will opt in to Text Messages for this Booking & Specials. Message & Data Rates may Apply. Reply <span>STOP</span> to opt out.</p>
            </div>
         </div> : <BookingSlots gym={gymId ? gymId : location}
            exitsBookingEmailId={exitsBookingEmailId}
            exitsBookingId={exitsBookingId}
            bookingExits={bookingExits}
            fillmail={data.email} 
            bookingId={exitsBookingId} />
         }
         <div className="form-right" >
            <img src={bg} className="img-fluid" alt="hero form" />
         </div>
         
         {bookingExits.schedule && <> 
            <BookingSuccess classs="topFixed"
               heading="Booking Already Scheduled !!" 
               email={bookingExits.email}
            />
         </>}
      </div>
   </>
}