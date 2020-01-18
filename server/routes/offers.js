const express = require("express");
const router = express.Router();
const Promise = require("bluebird");

router.use(express.json());
const db = require("../db/tables/offers.js");

router.get("/ActiveOffersById", (req, res) => {});

router.get("/ClosedOffersById", (req, res) => {});

router.post("/newOffer", (req, res) => {});

router.put("/updateOfferStatus", (req, res) => {});
