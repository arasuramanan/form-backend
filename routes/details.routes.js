const express = require('express');
const Details = require('../models/details.model');

const router = express.Router();

router.get('/details', async(req, res) => {
    try {
        const detail = await Details.find.toArray();
        res.send(detail);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/detailsnewform', async(req, res) => {
    console.log(req.body)
    try { 
    const newdetail = new Details(req.body);
    await newdetail.save();
    res.send("detail Created Successfully");
    } catch (error) {
        return res.status(400).json(error);
    }

});

module.exports = router;
