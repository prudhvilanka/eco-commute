import connectMongo from "../../utils/connectMongo";
import Rate from "../../models/ratesModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addRates(req, res) {
  try {
    const { current, destination } = req.body

    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    const sample_rates = await Rate.findOne({from: current,to: destination});

    console.log('FETCHED');
    console.log(sample_rates)
    sample_rates?res.json(sample_rates["rates"]): res.status(500).send('No Result')
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
}