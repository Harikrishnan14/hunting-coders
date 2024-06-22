//http://localhost:3000/api/getblogs?slug=how-to-learn-javascript

import * as fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const slug = req.query.slug;
    const filePath = path.join(process.cwd(), 'blogdata', `${slug}.json`);

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            // console.error('Error reading file:', err);
            res.status(500).json({ error: "No Such Blog Found" });
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            res.status(200).json(jsonData);
        } catch (parseError) {
            // console.error('Error parsing JSON:', parseError);
            res.status(500).json({ error: "Error parsing JSON" });
        }
    });
}
