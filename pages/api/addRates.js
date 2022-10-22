import connectMongo from "../../utils/connectMongo";
import Rate from "../../models/ratesModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addRates(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const sample_rates = await Rate.create(req.body);
    console.log(sample_rates)
    console.log('CREATED DOCUMENT');

    res.status(200).send("OK");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
