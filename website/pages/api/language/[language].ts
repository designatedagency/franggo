import Cookies from 'cookies'
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {

    const cookies = new Cookies(req, res);
    const language = req.query?.language === "nl" || req.query?.language === "en" ? req.query.language : "nl";
    cookies.set('NEXT_LOCALE', language);
    res.json({ language: req.query });
}

export default handler