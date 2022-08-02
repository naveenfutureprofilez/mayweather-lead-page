import React  from 'react';
import Api from "./Api";
import { getCsrfCookie } from "./Csrf";

class BookingControl extends React.Component {

    async createBooking(form){
        await getCsrfCookie();
        return Api.post('/api/create-prospect', form);
    }

    async getSlots(form){
        await getCsrfCookie();
        return Api.post('/api/get-slots', form);
    }

    async finalizeBooking(booking, form){
        await getCsrfCookie();
        return Api.post('/api/'+booking+'/finalize-prospect', form);
    }

    async getGyms(){
        await getCsrfCookie();
        return Api.get('/api/gyms');
    }
    async getGymsSelector(form){
        await getCsrfCookie();
        return Api.post('/api/gym-selector', form);
    }
}

export default BookingControl;