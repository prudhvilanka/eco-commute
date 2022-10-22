import { Schema, model, models } from 'mongoose';

const rateSchema = new Schema({
  from: {
    type:String,
    required: true,
    unique: true
    },
  to: {
    type:String,
    required:true,
    unique: true
  },
  rates:
    {
    car: {
        type: String
    },
    bus: {
        type: String
    },
    train:{
        type: String
    },
    flight:{
        type: String
    }
    }
});

const Rate = models.Rate || model('Rate', rateSchema,'sample_rates');

export default Rate;
