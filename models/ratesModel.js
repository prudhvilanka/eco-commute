import { Schema, model, models } from 'mongoose';

const rateSchema = new Schema({
  from: {
    type:String,
    required: true,
    },
  to: {
    type:String,
    required:true,
  },
  date:{
    type:String,
    required:true,
  },
  rates:{
    car:{
      type: String,
      required: true,
    },
    bus:{
      type: String,
      required: true,
    },
    train:{
      type: String,
      required: true,
    },
    flight:{
      type: String,
      required: true,
    }
  },
  details:
      {
        car: {
            id:{
              type: String
            },
            model:{
              type: String
            },
            provider:{
              type: String
            },
            class:{
              type: String
            },
            rate:{
              type: String
            }         
          },
        bus: {
            id:{
              type: String
            },
            model:{
              type: String
            },
            provider:{
              type: String
            },
            class:{
              type: String
            },
            rate:{
              type: String
            }  
          },
        train:{
            id:{
              type: String
            },
            model:{
              type: String
            },
            provider:{
              type: String
            },
            class:{
              type: String
            },
            rate:{
              type: String
            }  
          },
        flight:{
            id:{
              type: String
            },
            model:{
              type: String
            },
            provider:{
              type: String
            },
            class:{
              type: String
            },
            rate:{
              type: String
            }  
        }
      }
});

const Rate = models.Rate || model('Rate', rateSchema,'sample_rates');

export default Rate;
