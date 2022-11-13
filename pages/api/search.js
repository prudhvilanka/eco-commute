import connectMongo from "../../utils/connectMongo";
import Rate from "../../models/ratesModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */



 
export default async function search(req, res) {
  try {
    let sorted_rates
    let result
    const { current, destination, date } = req.body

    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    const sample_rates = await Rate.findOne({from: current,to: destination,date: date});

    sorted_rates = sample_rates?Object.fromEntries(Object.entries(sample_rates["rates"]).sort((a,b)=>a[1]-b[1])):{}
    result={
      "rates":sorted_rates,
      "details": sample_rates["details"]
    }

    sample_rates?res.json(result): res.status(500).send('No Result')
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
}