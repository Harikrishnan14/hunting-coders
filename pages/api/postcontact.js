import * as fs from 'fs'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        let data = await fs.promises.readdir('contactdata')
        console.log(data);

        fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))
    } else {
        // Handle any other HTTP method
        res.status(200).json(["getRequest"])
    }
}