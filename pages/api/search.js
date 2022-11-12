import connectMongo from "../../utils/connectMongo";
import Rate from "../../models/ratesModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */



 
export default async function search(req, res) {
  try {
    let sorted_rates
    const { current, destination, date } = req.body

    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    const sample_rates = await Rate.findOne({from: current,to: destination,date: date});
    console.log(sample_rates);
    sorted_rates = sample_rates?Object.fromEntries(Object.entries(sample_rates["rates"]).sort((a,b)=>a[1]-b[1])):{}
    console.log('FETCHED');
    sample_rates?res.json(sorted_rates): res.status(500).send('No Result')
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
}